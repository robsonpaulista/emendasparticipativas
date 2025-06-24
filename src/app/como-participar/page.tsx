import Link from 'next/link';
import {
  UserPlusIcon,
  DocumentTextIcon,
  CheckCircleIcon,
  TrophyIcon,
  ArrowRightIcon,
  InformationCircleIcon,
  PhoneIcon,
} from '@heroicons/react/24/outline';

export default function ComoParticiparPage() {
  return (
    <div className="bg-white">
      <div className="container pt-4 pb-8 lg:pb-16">
        {/* Hero Section */}
        <div className="text-center mb-8 lg:mb-16">
          <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl mb-3">
            Como <span className="text-blue-600">Participar</span>
          </h1>
          <p className="text-base text-gray-600 max-w-2xl mx-auto">
            Conheça as etapas para participar das emendas participativas e
            contribuir para o desenvolvimento do nosso estado.
          </p>
        </div>

        {/* Etapas do Processo */}
        <div className="mb-8 lg:mb-16">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl mb-3">
              Etapas do Processo
            </h2>
            <p className="text-base text-gray-600 max-w-2xl mx-auto">
              Siga estes passos simples para participar do processo democrático
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {[
              {
                number: '01',
                title: 'Inscrição',
                description:
                  'Cadastre-se na plataforma com seus dados pessoais',
                icon: UserPlusIcon,
                completed: true,
              },
              {
                number: '02',
                title: 'Análise Técnica',
                description: 'Aguarde a validação das propostas pelos técnicos',
                icon: DocumentTextIcon,
                completed: true,
              },
              {
                number: '03',
                title: 'Votação',
                description:
                  'Vote nas propostas que considera mais importantes',
                icon: CheckCircleIcon,
                completed: false,
                current: true,
              },
              {
                number: '04',
                title: 'Resultado',
                description: 'Acompanhe os resultados e projetos selecionados',
                icon: TrophyIcon,
                completed: false,
              },
            ].map((step, index) => (
              <div
                key={index}
                className={`group relative bg-white rounded-2xl border-2 ${
                  step.completed
                    ? 'border-blue-200 hover:border-blue-400'
                    : step.current
                      ? 'border-blue-300 hover:border-blue-400 ring-2 ring-blue-200'
                      : 'border-gray-200 hover:border-gray-300'
                } p-6 hover:shadow-xl hover:ring-4 ${
                  step.completed || step.current
                    ? 'hover:ring-blue-200'
                    : 'hover:ring-gray-200'
                } transition-all duration-300 hover:-translate-y-2 hover:scale-105`}
              >
                {/* Número da Etapa */}
                <div className="flex items-center gap-4 mb-4">
                  <div
                    className={`relative w-12 h-12 ${
                      step.completed
                        ? 'bg-blue-500'
                        : step.current
                          ? 'bg-blue-600'
                          : 'bg-gray-400'
                    } rounded-2xl flex items-center justify-center shadow-lg transition-all duration-300 group-hover:scale-110 group-hover:rotate-3`}
                  >
                    <step.icon className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <div
                      className={`text-xs font-medium px-2 py-1 rounded-full inline-block mb-1 ${
                        step.completed
                          ? 'bg-blue-100 text-blue-700'
                          : step.current
                            ? 'bg-blue-100 text-blue-700'
                            : 'bg-gray-100 text-gray-700'
                      }`}
                    >
                      Etapa {step.number}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-gray-800 transition-colors">
                      {step.title}
                    </h3>
                  </div>
                </div>

                <p className="text-gray-600 text-sm leading-relaxed">
                  {step.description}
                </p>

                {/* Status indicator */}
                <div className="absolute -top-2 -right-2">
                  <div
                    className={`relative w-4 h-4 ${
                      step.completed
                        ? 'bg-blue-500'
                        : step.current
                          ? 'bg-blue-600'
                          : 'bg-gray-400'
                    } rounded-full flex items-center justify-center`}
                  >
                    {(step.completed || step.current) && (
                      <div
                        className={`absolute inset-0 ${
                          step.completed ? 'bg-blue-500' : 'bg-blue-600'
                        } rounded-full animate-ping opacity-20`}
                      ></div>
                    )}
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
            Acesse informações importantes sobre o processo
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              {
                title: 'Ver Editais',
                description: 'Confira todos os editais disponíveis',
                icon: DocumentTextIcon,
                link: '/editais',
                color: 'blue',
              },
              {
                title: 'Perguntas Frequentes',
                description: 'Tire suas dúvidas sobre o processo',
                icon: InformationCircleIcon,
                link: '/faq',
                color: 'blue',
              },
              {
                title: 'Contato',
                description: 'Entre em contato conosco',
                icon: PhoneIcon,
                link: '/sobre',
                color: 'blue',
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
