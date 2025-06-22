
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Services = () => {
  const services = [
    {
      title: "AI Reputation Management",
      description: "Automated review response generation and multi-platform management",
      features: [
        "Automated response generation for all reviews",
        "Multi-platform management (Google, TripAdvisor, Booking.com)",
        "Brand voice customization and training",
        "Performance analytics dashboard",
        "Sentiment analysis and trends",
        "Crisis response automation"
      ],
      badge: "Most Popular",
      badgeColor: "bg-primary text-primary-foreground"
    },
    {
      title: "Search Visibility Optimization",
      description: "Local SEO enhancement and Google Business Profile optimization",
      features: [
        "Local SEO strategy and implementation",
        "Google Business Profile optimization",
        "Keyword research for hospitality",
        "Professional photography guidance",
        "Local citation building",
        "Competitor analysis and monitoring"
      ],
      badge: "High Impact",
      badgeColor: "bg-warm-500 text-white"
    },
    {
      title: "Guest Engagement & Revenue",
      description: "Automated upsell campaigns and personalized guest communications",
      features: [
        "Automated upsell email campaigns",
        "Personalized guest communication sequences",
        "Pre-arrival and post-stay engagement",
        "Revenue opportunity identification",
        "Guest feedback collection automation",
        "Loyalty program management"
      ],
      badge: "Revenue Boost",
      badgeColor: "bg-green-600 text-white"
    }
  ];

  return (
    <section id="services" className="py-16 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6">
            Three Core Services That Transform Hotels
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our comprehensive AI platform covers every aspect of digital marketing and guest engagement, 
            specifically designed for the unique needs of independent hotels and boutique properties.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="relative card-hover border-2 hover:border-primary/20">
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between mb-4">
                  <Badge className={service.badgeColor}>
                    {service.badge}
                  </Badge>
                </div>
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
