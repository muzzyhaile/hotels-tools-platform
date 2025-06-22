import Header from '@/components/Header';
import Footer from '@/components/Footer';

const SiteNotice = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-8">
              Site Notice
            </h1>
            
            <div className="prose prose-lg max-w-none text-muted-foreground space-y-6">
              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">Information pursuant to Sect. 5 German Telemedia Act (TMG)</h2>
                <p>
                  Mussie Haile<br />
                  Guiding-Ventures<br />
                  Lohmühlenstraße 65<br />
                  12435 Berlin
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">Contact</h2>
                <p>
                  Phone: +4917687053245<br />
                  E-mail: admin@guidingventures.com
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">VAT ID</h2>
                <p>
                  Sales tax identification number according to Sect. 27 a of the Sales Tax Law:<br />
                  DE348867516
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">Person responsible for editorial</h2>
                <p>
                  Mussie Haile
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">EU dispute resolution</h2>
                <p>
                  The European Commission provides a platform for online dispute resolution (ODR): <a href="https://ec.europa.eu/consumers/odr/" className="text-primary hover:underline">https://ec.europa.eu/consumers/odr/</a>.<br />
                  Our e-mail address can be found above in the site notice.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">Dispute resolution proceedings in front of a consumer arbitration board</h2>
                <p>
                  We are not willing or obliged to participate in dispute resolution proceedings in front of a consumer arbitration board.
                </p>
              </section>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default SiteNotice;
