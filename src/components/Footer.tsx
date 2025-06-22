
const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="text-xl font-bold text-primary">Hotels.tools</h3>
          </div>
        </div>
        
        <div className="border-t border-primary/20 mt-6 pt-6 text-center">
          <p className="text-muted-foreground text-sm">
            © 2024 Hotels.tools. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
