import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import TechStack from './components/TechStack';
import Services from './components/Services';
import Timeline from './components/Timeline';
import Testimonials from './components/Testimonials';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="bg-black text-gray-300 min-h-screen relative font-sans selection:bg-violet-600/30 selection:text-white">
      {/* Navbar */}
      <Navbar />

      {/* Main Content Sections */}
      <main>
        {/* Hero Section */}
        <Hero />

        {/* About Section */}
        <About />

        {/* Technology Stack */}
        <TechStack />

        {/* Offerings and Services */}
        <Services />

        {/* Workflow Process Timeline */}
        <Timeline />

        {/* Customer Testimonials */}
        <Testimonials />

        {/* Contact Form CTA */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
