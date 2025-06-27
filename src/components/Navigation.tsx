'use client';

import { useState, useEffect } from 'react';
import {
  Bars3Icon,
  XMarkIcon,
  ChevronDownIcon,
  ArrowRightIcon,
} from '@heroicons/react/24/outline';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navigation = [
  { name: 'Editais', href: '/editais' },
  { name: 'Editais Anteriores', href: '/editais-anteriores' },
  { name: 'Identidade Visual', href: '/identidade-visual' },
];

const moreMenuItems = [
  { name: 'FAQ', href: '/faq' },
  { name: 'Como Participar', href: '/como-participar' },
  { name: 'Sobre', href: '/sobre' },
];

export default function Navigation() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [moreMenuOpen, setMoreMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isCurrentPage = (href: string) => {
    if (href === '/') {
      return pathname === '/';
    }
    return pathname.startsWith(href);
  };

  return (
    <div
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-black/50 backdrop-blur-md border-b border-white/10'
          : 'bg-black/25 backdrop-blur-sm border-b border-transparent'
      }`}
    >
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <nav className="flex h-20 items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center group">
              <div className="text-left">
                <h1 className="text-lg font-bold text-white group-hover:text-blue-300 transition-colors duration-200">
                  EMENDAS PARTICIPATIVAS
                </h1>
                <p className="text-xs text-white/80 -mt-1 uppercase tracking-wider">
                  Dep. Fed. Jadyel Alencar
                </p>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => {
              const isCurrent = isCurrentPage(item.href);
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`text-sm font-medium transition-all duration-200 relative group ${
                    isCurrent ? 'text-white' : 'text-white/80 hover:text-white'
                  }`}
                >
                  {item.name}
                  <span
                    className={`absolute -bottom-2 left-0 w-full h-0.5 bg-gradient-to-r from-blue-400 to-blue-600 transition-all duration-200 ${
                      isCurrent
                        ? 'opacity-100 scale-x-100'
                        : 'opacity-0 scale-x-0 group-hover:opacity-100 group-hover:scale-x-100'
                    }`}
                  />
                </Link>
              );
            })}

            {/* More Menu */}
            <div className="relative">
              <button
                type="button"
                className="text-sm font-medium text-white/80 hover:text-white transition-all duration-200 flex items-center group"
                onClick={() => setMoreMenuOpen(!moreMenuOpen)}
              >
                Mais
                <ChevronDownIcon
                  className={`ml-1 h-4 w-4 transition-transform duration-200 ${moreMenuOpen ? 'rotate-180' : 'rotate-0'}`}
                />
                <span
                  className={`absolute -bottom-2 left-0 w-full h-0.5 bg-gradient-to-r from-blue-400 to-blue-600 transition-all duration-200 ${
                    moreMenuOpen
                      ? 'opacity-100 scale-x-100'
                      : 'opacity-0 scale-x-0 group-hover:opacity-100 group-hover:scale-x-100'
                  }`}
                />
              </button>

              {moreMenuOpen && (
                <>
                  <div
                    className="fixed inset-0 z-10"
                    onClick={() => setMoreMenuOpen(false)}
                  />
                  <div className="absolute right-0 z-20 mt-4 w-56 origin-top-right">
                    <div className="bg-black/20 backdrop-blur-lg border border-white/5 rounded-xl shadow-2xl overflow-hidden">
                      <div className="py-2">
                        {moreMenuItems.map((item) => (
                          <Link
                            key={item.name}
                            href={item.href}
                            className="block px-4 py-3 text-sm text-white/80 hover:text-white hover:bg-white/10 transition-all duration-200"
                            onClick={() => setMoreMenuOpen(false)}
                          >
                            {item.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>

          {/* Right side buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <Link
              href="/admin"
              className={`px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
                pathname.startsWith('/admin')
                  ? 'text-white bg-white/10 border border-white/20'
                  : 'text-white/80 hover:text-white hover:bg-white/10'
              }`}
            >
              Admin
            </Link>
            <Link
              href="/votar"
              className="group relative inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white text-sm font-semibold rounded-lg transition-all duration-300 hover:from-blue-700 hover:to-blue-800 hover:scale-105 overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-2">
                Votar Agora
                <ArrowRightIcon className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-blue-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center lg:hidden">
            <button
              type="button"
              className="relative inline-flex items-center justify-center rounded-lg p-2 text-white/80 hover:text-white hover:bg-white/10 transition-colors duration-200"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <span className="sr-only">Abrir menu</span>
              <div className="relative">
                <Bars3Icon
                  className={`block h-6 w-6 transition-all duration-300 ${mobileMenuOpen ? 'rotate-90 opacity-0' : 'rotate-0 opacity-100'}`}
                />
                <XMarkIcon
                  className={`absolute inset-0 h-6 w-6 transition-all duration-300 ${mobileMenuOpen ? 'rotate-0 opacity-100' : '-rotate-90 opacity-0'}`}
                />
              </div>
            </button>
          </div>
        </nav>

        {/* Mobile menu */}
        <div
          className={`lg:hidden transition-all duration-300 ease-in-out overflow-hidden ${
            mobileMenuOpen ? 'max-h-96 opacity-100 pb-6' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="border-t border-white/5 bg-black/20 backdrop-blur-lg -mx-4 px-4">
            <div className="space-y-1 pt-4">
              {navigation.map((item) => {
                const isCurrent = isCurrentPage(item.href);
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`block px-4 py-3 text-base font-medium rounded-lg transition-all duration-200 ${
                      isCurrent
                        ? 'text-white bg-white/10 border border-white/20'
                        : 'text-white/80 hover:text-white hover:bg-white/10'
                    }`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                );
              })}

              <div className="border-t border-white/10 my-4" />

              {moreMenuItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block px-4 py-3 text-base font-medium text-white/80 hover:text-white hover:bg-white/10 rounded-lg transition-all duration-200"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}

              <div className="flex flex-col gap-3 pt-4">
                <Link
                  href="/admin"
                  className="px-4 py-3 text-center text-white/80 hover:text-white hover:bg-white/10 rounded-lg transition-all duration-200"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Admin
                </Link>
                <Link
                  href="/votar"
                  className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-300"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Votar Agora
                  <ArrowRightIcon className="ml-2 w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
