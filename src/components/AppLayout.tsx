import Navigation from './Navigation';
import HeroSection from './HeroSection';
import StatsSection from './StatsSection';
import YouTubeSection from './YouTubeSection';
import CustomAISection from './CustomAISection';
import ToolsShowcase from './ToolsShowcase';
import WhyChooseSection from './WhyChooseSection';
import ComparisonTable from './ComparisonTable';
import PerfectForSection from './PerfectForSection';
import PricingSection from './PricingSection';
import TestimonialsSection from './TestimonialsSection';
import FounderSection from './FounderSection';
import BlogSection from './BlogSection';
import FAQSection from './FAQSection';
import DemoCallSection from './DemoCallSection';
import AEOOptimization from './AEOOptimization';
import KeywordOptimization from './KeywordOptimization';
import Footer from './Footer';
import WhatsAppWidget from './WhatsAppWidget';
import CookieConsent from './CookieConsent';

export default function AppLayout() {
  return (
    <div className="min-h-screen bg-[#0A0E27]">
      <Navigation />
      <HeroSection />
      <StatsSection />
      <YouTubeSection />
      <CustomAISection />
      <ToolsShowcase />
      <WhyChooseSection />
      <ComparisonTable />
      <PerfectForSection />
      <PricingSection />
      <TestimonialsSection />
      <FounderSection />
      <BlogSection />
      <FAQSection />
      <DemoCallSection />
      {/* AEO and keyword content moved here to keep them below main content and avoid top-page clutter */}
      <KeywordOptimization />
      <AEOOptimization />
      <Footer />
      <WhatsAppWidget />
      <CookieConsent />
    </div>
  );
}
