import Link from 'next/link';
import {
  UserIcon,
  BuildingOfficeIcon,
  PhoneIcon,
  EnvelopeIcon,
  MapPinIcon,
  GlobeAltIcon,
  InformationCircleIcon,
  ArrowRightIcon,
} from '@heroicons/react/24/outline';

export default function SobrePage() {
  return (
    <div className="bg-white">
      <div className="container pt-4 pb-8 lg:pb-16">
        {/* Hero Section */}
        <div className="text-center mb-8 lg:mb-16">
          <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl mb-3">
            Sobre as{' '}
            <span className="text-blue-600">Emendas Participativas</span>
          </h1>
          <p className="text-base text-gray-600 max-w-2xl mx-auto">
            Conheça mais sobre o projeto e como entrar em contato conosco
          </p>
        </div>

        {/* Sobre o Projeto */}
        <div className="mb-8 lg:mb-16">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl mb-3">
              Sobre o Projeto
            </h2>
            <p className="text-base text-gray-600 max-w-2xl mx-auto">
              As emendas participativas democratizam a escolha de investimentos
              públicos
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="group relative bg-white rounded-2xl border-2 border-blue-200 hover:border-blue-400 p-6 hover:shadow-xl hover:ring-4 hover:ring-blue-200 transition-all duration-300 hover:-translate-y-2 hover:scale-105">
              <div className="flex items-start gap-4">
                <div className="relative w-12 h-12 bg-blue-500 group-hover:bg-blue-600 rounded-2xl flex items-center justify-center shadow-lg transition-all duration-300 group-hover:scale-110 group-hover:rotate-3">
                  <InformationCircleIcon className="h-6 w-6 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-gray-800 transition-colors mb-3">
                    O que são Emendas Participativas?
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    As emendas participativas são uma ferramenta de democracia
                    direta que permite à população escolher, através de votação,
                    quais projetos devem receber recursos públicos. Este
                    processo garante que os investimentos atendam às reais
                    necessidades da comunidade.
                  </p>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    O projeto é uma iniciativa do Deputado Federal Jadyel
                    Alencar, que busca aproximar o cidadão das decisões sobre o
                    orçamento público, promovendo transparência e participação
                    popular na gestão dos recursos destinados ao desenvolvimento
                    do estado.
                  </p>
                </div>
              </div>

              {/* Status indicator */}
              <div className="absolute -top-2 -right-2">
                <div className="relative w-4 h-4 bg-blue-500 rounded-full flex items-center justify-center">
                  <div className="absolute inset-0 bg-blue-500 rounded-full animate-ping opacity-20"></div>
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Informações de Contato */}
        <div className="mb-8 lg:mb-16">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl mb-3">
              Informações de Contato
            </h2>
            <p className="text-base text-gray-600 max-w-2xl mx-auto">
              Entre em contato conosco para esclarecer dúvidas ou obter mais
              informações
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              {
                title: 'Deputado Federal',
                info: 'Jadyel Alencar',
                description: 'Autor das Emendas Participativas',
                icon: UserIcon,
              },
              {
                title: 'Gabinete',
                info: 'Câmara dos Deputados',
                description: 'Brasília - DF',
                icon: BuildingOfficeIcon,
              },
              {
                title: 'Telefone',
                info: '(61) 3215-5555',
                description: 'Horário comercial',
                icon: PhoneIcon,
              },
              {
                title: 'E-mail',
                info: 'contato@jadyelalencar.com.br',
                description: 'Atendimento oficial',
                icon: EnvelopeIcon,
              },
              {
                title: 'Endereço',
                info: 'Anexo IV, Gabinete 123',
                description: 'Câmara dos Deputados',
                icon: MapPinIcon,
              },
              {
                title: 'Site Oficial',
                info: 'www.jadyelalencar.com.br',
                description: 'Mais informações',
                icon: GlobeAltIcon,
              },
            ].map((contact, index) => (
              <div
                key={index}
                className="group relative bg-white rounded-2xl border-2 border-blue-200 hover:border-blue-400 p-6 hover:shadow-xl hover:ring-4 hover:ring-blue-200 transition-all duration-300 hover:-translate-y-2 hover:scale-105"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="relative w-12 h-12 bg-blue-500 group-hover:bg-blue-600 rounded-2xl flex items-center justify-center shadow-lg transition-all duration-300 group-hover:scale-110 group-hover:rotate-3">
                    <contact.icon className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-gray-800 transition-colors">
                      {contact.title}
                    </h3>
                  </div>
                </div>

                <div className="mb-2">
                  <p className="text-blue-600 font-medium text-sm">
                    {contact.info}
                  </p>
                </div>

                <p className="text-gray-600 text-sm leading-relaxed">
                  {contact.description}
                </p>

                {/* Status indicator */}
                <div className="absolute -top-2 -right-2">
                  <div className="relative w-4 h-4 bg-blue-500 rounded-full flex items-center justify-center">
                    <div className="absolute inset-0 bg-blue-500 rounded-full animate-ping opacity-20"></div>
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Links Úteis */}
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl mb-3">
            Links Úteis
          </h2>
          <p className="text-base text-gray-600 max-w-2xl mx-auto mb-8">
            Acesse mais informações sobre o processo
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              {
                title: 'Como Participar',
                description: 'Veja o passo a passo completo',
                icon: InformationCircleIcon,
                link: '/como-participar',
              },
              {
                title: 'Ver Editais',
                description: 'Confira todos os editais disponíveis',
                icon: BuildingOfficeIcon,
                link: '/editais',
              },
              {
                title: 'Perguntas Frequentes',
                description: 'Tire suas dúvidas sobre o processo',
                icon: InformationCircleIcon,
                link: '/faq',
              },
            ].map((link, index) => (
              <Link
                key={index}
                href={link.link}
                className="group relative bg-white rounded-2xl border-2 border-blue-200 hover:border-blue-400 p-6 hover:shadow-xl hover:ring-4 hover:ring-blue-200 transition-all duration-300 hover:-translate-y-2 hover:scale-105 block"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="relative w-12 h-12 bg-blue-500 group-hover:bg-blue-600 rounded-2xl flex items-center justify-center shadow-lg transition-all duration-300 group-hover:scale-110 group-hover:rotate-3">
                    <link.icon className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-gray-800 transition-colors">
                      {link.title}
                    </h3>
                  </div>
                </div>

                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  {link.description}
                </p>

                <div className="inline-flex items-center justify-center w-full px-4 py-2.5 bg-gradient-to-r from-blue-600 to-blue-700 text-white text-sm font-medium rounded-xl hover:from-blue-700 hover:to-blue-800 hover:shadow-lg transition-all duration-300 group-hover:scale-105">
                  Acessar
                  <ArrowRightIcon className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
