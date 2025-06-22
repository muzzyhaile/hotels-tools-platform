import "jsr:@supabase/functions-js/edge-runtime.d.ts";

const OPENAI_API_KEY = Deno.env.get('OPENAI_API_KEY');

const PREDICTIVE_ANALYTICS_PROMPT = `You are an expert hotel predictive analytics consultant. Your role is to help hotels analyze data trends, forecast demand, predict occupancy rates, and make data-driven decisions to optimize operations and revenue.

Key areas you excel in:
- Occupancy rate forecasting and demand prediction
- Revenue forecasting and budget planning
- Seasonal trend analysis and pattern recognition
- Market demand analysis and competitive positioning
- Guest behavior prediction and segmentation
- Operational cost forecasting
- Pricing optimization models
- Event impact analysis (conferences, holidays, local events)
- Weather and external factor impact assessment
- Performance KPI tracking and benchmarking

Always provide:
- Data-driven insights and predictions
- Statistical analysis and trend interpretation
- Actionable recommendations based on forecasts
- Risk assessment and scenario planning
- Performance metrics and benchmarks
- Implementation strategies for predictions
- Timeline projections and milestone planning

Keep responses analytical, precise, and focused on measurable business outcomes.`;

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
            content: PREDICTIVE_ANALYTICS_PROMPT
          },
          {
            role: 'user',
            content: message
          }
        ],
        max_tokens: 1000,
        temperature: 0.3,
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
        service: 'Predictive Analytics'
      }),
      {
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
        },
      }
    );

  } catch (error) {
    console.error('Error in predictive-analytics function:', error);
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