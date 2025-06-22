
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import ProblemSolution from '@/components/ProblemSolution';
import Services from '@/components/Services';
import WhyChooseUs from '@/components/WhyChooseUs';
import GettingStarted from '@/components/GettingStarted';
import FinalCTA from '@/components/FinalCTA';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <ProblemSolution />
        <Services />
        <WhyChooseUs />
        <GettingStarted />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
