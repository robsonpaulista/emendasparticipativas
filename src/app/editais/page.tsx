import Link from 'next/link';
import {
  AcademicCapIcon,
  HeartIcon,
  SunIcon,
  BriefcaseIcon,
  ClockIcon,
  CheckCircleIcon,
  CalendarIcon,
  InformationCircleIcon,
  PhoneIcon,
  ArrowRightIcon,
} from '@heroicons/react/24/outline';

export default function EditaisPage() {
  return (
    <div className="bg-white">
      <div className="container pt-4 pb-8 lg:pb-16">
        {/* Hero Section */}
        <div className="text-center mb-8 lg:mb-16">
          <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl mb-3">
            Editais <span className="text-blue-600">Disponíveis</span>
          </h1>
          <p className="text-base text-gray-600 max-w-2xl mx-auto">
            Conheça as áreas de investimento e participe do processo democrático
          </p>
        </div>

        {/* Status da Votação */}
        <div className="mb-8 lg:mb-16">
          <div className="max-w-4xl mx-auto">
            <div className="group relative bg-white rounded-2xl border-2 border-blue-200 hover:border-blue-400 p-6 hover:shadow-xl hover:ring-4 hover:ring-blue-200 transition-all duration-300 hover:-translate-y-2 hover:scale-105">
              <div className="flex items-center gap-4 mb-4">
                <div className="relative w-12 h-12 bg-blue-600 rounded-2xl flex items-center justify-center shadow-lg transition-all duration-300 group-hover:scale-110 group-hover:rotate-3">
                  <ClockIcon className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-gray-900 group-hover:text-gray-800 transition-colors">
                    Status da Votação
                  </h2>
                  <div className="text-xs font-medium px-2 py-1 rounded-full inline-block bg-blue-100 text-blue-700">
                    Em andamento
                  </div>
                </div>
              </div>

              <p className="text-gray-600 text-sm leading-relaxed">
                A análise técnica das propostas está em andamento. A votação
                popular será aberta em abril de 2025.
              </p>

              {/* Status indicator */}
              <div className="absolute -top-2 -right-2">
                <div className="relative w-4 h-4 bg-blue-600 rounded-full flex items-center justify-center">
                  <div className="absolute inset-0 bg-blue-600 rounded-full animate-ping opacity-20"></div>
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Editais por Área */}
        <div className="mb-8 lg:mb-16">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl mb-3">
              Áreas de Investimento
            </h2>
            <p className="text-base text-gray-600 max-w-2xl mx-auto">
              Escolha as áreas onde deseja que os recursos sejam investidos
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {[
              {
                title: 'Educação',
                description:
                  'Projetos para melhoria da infraestrutura educacional, equipamentos e programas de ensino',
                icon: AcademicCapIcon,
                available: true,
                proposals: 12,
              },
              {
                title: 'Saúde',
                description:
                  'Iniciativas para fortalecimento do sistema de saúde e bem-estar da população',
                icon: HeartIcon,
                available: true,
                proposals: 8,
              },
              {
                title: 'Agricultura',
                description:
                  'Apoio ao desenvolvimento rural sustentável e fortalecimento da agricultura familiar',
                icon: SunIcon,
                available: false,
                proposals: 5,
              },
              {
                title: 'Capacitação Profissional',
                description:
                  'Programas de qualificação e capacitação para desenvolvimento de competências profissionais',
                icon: BriefcaseIcon,
                available: true,
                proposals: 7,
              },
            ].map((edital, index) => (
              <div
                key={index}
                className="group relative bg-white rounded-2xl border-2 border-blue-200 hover:border-blue-400 p-6 hover:shadow-xl hover:ring-4 hover:ring-blue-200 transition-all duration-300 hover:-translate-y-2 hover:scale-105"
              >
                {/* Status indicator */}
                <div className="absolute -top-2 -right-2">
                  <div className="relative w-4 h-4 bg-blue-500 rounded-full flex items-center justify-center">
                    <div className="absolute inset-0 bg-blue-500 rounded-full animate-ping opacity-20"></div>
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                </div>

                {/* Icon container */}
                <div className="flex items-center gap-4 mb-4">
                  <div className="relative w-12 h-12 bg-blue-500 group-hover:bg-blue-600 rounded-2xl flex items-center justify-center shadow-lg transition-all duration-300 group-hover:scale-110 group-hover:rotate-3">
                    <edital.icon className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-gray-800 transition-colors">
                      {edital.title}
                    </h3>
                    <div
                      className={`text-xs font-medium px-2 py-1 rounded-full inline-block mt-1 ${
                        edital.available
                          ? 'bg-blue-100 text-blue-700'
                          : 'bg-gray-100 text-gray-700'
                      }`}
                    >
                      {edital.available ? 'Disponível' : 'Em breve'}
                    </div>
                  </div>
                </div>

                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  {edital.description}
                </p>

                <div className="text-sm text-gray-500 mb-4">
                  {edital.proposals} propostas submetidas
                </div>

                {/* Action button */}
                <div className="inline-flex items-center justify-center w-full px-4 py-2.5 bg-gradient-to-r from-blue-600 to-blue-700 text-white text-sm font-medium rounded-xl hover:from-blue-700 hover:to-blue-800 hover:shadow-lg transition-all duration-300 group-hover:scale-105">
                  {edital.available ? 'Ver Edital' : 'Notificar-me'}
                  <ArrowRightIcon className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Próximos Editais */}
        <div className="mb-8 lg:mb-16">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl mb-3">
              Próximos Editais
            </h2>
            <p className="text-base text-gray-600 max-w-2xl mx-auto">
              Fique atento aos próximos editais que serão lançados
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              {
                title: 'Infraestrutura Urbana',
                description:
                  'Projetos de melhoria da infraestrutura urbana e mobilidade',
                date: 'Previsão: Maio 2025',
                icon: CalendarIcon,
              },
              {
                title: 'Meio Ambiente',
                description:
                  'Iniciativas de preservação ambiental e sustentabilidade',
                date: 'Previsão: Junho 2025',
                icon: CalendarIcon,
              },
            ].map((edital, index) => (
              <div
                key={index}
                className="group relative bg-white rounded-2xl border-2 border-gray-200 hover:border-gray-300 p-6 hover:shadow-xl hover:ring-4 hover:ring-gray-200 transition-all duration-300 hover:-translate-y-2 hover:scale-105"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="relative w-12 h-12 bg-gray-400 group-hover:bg-gray-500 rounded-2xl flex items-center justify-center shadow-lg transition-all duration-300 group-hover:scale-110 group-hover:rotate-3">
                    <edital.icon className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-gray-800 transition-colors">
                      {edital.title}
                    </h3>
                    <div className="text-xs font-medium px-2 py-1 rounded-full inline-block mt-1 bg-gray-100 text-gray-700">
                      Em breve
                    </div>
                  </div>
                </div>

                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  {edital.description}
                </p>

                <div className="text-sm text-blue-600 font-medium">
                  {edital.date}
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
            Acesse informações importantes sobre o processo
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
                title: 'Perguntas Frequentes',
                description: 'Tire suas dúvidas sobre o processo',
                icon: CheckCircleIcon,
                link: '/faq',
              },
              {
                title: 'Contato',
                description: 'Fale conosco diretamente',
                icon: PhoneIcon,
                link: '/sobre',
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
