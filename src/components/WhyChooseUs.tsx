
import { Card, CardContent } from '@/components/ui/card';

const WhyChooseUs = () => {
  const reasons = [
    {
      title: "Built for Hospitality",
      description: "Developed by hospitality professionals who understand the unique challenges of independent hotels",
      icon: "🏨"
    },
    {
      title: "AI Innovation Leader",
      description: "Cutting-edge artificial intelligence specifically trained on hospitality data and best practices",
      icon: "🤖"
    },
    {
      title: "No Technical Expertise Required",
      description: "Simple setup and intuitive interface - focus on your guests while we handle the technology",
      icon: "⚡"
    },
    {
      title: "Dedicated Account Management",
      description: "Personal account manager who understands your property and provides ongoing strategy support",
      icon: "👥"
    },
    {
      title: "Transparent Pricing",
      description: "Clear, value-based pricing tiers with no hidden fees or surprise costs",
      icon: "💰"
    },
    {
      title: "Proven Results",
      description: "Average 47% increase in search visibility and 98% review response rate within 90 days",
      icon: "📈"
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6">
            Why Independent Hotels Choose Hotels.tools
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We're not just another SaaS platform. We're hospitality professionals who built the AI solution 
            we wished existed when we were managing independent properties.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <Card key={index} className="text-center card-hover border-2 hover:border-primary/20">
              <CardContent className="p-8">
                <div className="text-4xl mb-4">{reason.icon}</div>
                <h3 className="text-xl font-bold text-foreground mb-4">{reason.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{reason.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Trust Elements */}
        <div className="mt-16 text-center">
          <div className="flex flex-wrap justify-center items-center gap-8 text-muted-foreground">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              <span>Money-back guarantee</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              <span>No long-term contracts</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              <span>SOC 2 Type II certified</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              <span>24/7 support available</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
