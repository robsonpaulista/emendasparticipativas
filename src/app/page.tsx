import Link from 'next/link';
import {
  AcademicCapIcon,
  ArrowRightIcon,
  BriefcaseIcon,
  CheckCircleIcon,
  ClockIcon,
  DocumentTextIcon,
  MegaphoneIcon,
  TrophyIcon,
  HeartIcon,
  SunIcon,
} from '@heroicons/react/24/outline';

export default function HomePage() {
  return (
    <div className="bg-white">
      <div className="container pt-4 pb-8 lg:pb-16">
        {/* Hero Section com Background Image - Formato de card consistente */}
        <div className="mx-auto max-w-7xl">
          <div className="relative bg-white lg:bg-gradient-to-br lg:from-blue-50 lg:to-blue-100 rounded-b-3xl overflow-hidden lg:min-h-[600px]">
            {/* Background Image com Overlay - Apenas Desktop */}
            <div className="absolute inset-0 hidden lg:block">
              <img
                src="/CAPA1.png"
                alt="Emendas Participativas"
                className="w-full h-full object-cover object-center opacity-100"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-white/70"></div>
            </div>

            {/* Layout Mobile (Vertical) e Desktop (Horizontal) */}
            <div className="relative">
              {/* Layout Mobile - Vertical */}
              <div className="block lg:hidden">
                {/* Imagem no Mobile */}
                <div className="h-48 sm:h-56 relative overflow-hidden rounded-t-3xl">
                  <img
                    src="/CAPA1.png"
                    alt="Emendas Participativas"
                    className="w-full h-full object-cover object-center"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-white via-white/50 to-transparent"></div>
                </div>

                {/* Texto no Mobile */}
                <div className="p-6 pb-0 text-center bg-white">
                  <h1 className="text-xl font-bold tracking-tight text-gray-900 sm:text-2xl mb-4">
                    O <span className="text-blue-600">FUTURO</span> É PRA JÁ.
                    <br />E VOCÊ DECIDE AGORA.
                  </h1>

                  <p className="text-sm text-gray-700 mb-6 max-w-md mx-auto">
                    Com emendas participativas, damos voz à população para
                    escolher, de forma democrática e transparente, onde investir
                    os recursos que transformam o nosso estado.
                  </p>

                  <div className="flex flex-col gap-3">
                    <Link
                      href="/editais"
                      className="inline-flex items-center justify-center px-5 py-2.5 bg-blue-600 text-white font-medium rounded-xl hover:bg-blue-700 hover:shadow-lg hover:scale-105 transition-all duration-300 text-sm"
                    >
                      Ver Editais Disponíveis
                      <ArrowRightIcon className="ml-2 h-4 w-4" />
                    </Link>
                    <Link
                      href="/como-participar"
                      className="inline-flex items-center justify-center px-5 py-2.5 bg-white text-blue-700 font-medium rounded-xl hover:bg-blue-50 hover:shadow-lg hover:scale-105 transition-all duration-300 border border-blue-200 text-sm"
                    >
                      Como Participar
                    </Link>
                  </div>
                </div>
              </div>

              {/* Layout Desktop - Horizontal */}
              <div className="hidden lg:block">
                <div className="relative grid lg:grid-cols-6 gap-8 items-center p-8 lg:p-12 pt-16 min-h-[600px]">
                  {/* Espaço vazio à esquerda para a imagem aparecer */}
                  <div className="lg:col-span-3"></div>

                  {/* Texto à Direita */}
                  <div className="lg:col-span-3 text-left">
                    <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl lg:text-4xl mb-5">
                      O <span className="text-blue-600">FUTURO</span> É PRA JÁ.
                      <br />E VOCÊ DECIDE AGORA.
                    </h1>

                    <p className="text-base text-gray-700 mb-6">
                      Com emendas participativas, damos voz à população para
                      escolher, de forma democrática e transparente, onde
                      investir os recursos que transformam o nosso estado. O
                      futuro começa com sua escolha.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-3">
                      <Link
                        href="/editais"
                        className="inline-flex items-center px-5 py-2.5 bg-blue-600 text-white font-medium rounded-xl hover:bg-blue-700 hover:shadow-lg hover:scale-105 transition-all duration-300 text-sm"
                      >
                        Ver Editais Disponíveis
                        <ArrowRightIcon className="ml-2 h-4 w-4" />
                      </Link>
                      <Link
                        href="/como-participar"
                        className="inline-flex items-center px-5 py-2.5 bg-white text-blue-700 font-medium rounded-xl hover:bg-blue-50 hover:shadow-lg hover:scale-105 transition-all duration-300 border border-blue-200 text-sm"
                      >
                        Como Participar
                      </Link>
                    </div>
                  </div>
                </div>

                {/* Elementos decorativos flutuantes - apenas desktop */}
                <div className="absolute top-10 right-10 w-20 h-20 bg-blue-200/30 rounded-full blur-xl"></div>
                <div className="absolute bottom-10 left-10 w-32 h-32 bg-blue-300/20 rounded-full blur-xl"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Seção dos Editais - Espaçamento Reduzido */}
        <div className="mt-8 lg:mt-16">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl mb-3">
              Editais Disponíveis
            </h2>
            <p className="text-base text-gray-600 max-w-2xl mx-auto">
              Conheça as áreas de investimento e participe do processo
              democrático
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {[
              {
                title: 'Educação',
                description:
                  'Projetos para melhoria da infraestrutura educacional, equipamentos e programas de ensino',
                icon: AcademicCapIcon,
                link: '/editais',
                available: true,
                color: 'blue',
                bgGradient: 'from-blue-500 to-blue-600',
                iconBg: 'bg-blue-500',
                hoverIconBg: 'group-hover:bg-blue-600',
                borderColor: 'border-blue-200',
                hoverBorderColor: 'hover:border-blue-400',
                ringColor: 'group-hover:ring-blue-200',
              },
              {
                title: 'Saúde',
                description:
                  'Iniciativas para fortalecimento do sistema de saúde e bem-estar da população',
                icon: HeartIcon,
                link: '/editais',
                available: true,
                color: 'blue',
                bgGradient: 'from-blue-500 to-blue-600',
                iconBg: 'bg-blue-500',
                hoverIconBg: 'group-hover:bg-blue-600',
                borderColor: 'border-blue-200',
                hoverBorderColor: 'hover:border-blue-400',
                ringColor: 'group-hover:ring-blue-200',
              },
              {
                title: 'Agricultura',
                description:
                  'Apoio ao desenvolvimento rural sustentável e fortalecimento da agricultura familiar',
                icon: SunIcon,
                link: '/editais',
                available: false,
                color: 'blue',
                bgGradient: 'from-blue-500 to-blue-600',
                iconBg: 'bg-blue-500',
                hoverIconBg: 'group-hover:bg-blue-600',
                borderColor: 'border-blue-200',
                hoverBorderColor: 'hover:border-blue-400',
                ringColor: 'group-hover:ring-blue-200',
              },
              {
                title: 'Capacitação Profissional',
                description:
                  'Programas de qualificação e capacitação para desenvolvimento de competências profissionais',
                icon: BriefcaseIcon,
                link: '/editais',
                available: true,
                color: 'blue',
                bgGradient: 'from-blue-500 to-blue-600',
                iconBg: 'bg-blue-500',
                hoverIconBg: 'group-hover:bg-blue-600',
                borderColor: 'border-blue-200',
                hoverBorderColor: 'hover:border-blue-400',
                ringColor: 'group-hover:ring-blue-200',
              },
            ].map((edital, index) => {
              const IconComponent = edital.icon;
              return (
                <div
                  key={index}
                  className={`group relative bg-white rounded-2xl border-2 ${edital.borderColor} ${edital.hoverBorderColor} p-6 hover:shadow-xl hover:ring-4 ${edital.ringColor} transition-all duration-300 hover:-translate-y-2 hover:scale-105`}
                >
                  {/* Background gradient overlay on hover */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${edital.bgGradient} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300`}
                  ></div>

                  {/* Status indicator (animated dot) */}
                  <div className="absolute -top-2 -right-2">
                    <div
                      className={`relative w-4 h-4 ${edital.iconBg} rounded-full flex items-center justify-center`}
                    >
                      <div
                        className={`absolute inset-0 ${edital.iconBg} rounded-full animate-ping opacity-20`}
                      ></div>
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                  </div>

                  {/* Icon container with enhanced styling */}
                  <div className="flex items-center gap-4 mb-4">
                    <div
                      className={`relative w-12 h-12 ${edital.iconBg} ${edital.hoverIconBg} rounded-2xl flex items-center justify-center shadow-lg transition-all duration-300 group-hover:scale-110 group-hover:rotate-3`}
                    >
                      <IconComponent className="h-6 w-6 text-white" />
                      {/* Glow effect */}
                      <div
                        className={`absolute inset-0 ${edital.iconBg} rounded-2xl blur-lg opacity-0 group-hover:opacity-30 transition-opacity duration-300`}
                      ></div>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 group-hover:text-gray-800 transition-colors">
                        {edital.title}
                      </h3>
                      <div
                        className={`text-xs font-medium px-2 py-1 rounded-full inline-block mt-1 ${
                          edital.available
                            ? 'bg-blue-100 text-blue-700'
                            : 'bg-neutral-100 text-neutral-700'
                        }`}
                      >
                        {edital.available ? 'Disponível' : 'Em breve'}
                      </div>
                    </div>
                  </div>

                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    {edital.description}
                  </p>

                  {/* Enhanced action button */}
                  <Link
                    href={edital.link}
                    className="inline-flex items-center justify-center w-full px-4 py-2.5 bg-gradient-to-r from-blue-600 to-blue-700 text-white text-sm font-medium rounded-xl hover:from-blue-700 hover:to-blue-800 hover:shadow-lg transition-all duration-300 group-hover:scale-105"
                  >
                    {edital.available ? 'Ver Edital' : 'Notificar-me'}
                    <ArrowRightIcon className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </Link>

                  {/* Floating particles effect */}
                  <div className="absolute inset-0 pointer-events-none">
                    <div
                      className={`absolute top-4 right-4 w-1 h-1 ${edital.iconBg} rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-bounce transition-opacity duration-300`}
                      style={{ animationDelay: '0.1s' }}
                    ></div>
                    <div
                      className={`absolute top-8 right-8 w-1 h-1 ${edital.iconBg} rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-bounce transition-opacity duration-300`}
                      style={{ animationDelay: '0.3s' }}
                    ></div>
                    <div
                      className={`absolute top-6 right-12 w-1 h-1 ${edital.iconBg} rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-bounce transition-opacity duration-300`}
                      style={{ animationDelay: '0.5s' }}
                    ></div>
                  </div>

                  {/* Progress bar effect */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-neutral-100 rounded-b-2xl overflow-hidden">
                    <div
                      className={`h-full bg-gradient-to-r ${edital.bgGradient} w-0 group-hover:w-full transition-all duration-700 ease-out`}
                    ></div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Timeline Section - Espaçamento Reduzido */}
        <div className="mt-16">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl mb-3">
              Cronograma do Processo
            </h2>
            <p className="text-base text-gray-600 max-w-2xl mx-auto">
              Acompanhe todas as etapas do processo participativo
            </p>
          </div>

          {/* Linha de Progresso Horizontal */}
          <div className="relative max-w-5xl mx-auto mb-8">
            <div className="absolute top-1/2 left-0 right-0 h-1 bg-blue-200 transform -translate-y-1/2 rounded-full"></div>
            <div className="absolute top-1/2 left-0 h-1 bg-gradient-to-r from-blue-400 to-blue-500 transform -translate-y-1/2 rounded-full transition-all duration-1000 ease-out w-[65%]"></div>
          </div>

          {/* Timeline Cards - Grid Responsivo */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 lg:gap-3 max-w-5xl mx-auto">
            {[
              {
                title: 'Publicação dos Editais',
                date: '15 Jan',
                status: 'Concluído',
                description: 'Editais publicados e disponíveis para consulta',
                icon: DocumentTextIcon,
                completed: true,
                current: false,
              },
              {
                title: 'Submissão de Propostas',
                date: '01 Fev',
                status: 'Concluído',
                description: 'Período para envio de propostas',
                icon: MegaphoneIcon,
                completed: true,
                current: false,
              },
              {
                title: 'Análise Técnica',
                date: '15 Mar',
                status: 'Em andamento',
                description: 'Avaliação técnica das propostas',
                icon: ClockIcon,
                completed: false,
                current: true,
              },
              {
                title: 'Votação Popular',
                date: '10 Abr',
                status: 'Próximo',
                description: 'Período de votação da população',
                icon: TrophyIcon,
                completed: false,
                current: false,
              },
              {
                title: 'Resultado Final',
                date: '30 Abr',
                status: 'Próximo',
                description: 'Divulgação dos projetos selecionados',
                icon: CheckCircleIcon,
                completed: false,
                current: false,
              },
            ].map((step, index) => (
              <div key={index} className="relative">
                {/* Timeline Circle */}
                <div className="flex justify-center mb-4">
                  <div
                    className={`relative w-10 h-10 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 ${
                      step.completed
                        ? 'bg-blue-500 ring-4 ring-blue-200'
                        : step.current
                          ? 'bg-blue-600 ring-4 ring-blue-200 animate-pulse'
                          : 'bg-neutral-200 ring-4 ring-neutral-100'
                    }`}
                  >
                    <step.icon
                      className={`h-5 w-5 ${
                        step.completed || step.current
                          ? 'text-white'
                          : 'text-neutral-500'
                      }`}
                    />
                    {step.current && (
                      <div className="absolute inset-0 rounded-full bg-blue-600 animate-ping opacity-20"></div>
                    )}
                  </div>
                </div>

                {/* Timeline Card */}
                <div
                  className={`p-4 rounded-xl border-2 transition-all duration-300 hover:shadow-lg ${
                    step.completed
                      ? 'bg-blue-50 border-blue-200 hover:border-blue-300'
                      : step.current
                        ? 'bg-blue-100 border-blue-300 hover:border-blue-400 ring-2 ring-blue-200'
                        : 'bg-white border-neutral-200 hover:border-neutral-300'
                  }`}
                >
                  <div className="text-center">
                    <div
                      className={`inline-block px-2 py-1 rounded-full text-xs font-medium mb-2 ${
                        step.completed
                          ? 'bg-blue-500 text-white'
                          : step.current
                            ? 'bg-blue-600 text-white'
                            : 'bg-neutral-100 text-neutral-600'
                      }`}
                    >
                      {step.status}
                    </div>
                    <h3
                      className={`text-base font-bold mb-1 ${
                        step.completed || step.current
                          ? 'text-blue-900'
                          : 'text-neutral-700'
                      }`}
                    >
                      {step.title}
                    </h3>
                    <div
                      className={`text-sm font-medium mb-2 ${
                        step.completed || step.current
                          ? 'text-blue-600'
                          : 'text-neutral-500'
                      }`}
                    >
                      {step.date}
                    </div>
                    <p
                      className={`text-xs leading-relaxed ${
                        step.completed || step.current
                          ? 'text-blue-700'
                          : 'text-neutral-600'
                      }`}
                    >
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
