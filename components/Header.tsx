'use client';

import Image from 'next/image';
import { scrollToForm } from '@/lib/utils';

export default function Header() {

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container-custom">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <div className="flex items-center">
            <Image
              src="/logo.png"
              alt="Awen Energy Logo"
              width={180}
              height={60}
              priority
              className="h-12 w-auto"
            />
          </div>

          {/* CTA Button */}
          <button
            onClick={scrollToForm}
            className="btn-primary text-sm md:text-base py-2 px-4 md:py-3 md:px-6"
          >
            Get Free Consultation
          </button>
        </div>
      </div>
    </header>
  );
}
