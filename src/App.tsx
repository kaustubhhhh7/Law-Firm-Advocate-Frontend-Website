import type { FC } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Process from './components/Process';
import PracticeAreas from './components/PracticeAreas';
import WhyChooseUs from './components/WhyChooseUs';
import AdvocateProfile from './components/AdvocateProfile';
import Stats from './components/Stats';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import BookingUI from './components/BookingUI';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import { ThemeProvider } from './context/ThemeContext';

const App: FC = () => {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-luxury-bg selection:bg-luxury-gold selection:text-white transition-colors duration-500">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Process />
          <AdvocateProfile />
          <Stats />
          <PracticeAreas />
          <WhyChooseUs />
          <FAQ />
          <BookingUI />
          <Testimonials />
          <ContactForm />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default App;
