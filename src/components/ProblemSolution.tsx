
import { Card, CardContent } from '@/components/ui/card';
import { X, CheckCircle } from 'lucide-react';

const ProblemSolution = () => {
  const problems = [
    {
      icon: X,
      title: "Overwhelming Review Management",
      description: "Manually responding to reviews across Google, TripAdvisor, Booking.com takes hours daily"
    },
    {
      icon: X,
      title: "Poor Search Visibility",
      description: "Independent hotels struggle to compete with chain hotels in local search results"
    },
    {
      icon: X,
      title: "Missed Revenue Opportunities",
      description: "Low guest engagement leads to fewer upsells, repeat bookings, and referrals"
    },
    {
      icon: X,
      title: "Time-Consuming Tasks",
      description: "Manual reputation management steals time from providing exceptional guest experiences"
    }
  ];

  const solutions = [
    {
      icon: CheckCircle,
      title: "AI-Powered Automation",
      description: "Automated review responses that maintain your brand voice across all platforms"
    },
    {
      icon: CheckCircle,
      title: "Enhanced Search Presence",
      description: "Local SEO optimization and Google Business Profile management for maximum visibility"
    },
    {
      icon: CheckCircle,
      title: "Revenue Growth Tools",
      description: "Personalized guest communication and automated upsell campaigns"
    },
    {
      icon: CheckCircle,
      title: "More Time for Guests",
      description: "Focus on hospitality while AI handles your digital marketing automatically"
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6">
            The Challenges Independent Hotels Face Today
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            While chain hotels dominate digital marketing with dedicated teams and enterprise tools, 
            independent properties struggle with limited resources and expertise.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Problems */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-foreground mb-8 text-center lg:text-left">
              Common Pain Points
            </h3>
            {problems.map((problem, index) => (
              <Card key={index} className="border-red-200 bg-red-50/50 card-hover">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <problem.icon className="w-6 h-6 text-red-500 mt-1" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">{problem.title}</h4>
                      <p className="text-muted-foreground">{problem.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Solutions */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-foreground mb-8 text-center lg:text-left">
              Our AI-Powered Solutions
            </h3>
            {solutions.map((solution, index) => (
              <Card key={index} className="border-green-200 bg-green-50/50 card-hover">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <solution.icon className="w-6 h-6 text-green-600 mt-1" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">{solution.title}</h4>
                      <p className="text-muted-foreground">{solution.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSolution;
