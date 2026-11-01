import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Treatments from '@/components/Treatments';
import WhyChooseUs from '@/components/WhyChooseUs';
import Gallery from '@/components/Gallery';
import Appointment from '@/components/Appointment';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import { useScrollReveal } from '@/hooks/useScrollReveal';

function App() {
  useScrollReveal();

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Treatments />
        <WhyChooseUs />
        <Gallery />
        <Appointment />
        <Contact />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}

export default App;
