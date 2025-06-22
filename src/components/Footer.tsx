
const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="text-xl font-bold text-primary">Hotels.tools</h3>
          </div>
          
          <div className="flex space-x-8">
            <a href="#privacy" className="text-muted-foreground hover:text-primary text-sm transition-colors">
              Privacy Policy
            </a>
            <a href="#terms" className="text-muted-foreground hover:text-primary text-sm transition-colors">
              Terms of Service
            </a>
            <a href="#contact" className="text-muted-foreground hover:text-primary text-sm transition-colors">
              Contact
            </a>
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
