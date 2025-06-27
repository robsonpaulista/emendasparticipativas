import {
  AcademicCapIcon,
  HeartIcon,
  SunIcon,
  BriefcaseIcon,
  ArrowRightIcon,
} from '@heroicons/react/24/outline';

export default function EditaisPage() {
  return (
    <div className="bg-gradient-to-br from-black via-gray-900 to-black min-h-screen">
      <div className="container pt-32 pb-8 lg:pb-16">
        {/* Hero Section */}
        <div className="text-center mb-8 lg:mb-16">
          <h1 className="text-2xl font-bold tracking-tight text-white sm:text-3xl mb-3">
            Editais <span className="text-blue-500">Disponíveis</span>
          </h1>
          <p className="text-base text-white/70 max-w-2xl mx-auto">
            Conheça as áreas disponíveis e participe do processo democrático
            apresentando seu projeto
          </p>
        </div>

        {/* Editais por Área */}
        <div className="mb-8 lg:mb-16">
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
                className="group relative bg-black/40 backdrop-blur-xl rounded-2xl border border-blue-500/30 hover:border-blue-400 p-6 hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-300 hover:-translate-y-2"
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
                  <div className="relative w-12 h-12 bg-blue-500/20 rounded-2xl flex items-center justify-center shadow-lg transition-all duration-300 group-hover:scale-110 group-hover:rotate-3">
                    <edital.icon className="h-6 w-6 text-blue-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
                      {edital.title}
                    </h3>
                    <div
                      className={`text-xs font-medium px-2 py-1 rounded-full inline-block mt-1 ${
                        edital.available
                          ? 'bg-blue-500/20 text-blue-400'
                          : 'bg-gray-500/20 text-gray-400'
                      }`}
                    >
                      {edital.available ? 'Disponível' : 'Em breve'}
                    </div>
                  </div>
                </div>

                <p className="text-white/70 text-sm leading-relaxed mb-4">
                  {edital.description}
                </p>

                <div className="text-sm text-white/50 mb-4">
                  {edital.proposals} propostas submetidas
                </div>

                {/* Action button */}
                <div className="relative inline-flex items-center justify-center w-full px-6 py-3 bg-transparent font-medium rounded-lg hover:bg-blue-600/10 hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-blue-500/25 text-sm overflow-hidden group border-spinning-button">
                  <span className="text-blue-400">
                    {edital.available ? 'Ver Edital' : 'Notificar-me'}
                  </span>
                  <ArrowRightIcon className="ml-2 h-4 w-4 text-blue-400 group-hover:translate-x-1 transition-transform duration-300" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
