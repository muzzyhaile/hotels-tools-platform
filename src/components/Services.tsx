
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const Services = () => {
  const services = [
    {
      title: "AI Reputation Management",
      description: "Let AI handle your online reviews",
      features: [
        "AI review responses",
        "Manages Google, TripAdvisor, Booking.com",
        "Matches your hotel's voice",
        "Simple dashboard to track everything",
        "AI-powered upsell opportunities"
      ]
    },
    {
      title: "Search Visibility",
      description: "Help guests find you online",
      features: [
        "Better Google search rankings",
        "Optimized business profile",
        "Local search improvements",
        "Photography tips"
      ]
    },
    {
      title: "Guest Communication",
      description: "Automated emails that increase revenue",
      features: [
        "Pre-arrival welcome emails",
        "Upsell opportunities",
        "Post-stay follow-ups",
        "Personalized guest messages"
      ]
    }
  ];

  return (
    <section id="services" className="py-16 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6">
            Simple Tools That Work
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Everything your hotel needs to compete online, made simple.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="card-hover border-2 hover:border-primary/20">
              <CardHeader className="pb-4">
                <CardTitle className="text-2xl font-bold text-foreground mb-2">
                  {service.title}
                </CardTitle>
                <p className="text-muted-foreground">
                  {service.description}
                </p>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
