import Link from 'next/link';
import {
  PhoneIcon,
  EnvelopeIcon,
  MapPinIcon,
} from '@heroicons/react/24/outline';

interface IconProps {
  className?: string;
}

const socialLinks = [
  {
    name: 'WhatsApp',
    href: 'https://wa.me/5579981232193',
    icon: (props: IconProps) => (
      <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.465 3.486" />
      </svg>
    ),
  },
  {
    name: 'Instagram',
    href: 'https://instagram.com',
    icon: (props: IconProps) => (
      <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
        <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987s11.987-5.367 11.987-11.987C24.004 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.349-1.051-2.349-2.348s1.052-2.349 2.349-2.349 2.348 1.052 2.348 2.349-1.051 2.348-2.348 2.348zm7.718 0c-1.297 0-2.349-1.051-2.349-2.348s1.052-2.349 2.349-2.349 2.348 1.052 2.348 2.349-1.051 2.348-2.348 2.348z" />
      </svg>
    ),
  },
  {
    name: 'Facebook',
    href: 'https://facebook.com',
    icon: (props: IconProps) => (
      <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
  },
  {
    name: 'X (Twitter)',
    href: 'https://x.com',
    icon: (props: IconProps) => (
      <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    name: 'YouTube',
    href: 'https://youtube.com',
    icon: (props: IconProps) => (
      <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
      </svg>
    ),
  },
];

const quickLinks = [
  { name: 'FAQ', href: '/faq' },
  { name: 'Como Participar', href: '/como-participar' },
  { name: 'Sobre', href: '/sobre' },
  { name: 'Editais', href: '/editais' },
];

export default function Footer() {
  return (
    <footer className="bg-neutral-900 text-white">
      {/* Main Footer */}
      <div className="content-width section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Logo e Descrição */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <Link href="/" className="inline-block group">
                <span className="text-2xl font-bold bg-gradient-to-r from-primary-400 to-primary-600 bg-clip-text text-transparent">
                  Emendas Participativas
                </span>
              </Link>
            </div>
            <p className="body-medium text-neutral-300 mb-6 max-w-md">
              Promovendo um mandato transparente e colaborativo, onde a
              população decide diretamente como os recursos públicos serão
              utilizados.
            </p>

            {/* Redes Sociais */}
            <div>
              <h4 className="font-semibold text-white mb-4">Siga-nos</h4>
              <div className="flex space-x-4">
                {socialLinks.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="w-10 h-10 bg-neutral-800 rounded-xl flex items-center justify-center text-neutral-400 hover:text-white hover:bg-primary-600 transition-all duration-200 hover:scale-110"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="sr-only">{item.name}</span>
                    <item.icon className="w-5 h-5" />
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Links Rápidos */}
          <div>
            <h4 className="font-semibold text-white mb-6">Links Rápidos</h4>
            <ul className="space-y-3">
              {quickLinks.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="body-medium text-neutral-300 hover:text-primary-400 transition-colors duration-200 flex items-center group"
                  >
                    <span className="group-hover:translate-x-1 transition-transform duration-200">
                      {item.name}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h4 className="font-semibold text-white mb-6">Contato</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 flex-shrink-0 text-primary-400 mt-0.5">
                  <PhoneIcon className="w-full h-full" />
                </div>
                <div>
                  <p className="body-small text-neutral-300">Telefone</p>
                  <Link
                    href="tel:+5579981232193"
                    className="font-medium text-white hover:text-primary-400 transition-colors duration-200"
                  >
                    (79) 98123-2193
                  </Link>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-6 h-6 flex-shrink-0 text-primary-400 mt-0.5">
                  <EnvelopeIcon className="w-full h-full" />
                </div>
                <div>
                  <p className="body-small text-neutral-300">Email</p>
                  <Link
                    href="mailto:contato@emendasparticipativas.com.br"
                    className="font-medium text-white hover:text-primary-400 transition-colors duration-200"
                  >
                    contato@emendasparticipativas.com.br
                  </Link>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-6 h-6 flex-shrink-0 text-primary-400 mt-0.5">
                  <MapPinIcon className="w-full h-full" />
                </div>
                <div>
                  <p className="body-small text-neutral-300">Gabinete</p>
                  <p className="font-medium text-white">
                    Rua Frei Paulo, 444
                    <br />
                    Suíssa, Aracaju-SE
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-neutral-800">
        <div className="content-width py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="body-small text-neutral-400">
              © {new Date().getFullYear()} Emendas Participativas. Todos os
              direitos reservados.
            </p>

            <div className="flex items-center gap-6">
              <Link
                href="/politica-privacidade"
                className="body-small text-neutral-400 hover:text-neutral-300 transition-colors duration-200"
              >
                Política de Privacidade
              </Link>
              <Link
                href="/termos-uso"
                className="body-small text-neutral-400 hover:text-neutral-300 transition-colors duration-200"
              >
                Termos de Uso
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
