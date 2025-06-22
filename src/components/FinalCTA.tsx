
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const FinalCTA = () => {
  return (
    <section className="py-16 lg:py-24 hero-gradient">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <Card className="max-w-4xl mx-auto border-2 border-primary/20 shadow-2xl">
          <CardContent className="p-8 lg:p-12 text-center">
            <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6">
              Ready to Transform Your Hotel's Digital Presence?
            </h2>
            
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
              Join innovative hoteliers who are using AI to compete with chain hotels, 
              increase revenue, and provide better guest experiences.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-lg px-8 py-4">
                Schedule Your Free Assessment
              </Button>
              <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground text-lg px-8 py-4">
                View Pricing Options
              </Button>
            </div>

            {/* Trust elements */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8 border-t border-border">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">30-Day</div>
                <div className="text-sm text-muted-foreground">Money-Back Guarantee</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">No</div>
                <div className="text-sm text-muted-foreground">Long-Term Contracts</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">24/7</div>
                <div className="text-sm text-muted-foreground">Expert Support</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default FinalCTA;
