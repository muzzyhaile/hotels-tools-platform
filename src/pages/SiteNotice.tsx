
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const SiteNotice = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-8">
            Site Notice
          </h1>
          
          <div className="prose prose-lg max-w-none text-muted-foreground space-y-6">
            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Information in accordance with § 5 TMG</h2>
              <p>
                Hotels.tools<br />
                [Company Address]<br />
                [City, Postal Code]<br />
                [Country]
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Contact Information</h2>
              <p>
                Telephone: [Phone Number]<br />
                E-Mail: [Email Address]<br />
                Internet address: https://hotels.tools
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Responsible for Content</h2>
              <p>
                [Name]<br />
                [Address]<br />
                [City, Postal Code]<br />
                [Country]
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Disclaimer</h2>
              
              <h3 className="text-xl font-medium text-foreground mb-2">Liability for Contents</h3>
              <p>
                As service providers, we are liable for own contents of these websites according to Sec. 7, para.1 German Teleservices Act (TMG). However, according to Sec. 8 to 10 German Teleservices Act (TMG), service providers are not under obligation to permanently monitor submitted or stored information or to search for evidences that indicate illegal activities.
              </p>
              
              <h3 className="text-xl font-medium text-foreground mb-2">Liability for Links</h3>
              <p>
                Our offer includes links to external third party websites. We have no influence on the contents of those websites, therefore we cannot guarantee for those contents. Providers or administrators of linked websites are always responsible for their own contents.
              </p>
              
              <h3 className="text-xl font-medium text-foreground mb-2">Copyright</h3>
              <p>
                Contents and compilations published on these websites by the providers are subject to German copyright laws. Reproduction, editing, distribution as well as the use of any kind outside the scope of the copyright law require a written permission of the author or originator.
              </p>
            </section>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default SiteNotice;
