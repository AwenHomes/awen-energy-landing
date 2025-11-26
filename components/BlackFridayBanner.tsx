'use client';

import { useEffect, useState } from 'react';
import { scrollToForm } from '@/lib/utils';

const OFFER_END_DATE = new Date('2025-12-01T23:59:59');

export default function BlackFridayBanner() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [isOfferActive, setIsOfferActive] = useState(true);

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date();
      const difference = OFFER_END_DATE.getTime() - now.getTime();

      if (difference <= 0) {
        setIsOfferActive(false);
        return { days: 0, hours: 0, minutes: 0, seconds: 0 };
      }

      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    };

    // Initial calculation
    setTimeLeft(calculateTimeLeft());

    // Update every second
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  if (!isOfferActive) {
    return null;
  }

  return (
    <div className="bg-gradient-to-r from-black via-gray-900 to-black text-white py-4 px-4 shadow-lg border-b-4 border-yellow-400">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Offer Text */}
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2 mb-1">
              <span className="bg-yellow-400 text-black px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide">
                Black Friday Special
              </span>
              <span className="text-yellow-400 font-bold text-sm">Limited Time Only</span>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold mb-1">
              Get Started for <span className="text-yellow-400">FREE</span>
            </h2>
            <p className="text-gray-300 text-sm md:text-base">
              We're waiving the $500 claim preparation fee through December 1st
            </p>
          </div>

          {/* Countdown Timer */}
          <div className="flex flex-col items-center gap-2">
            <div className="text-xs text-gray-300 uppercase tracking-wide">Offer Ends In:</div>
            <div className="flex gap-2">
              <div className="bg-white text-black rounded-lg p-2 min-w-[60px] text-center">
                <div className="text-2xl font-bold">{timeLeft.days}</div>
                <div className="text-xs uppercase">Days</div>
              </div>
              <div className="bg-white text-black rounded-lg p-2 min-w-[60px] text-center">
                <div className="text-2xl font-bold">{timeLeft.hours}</div>
                <div className="text-xs uppercase">Hours</div>
              </div>
              <div className="bg-white text-black rounded-lg p-2 min-w-[60px] text-center">
                <div className="text-2xl font-bold">{timeLeft.minutes}</div>
                <div className="text-xs uppercase">Mins</div>
              </div>
              <div className="bg-white text-black rounded-lg p-2 min-w-[60px] text-center">
                <div className="text-2xl font-bold">{timeLeft.seconds}</div>
                <div className="text-xs uppercase">Secs</div>
              </div>
            </div>
          </div>

          {/* CTA Button */}
          <button
            onClick={scrollToForm}
            className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-3 px-8 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 whitespace-nowrap"
          >
            Claim This Offer
          </button>
        </div>
      </div>
    </div>
  );
}
