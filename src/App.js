import Header from './components/Header';
import HeroSection from './components/Hero';
import TrustBadges from './components/services/Badges';
import Testimonial from './components/services/Testimonials';
import ServicesSection from './components/Services';
import CTASection from './components/CTA.';
import FAQSection from './components/FAQ';

const App = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <TrustBadges />
      <Testimonial />
      <ServicesSection />
      <CTASection />
      <FAQSection />
    </div>
  );
};

export default App;