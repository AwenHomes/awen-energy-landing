'use client';

import Image from 'next/image';
import Link from 'next/link';
import { scrollToForm } from '@/lib/utils';

export default function Header() {

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container-custom">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/">
              <Image
                src="/logo.png"
                alt="Awen Energy Logo"
                width={180}
                height={60}
                priority
                className="h-12 w-auto cursor-pointer"
              />
            </Link>
          </div>

          {/* Navigation & CTA */}
          <div className="flex items-center gap-4 md:gap-6">
            <Link
              href="/sunpower-bankruptcy-guide"
              className="text-primary-700 hover:text-primary-800 font-semibold text-sm md:text-base transition-colors flex items-center gap-2"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z" />
              </svg>
              <span className="hidden sm:inline">SunPower Guide</span>
              <span className="sm:hidden">Guide</span>
            </Link>
            <button
              onClick={scrollToForm}
              className="btn-primary text-sm md:text-base py-2 px-4 md:py-3 md:px-6"
            >
              Get Free Consultation
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
