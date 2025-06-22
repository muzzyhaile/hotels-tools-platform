
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <Link to="/">
                <h1 className="text-2xl font-bold text-gradient">Hotels.tools</h1>
              </Link>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <Link to="/" className="text-foreground hover:text-primary transition-colors duration-200 font-medium">
                Home
              </Link>
              <Link to="/about" className="text-muted-foreground hover:text-primary transition-colors duration-200 font-medium">
                About
              </Link>
              <Link to="/pricing" className="text-muted-foreground hover:text-primary transition-colors duration-200 font-medium">
                Pricing
              </Link>
              <Link to="/contact" className="text-muted-foreground hover:text-primary transition-colors duration-200 font-medium">
                Contact
              </Link>
            </div>
          </nav>

          {/* Desktop CTAs */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground" asChild>
              <Link to="/contact">Free Assessment</Link>
            </Button>
            <Button className="bg-primary hover:bg-primary/90" asChild>
              <Link to="/contact">Get Started</Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button variant="ghost" size="icon" onClick={toggleMenu}>
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-background border-t">
              <Link to="/" className="block px-3 py-2 text-foreground hover:text-primary transition-colors duration-200 font-medium">
                Home
              </Link>
              <Link to="/about" className="block px-3 py-2 text-muted-foreground hover:text-primary transition-colors duration-200 font-medium">
                About
              </Link>
              <Link to="/pricing" className="block px-3 py-2 text-muted-foreground hover:text-primary transition-colors duration-200 font-medium">
                Pricing
              </Link>
              <Link to="/contact" className="block px-3 py-2 text-muted-foreground hover:text-primary transition-colors duration-200 font-medium">
                Contact
              </Link>
              <div className="pt-4 pb-2 space-y-2">
                <Button variant="outline" className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground" asChild>
                  <Link to="/contact">Free Assessment</Link>
                </Button>
                <Button className="w-full bg-primary hover:bg-primary/90" asChild>
                  <Link to="/contact">Get Started</Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
