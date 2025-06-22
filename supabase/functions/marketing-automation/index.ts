import "jsr:@supabase/functions-js/edge-runtime.d.ts";

const OPENAI_API_KEY = Deno.env.get('OPENAI_API_KEY');

const MARKETING_AUTOMATION_PROMPT = `You are an expert hotel marketing automation assistant. Your role is to help hotels create and optimize their marketing campaigns, automate guest outreach, and develop targeted marketing strategies.

Key areas you excel in:
- Email marketing campaigns and automation sequences
- Social media content planning and scheduling
- Guest segmentation and personalized marketing
- Promotional campaigns and special offers
- Brand messaging and positioning
- Digital marketing strategies (SEO, SEM, social media)
- Guest retention and loyalty programs
- Marketing analytics and performance optimization
- Content marketing for hotels
- Influencer and partnership marketing

Always provide:
- Specific, actionable marketing strategies
- Campaign templates and examples
- Automation workflow suggestions
- ROI optimization tips
- Measurable goals and KPIs
- Timeline and implementation guidance

Keep responses concise, practical, and focused on driving bookings and revenue growth.`;

Deno.serve(async (req: Request) => {
  // Handle CORS
  if (req.method === 'OPTIONS') {
    return new Response(null, {
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
        'Access-Control-Allow-Methods': 'POST, OPTIONS',
      },
    });
  }

  try {
    const { message } = await req.json();
    
    if (!message) {
      return new Response(
        JSON.stringify({ 
          success: false, 
          error: 'Message is required' 
        }),
        { 
          status: 400,
          headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
          }
        }
      );
    }

    if (!OPENAI_API_KEY) {
      return new Response(
        JSON.stringify({ 
          success: false, 
          error: 'OpenAI API key not configured' 
        }),
        { 
          status: 500,
          headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
          }
        }
      );
    }

    // Call OpenAI API
    const openaiResponse = await fetch('https://api.openai.com/v1/chat/completions', {
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
            content: MARKETING_AUTOMATION_PROMPT
          },
          {
            role: 'user',
            content: message
          }
        ],
        max_tokens: 1000,
        temperature: 0.7,
      }),
    });

    if (!openaiResponse.ok) {
      const errorData = await openaiResponse.text();
      console.error('OpenAI API error:', errorData);
      return new Response(
        JSON.stringify({ 
          success: false, 
          error: 'Failed to get AI response' 
        }),
        { 
          status: 500,
          headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
          }
        }
      );
    }

    const aiData = await openaiResponse.json();
    const aiMessage = aiData.choices?.[0]?.message?.content;

    if (!aiMessage) {
      return new Response(
        JSON.stringify({ 
          success: false, 
          error: 'No response from AI' 
        }),
        { 
          status: 500,
          headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
          }
        }
      );
    }

    return new Response(
      JSON.stringify({
        success: true,
        response: aiMessage,
        service: 'Marketing Automation'
      }),
      {
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
        },
      }
    );

  } catch (error) {
    console.error('Error in marketing-automation function:', error);
    return new Response(
      JSON.stringify({ 
        success: false, 
        error: 'Internal server error' 
      }),
      { 
        status: 500,
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
        }
      }
    );
  }
}); 