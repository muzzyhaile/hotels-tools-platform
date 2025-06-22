import Header from '@/components/Header';
import Footer from '@/components/Footer';

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
                About Hotels.tools
              </h1>
              <p className="text-xl text-muted-foreground">
                We're hospitality professionals who built the AI solution we wished existed when we were managing independent properties.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-6">Our Story</h2>
                <p className="text-lg text-muted-foreground mb-4">
                  Hotels.tools was born from the frustration of managing digital marketing for independent hotels. We saw how chain hotels dominated online visibility while boutique properties struggled with limited resources and technical expertise.
                </p>
              </div>
              <div>
                <img 
                  src="public\hotelstools.webp" 
                  alt="Hotel team collaboration"
                  className="rounded-lg shadow-lg w-full"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🏨</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Hospitality First</h3>
                <p className="text-muted-foreground">Built by hoteliers for hoteliers</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🤖</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">AI Innovation</h3>
                <p className="text-muted-foreground">Cutting-edge technology made simple</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">📈</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Proven Results</h3>
                <p className="text-muted-foreground">Real impact for real hotels</p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default About;
