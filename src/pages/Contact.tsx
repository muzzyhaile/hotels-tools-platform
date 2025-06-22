import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Link } from 'react-router-dom';

const Contact = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Schedule Your Free Consultation
            </h1>
            <p className="text-xl text-muted-foreground">
              Let's discuss how AI can transform your hotel's digital presence. No commitment required.
            </p>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Contact Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <form action="https://formspree.io/f/xanjpyjl" method="POST" className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="firstName">First Name</Label>
                    <Input id="firstName" name="firstName" placeholder="Enter your first name" required />
                  </div>
                  <div>
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input id="lastName" name="lastName" placeholder="Enter your last name" required />
                  </div>
                </div>
                
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" name="email" type="email" placeholder="Enter your email" required />
                </div>
                
                <div>
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input id="phone" name="phone" type="tel" placeholder="Enter your phone number" />
                </div>
                
                <div>
                  <Label htmlFor="hotelName">Hotel Name</Label>
                  <Input id="hotelName" name="hotelName" placeholder="Enter your hotel name" />
                </div>
                
                <div>
                  <Label htmlFor="message">How can we help?</Label>
                  <Textarea id="message" name="message" placeholder="Tell us about your hotel and what you'd like to improve" className="min-h-[120px]" required />
                </div>
                
                <div className="flex items-start space-x-3">
                  <Checkbox id="privacy" name="privacy" className="mt-1" required />
                  <Label htmlFor="privacy" className="text-sm leading-relaxed">
                    I agree to the processing of my personal data according to the{' '}
                    <Link to="/privacy-policy" className="text-primary hover:underline">
                      Privacy Policy
                    </Link>
                    .
                  </Label>
                </div>
                
                <Button type="submit" size="lg" className="w-full">
                  Schedule Free Consultation
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
