import { Link } from 'react-router-dom';
import CookieSettings from '@/components/CookieSettings';

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="text-xl font-bold text-primary">Hotels.tools</h3>
          </div>
          
          <div className="flex flex-wrap justify-center md:justify-end gap-6 text-sm">
            <Link to="/privacy-policy" className="text-muted-foreground hover:text-primary transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms-of-service" className="text-muted-foreground hover:text-primary transition-colors">
              Terms of Service
            </Link>
            <Link to="/site-notice" className="text-muted-foreground hover:text-primary transition-colors">
              Site Notice
            </Link>
            <CookieSettings />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
