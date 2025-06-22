
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const GettingStarted = () => {
  const steps = [
    {
      number: "01",
      title: "Quick Assessment",
      description: "We take a look at your hotel's online presence and show you what could be better.",
      duration: "15 minutes"
    },
    {
      number: "02", 
      title: "Simple Setup",
      description: "We set everything up for you. No complicated tech stuff.",
      duration: "1-2 days"
    },
    {
      number: "03",
      title: "Start Seeing Results",
      description: "AI starts working for you automatically. You focus on your guests.",
      duration: "Ongoing"
    }
  ];

  return (
    <section className="py-16 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6">
            How It Works
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Three simple steps to get your hotel competing online.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <Card key={index} className="relative card-hover border-2 hover:border-primary/20">
              <CardContent className="p-8 text-center">
                <div className="text-6xl font-bold text-primary/20 mb-4">{step.number}</div>
                <h3 className="text-xl font-bold text-foreground mb-4">{step.title}</h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">{step.description}</p>
                <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">
                  {step.duration}
                </div>
              </CardContent>
              
              {/* Connection line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-primary/30 transform -translate-y-1/2"></div>
              )}
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-lg px-8 py-4" asChild>
            <Link to="/contact">Get Your Free Assessment</Link>
          </Button>
          <p className="text-sm text-muted-foreground mt-4">
            Takes 15 minutes • No commitment required
          </p>
        </div>
      </div>
    </section>
  );
};

export default GettingStarted;
