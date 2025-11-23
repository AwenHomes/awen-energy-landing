import Header from '@/components/Header';
import Hero from '@/components/Hero';
import ProblemStatement from '@/components/ProblemStatement';
import WhoThisIsFor from '@/components/WhoThisIsFor';
import HowItWorks from '@/components/HowItWorks';
import Pricing from '@/components/Pricing';
import FAQ from '@/components/FAQ';
import ContactForm from '@/components/ContactForm';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        <Hero />
        <ProblemStatement />
        <WhoThisIsFor />
        <HowItWorks />
        <Pricing />
        <FAQ />
        <ContactForm />
        <Footer />
      </main>
    </>
  );
}
