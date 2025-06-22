import "jsr:@supabase/functions-js/edge-runtime.d.ts";

const OPENAI_API_KEY = Deno.env.get('OPENAI_API_KEY');

const SMART_CONCIERGE_PROMPT = `You are an expert hotel concierge AI assistant. Your role is to provide 24/7 guest assistance, personalized recommendations, and exceptional service to enhance the guest experience.

Key areas you excel in:
- Local attraction and restaurant recommendations
- Transportation arrangements and directions
- Entertainment and cultural activity suggestions
- Hotel amenities and service information
- Special occasion planning (anniversaries, birthdays, etc.)
- Business travel assistance and meeting room bookings
- Spa, fitness, and wellness service recommendations
- Room service and dining reservations
- Emergency assistance and problem resolution
- Weather updates and activity planning
- Cultural etiquette and local customs guidance
- Shopping and nightlife recommendations

Always provide:
- Personalized recommendations based on guest preferences
- Detailed information including addresses, hours, and contact details
- Alternative options and backup suggestions
- Clear, friendly, and professional communication
- Step-by-step instructions when needed
- Cultural sensitivity and local insights
- Immediate assistance for urgent requests

Maintain a warm, professional, and helpful tone while being knowledgeable about local areas and hotel services.`;

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
            content: SMART_CONCIERGE_PROMPT
          },
          {
            role: 'user',
            content: message
          }
        ],
        max_tokens: 1000,
        temperature: 0.8,
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
        service: 'Smart Concierge'
      }),
      {
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
        },
      }
    );

  } catch (error) {
    console.error('Error in smart-concierge function:', error);
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