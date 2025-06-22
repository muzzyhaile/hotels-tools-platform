
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const Hero = () => {
  return (
    <section id="home" className="relative overflow-hidden hero-gradient">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="max-w-2xl animate-fade-in">
            <Badge variant="secondary" className="mb-6 bg-warm-100 text-warm-800 border-warm-200">
              🚀 Introducing Hotels.tools - New AI Solution
            </Badge>
            
            <h1 className="text-4xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
              Transform Your Hotel's 
              <span className="text-gradient"> Digital Presence</span> with AI
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              AI-powered reputation management and guest engagement platform designed specifically for independent hotels and boutique properties. Boost your search visibility, automate review responses, and increase revenue.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-lg px-8 py-4">
                Schedule Free Consultation
              </Button>
              <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground text-lg px-8 py-4">
                View Pricing
              </Button>
            </div>

            <div className="flex items-center gap-8 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span>No long-term contracts</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span>Money-back guarantee</span>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative animate-slide-up">
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=600&h=500&fit=crop&crop=center" 
                alt="Luxury hotel lobby showcasing modern hospitality"
                className="rounded-2xl shadow-2xl w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
            </div>
            
            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 bg-white p-4 rounded-xl shadow-lg border animate-scale-in">
              <div className="text-2xl font-bold text-primary">98%</div>
              <div className="text-sm text-muted-foreground">Review Response Rate</div>
            </div>
            
            <div className="absolute -bottom-4 -left-4 bg-white p-4 rounded-xl shadow-lg border animate-scale-in" style={{ animationDelay: '0.2s' }}>
              <div className="text-2xl font-bold text-primary">+47%</div>
              <div className="text-sm text-muted-foreground">Search Visibility</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
