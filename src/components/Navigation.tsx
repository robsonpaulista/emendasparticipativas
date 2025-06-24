'use client';

import { useState } from 'react';
import {
  Bars3Icon,
  XMarkIcon,
  ChevronDownIcon,
  ArrowRightIcon,
} from '@heroicons/react/24/outline';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navigation = [
  { name: 'Edital', href: '/editais' },
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

  const isCurrentPage = (href: string) => {
    if (href === '/') {
      return pathname === '/';
    }
    return pathname.startsWith(href);
  };

  return (
    <div className="sticky top-0 z-50 bg-white">
      <div className="container pt-4">
        <nav className="glass bg-blue-600/95 backdrop-blur-xl border border-blue-500/20 mx-auto max-w-7xl">
          <div className="px-4 sm:px-6 lg:px-8">
            <div className="flex h-16 items-center justify-between">
              {/* Logo */}
              <div className="flex-shrink-0">
                <Link href="/" className="flex items-center">
                  <div className="text-left">
                    <h1 className="text-xl font-bold text-white hover:scale-105 transition-transform duration-200">
                      Dep Fed Jadyel Alencar
                    </h1>
                    <p className="text-xs text-blue-100 -mt-1">
                      Emendas Participativas 2025/2026
                    </p>
                  </div>
                </Link>
              </div>

              {/* Mobile menu button */}
              <div className="flex items-center sm:hidden">
                <button
                  type="button"
                  className="relative inline-flex items-center justify-center rounded-xl p-2 text-blue-100 hover:bg-blue-500 hover:text-white transition-colors duration-200"
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Abrir menu</span>
                  <div className="relative">
                    <Bars3Icon
                      className={`block h-6 w-6 transition-all duration-300 ${mobileMenuOpen ? 'rotate-90 opacity-0' : 'rotate-0 opacity-100'}`}
                      aria-hidden="true"
                    />
                    <XMarkIcon
                      className={`absolute inset-0 h-6 w-6 transition-all duration-300 ${mobileMenuOpen ? 'rotate-0 opacity-100' : '-rotate-90 opacity-0'}`}
                      aria-hidden="true"
                    />
                  </div>
                </button>
              </div>

              {/* Desktop Navigation */}
              <div className="hidden sm:ml-8 sm:flex sm:space-x-1">
                {navigation.map((item) => {
                  const isCurrent = isCurrentPage(item.href);
                  return (
                    <Link
                      key={item.name}
                      href={item.href}
                      className={`relative px-4 py-2 text-sm font-medium rounded-xl transition-all duration-200 ${
                        isCurrent
                          ? 'text-white bg-blue-700'
                          : 'text-blue-100 hover:text-white hover:bg-blue-500'
                      }`}
                    >
                      {item.name}
                      {isCurrent && (
                        <div className="absolute inset-x-1 -bottom-0.5 h-0.5 bg-gradient-to-r from-white to-blue-100 rounded-full" />
                      )}
                    </Link>
                  );
                })}

                {/* More Menu */}
                <div className="relative">
                  <button
                    type="button"
                    className="relative px-4 py-2 text-sm font-medium text-blue-100 hover:text-white hover:bg-blue-500 rounded-xl transition-all duration-200 flex items-center"
                    onClick={() => setMoreMenuOpen(!moreMenuOpen)}
                  >
                    Mais
                    <ChevronDownIcon
                      className={`ml-2 h-4 w-4 transition-transform duration-200 ${moreMenuOpen ? 'rotate-180' : 'rotate-0'}`}
                      aria-hidden="true"
                    />
                  </button>

                  {moreMenuOpen && (
                    <>
                      <div
                        className="fixed inset-0 z-10"
                        onClick={() => setMoreMenuOpen(false)}
                      />
                      <div className="absolute right-0 z-20 mt-2 w-56 origin-top-right">
                        <div className="card border border-neutral-200/50 shadow-strong animate-scale-in">
                          <div className="py-2">
                            {moreMenuItems.map((item, index) => (
                              <Link
                                key={item.name}
                                href={item.href}
                                className="block px-4 py-3 text-sm text-neutral-700 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-150"
                                onClick={() => setMoreMenuOpen(false)}
                                style={{ animationDelay: `${index * 50}ms` }}
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
              <div className="hidden sm:flex items-center space-x-3">
                <Link
                  href="/admin"
                  className={`px-4 py-2 text-sm font-medium rounded-xl transition-all duration-200 ${
                    pathname.startsWith('/admin')
                      ? 'text-white bg-blue-700'
                      : 'text-blue-100 hover:text-white hover:bg-blue-500'
                  }`}
                >
                  Admin
                </Link>
                <Link
                  href="/votar"
                  className="btn-primary btn-sm hover-lift animate-breathing hover:animate-none relative overflow-hidden group"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    Votar Agora
                    <ArrowRightIcon className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute -inset-1 bg-gradient-to-r from-blue-400 via-purple-500 to-blue-600 rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
                </Link>
              </div>
            </div>
          </div>

          {/* Mobile menu */}
          <div
            className={`sm:hidden transition-all duration-300 ease-in-out ${
              mobileMenuOpen
                ? 'max-h-96 opacity-100'
                : 'max-h-0 opacity-0 overflow-hidden'
            }`}
          >
            <div className="border-t border-blue-500/30 bg-blue-600/95 backdrop-blur-xl">
              <div className="px-4 sm:px-6 lg:px-8">
                <div className="space-y-1 pb-4 pt-2">
                  {navigation.map((item, index) => {
                    const isCurrent = isCurrentPage(item.href);
                    return (
                      <Link
                        key={item.name}
                        href={item.href}
                        className={`block px-4 py-3 text-base font-medium rounded-xl transition-all duration-200 ${
                          isCurrent
                            ? 'text-white bg-blue-700'
                            : 'text-blue-100 hover:text-white hover:bg-blue-500'
                        }`}
                        onClick={() => setMobileMenuOpen(false)}
                        style={{ animationDelay: `${index * 100}ms` }}
                      >
                        {item.name}
                      </Link>
                    );
                  })}

                  <div className="border-t border-blue-500/30 my-2" />

                  {moreMenuItems.map((item, index) => {
                    const isCurrent = isCurrentPage(item.href);
                    return (
                      <Link
                        key={item.name}
                        href={item.href}
                        className={`block px-4 py-3 text-base font-medium rounded-xl transition-all duration-200 ${
                          isCurrent
                            ? 'text-white bg-blue-700'
                            : 'text-blue-100 hover:text-white hover:bg-blue-500'
                        }`}
                        onClick={() => setMobileMenuOpen(false)}
                        style={{
                          animationDelay: `${(navigation.length + index) * 100}ms`,
                        }}
                      >
                        {item.name}
                      </Link>
                    );
                  })}

                  <div className="border-t border-blue-500/30 my-2" />

                  <Link
                    href="/admin"
                    className={`block px-4 py-3 text-base font-medium rounded-xl transition-all duration-200 ${
                      pathname.startsWith('/admin')
                        ? 'text-white bg-blue-700'
                        : 'text-blue-100 hover:text-white hover:bg-blue-500'
                    }`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Admin
                  </Link>

                  <Link
                    href="/votar"
                    className="block mt-4"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <div className="btn-primary w-full justify-center animate-breathing hover:animate-none relative overflow-hidden group">
                      <span className="relative z-10 flex items-center gap-2">
                        Votar Agora
                        <ArrowRightIcon className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                      </span>
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <div className="absolute -inset-1 bg-gradient-to-r from-blue-400 via-purple-500 to-blue-600 rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}
