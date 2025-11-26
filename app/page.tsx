import dynamic from 'next/dynamic';
import Header from '@/components/Header';
import BlackFridayBanner from '@/components/BlackFridayBanner';
import Hero from '@/components/Hero';
import ProblemStatement from '@/components/ProblemStatement';
import WhoThisIsFor from '@/components/WhoThisIsFor';
import HowItWorks from '@/components/HowItWorks';
import Footer from '@/components/Footer';

// Lazy load below-fold components for better initial load performance
const Pricing = dynamic(() => import('@/components/Pricing'), {
  loading: () => (
    <div className="section-padding bg-white">
      <div className="container-custom">
        <div className="animate-pulse">
          <div className="h-8 bg-gray-200 rounded w-64 mx-auto mb-4"></div>
          <div className="h-4 bg-gray-200 rounded w-96 mx-auto mb-16"></div>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="h-96 bg-gray-200 rounded-xl"></div>
            <div className="h-96 bg-gray-200 rounded-xl"></div>
            <div className="h-96 bg-gray-200 rounded-xl"></div>
          </div>
        </div>
      </div>
    </div>
  ),
});

const FAQ = dynamic(() => import('@/components/FAQ'), {
  loading: () => (
    <div className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="animate-pulse">
          <div className="h-8 bg-gray-200 rounded w-64 mx-auto mb-4"></div>
          <div className="h-4 bg-gray-200 rounded w-96 mx-auto mb-16"></div>
          <div className="max-w-4xl mx-auto space-y-4">
            <div className="h-20 bg-gray-200 rounded-lg"></div>
            <div className="h-20 bg-gray-200 rounded-lg"></div>
            <div className="h-20 bg-gray-200 rounded-lg"></div>
            <div className="h-20 bg-gray-200 rounded-lg"></div>
          </div>
        </div>
      </div>
    </div>
  ),
});

const ContactForm = dynamic(() => import('@/components/ContactForm'), {
  loading: () => (
    <div className="section-padding bg-gradient-to-br from-primary-50 to-white">
      <div className="container-custom">
        <div className="animate-pulse">
          <div className="h-8 bg-gray-200 rounded w-64 mx-auto mb-4"></div>
          <div className="h-4 bg-gray-200 rounded w-96 mx-auto mb-12"></div>
          <div className="max-w-3xl mx-auto">
            <div className="h-96 bg-gray-200 rounded-xl"></div>
          </div>
        </div>
      </div>
    </div>
  ),
});

export default function Home() {
  return (
    <>
      <Header />
      <BlackFridayBanner />
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
