
import { Card, CardContent } from '@/components/ui/card';

const WhyChooseUs = () => {
  const reasons = [
    {
      title: "Made for Hotels",
      description: "Built by people who actually ran hotels and understand your daily challenges",
      icon: "🏨"
    },
    {
      title: "Actually Easy to Use",
      description: "Set up in minutes, not weeks. No tech skills needed",
      icon: "⚡"
    },
    {
      title: "Personal Support",
      description: "Real people who know your hotel and help when you need it",
      icon: "👥"
    },
    {
      title: "Fair Pricing",
      description: "Simple pricing that makes sense for small hotels",
      icon: "💰"
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6">
            Why Hotels Choose Us
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We're not a big tech company. We're hotel people who built something that actually helps.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
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
      </div>
    </section>
  );
};

export default WhyChooseUs;
