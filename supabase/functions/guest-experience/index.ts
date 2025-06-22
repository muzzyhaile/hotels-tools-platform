import "jsr:@supabase/functions-js/edge-runtime.d.ts";

const OPENAI_API_KEY = Deno.env.get('OPENAI_API_KEY');

const GUEST_EXPERIENCE_PROMPT = `You are an expert hotel guest experience and customer service consultant. Help hotels improve guest satisfaction and create memorable experiences.

Focus on:
- Guest journey optimization
- Personalization strategies
- Service recovery techniques
- Guest feedback analysis
- Loyalty program enhancement
- Digital experience improvement
- Staff training recommendations
- Amenity optimization

Provide empathetic, guest-focused solutions that enhance satisfaction and encourage repeat visits.

User query: `;

Deno.serve(async (req: Request) => {
  if (req.method !== 'POST') {
    return new Response('Method not allowed', { status: 405 });
  }

  try {
    const { message } = await req.json();
    
    if (!message) {
      return new Response('Message is required', { status: 400 });
    }

    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${OPENAI_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'gpt-4o-mini',
        messages: [
          {
            role: 'system',
            content: GUEST_EXPERIENCE_PROMPT
          },
          {
            role: 'user',
            content: message
          }
        ],
        max_tokens: 1000,
        temperature: 0.8
      })
    });

    if (!response.ok) {
      throw new Error(`OpenAI API error: ${response.statusText}`);
    }

    const data = await response.json();
    
    return new Response(JSON.stringify({
      success: true,
      response: data.choices[0].message.content,
      service: 'Guest Experience'
    }), {
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'POST',
        'Access-Control-Allow-Headers': 'Content-Type, Authorization'
      }
    });

  } catch (error) {
    console.error('Error:', error);
    return new Response(JSON.stringify({
      success: false,
      error: error.message
    }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      }
    });
  }
}); 