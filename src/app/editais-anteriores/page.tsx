import Link from 'next/link';
import {
  DocumentTextIcon,
  CheckCircleIcon,
  CalendarIcon,
} from '@heroicons/react/24/outline';

export default function EditaisAnterioresPage() {
  return (
    <div className="bg-white">
      <div className="container pt-4 pb-8 lg:pb-16">
        {/* Hero Section */}
        <div className="text-center mb-8 lg:mb-16">
          <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl mb-3">
            Editais <span className="text-blue-600">Anteriores</span>
          </h1>
          <p className="text-base text-gray-600 max-w-2xl mx-auto">
            Confira os editais já realizados e seus resultados. Transparência e
            prestação de contas são pilares das emendas participativas.
          </p>
        </div>

        {/* Editais Realizados */}
        <div className="mb-8 lg:mb-16">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl mb-3">
              Editais Realizados
            </h2>
            <p className="text-base text-gray-600 max-w-2xl mx-auto">
              Conheça os editais já finalizados e seus resultados
            </p>
          </div>

          <div className="grid max-w-6xl mx-auto grid-cols-1 gap-8 lg:grid-cols-2">
            {/* Edital Guardas Municipais */}
            <div className="relative overflow-hidden rounded-2xl bg-white shadow-lg ring-1 ring-gray-200">
              <div className="p-8">
                <div className="flex items-center mb-4">
                  <CheckCircleIcon className="h-8 w-8 text-green-600 mr-3" />
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">Edital</h3>
                    <h4 className="text-xl font-bold text-blue-600">
                      Guardas Municipais
                    </h4>
                  </div>
                </div>

                <p className="text-base text-gray-600 mb-4">
                  Destinado às Guardas Municipais de Sergipe
                </p>

                <div className="mb-6 p-4 bg-gray-50 rounded-lg">
                  <h5 className="font-semibold text-gray-900 mb-2">
                    Informações do Edital:
                  </h5>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Público-alvo: Guardas Municipais do Estado</li>
                    <li>• Foco: Aquisição de equipamentos e veículos</li>
                    <li>
                      • Status:{' '}
                      <span className="text-green-600 font-semibold">
                        Finalizado
                      </span>
                    </li>
                    <li>• Ano: 2023</li>
                  </ul>
                </div>

                <div className="space-y-3">
                  <Link
                    href="/editais-anteriores/guardas-municipais"
                    className="block w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors text-center text-sm font-medium"
                  >
                    VER DETALHES
                  </Link>
                  <Link
                    href="/editais-anteriores/guardas-municipais/resultados"
                    className="block w-full bg-gray-100 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-200 transition-colors text-center text-sm font-medium"
                  >
                    RESULTADOS
                  </Link>
                  <Link
                    href="/editais-anteriores/guardas-municipais/projetos-contemplados"
                    className="block w-full bg-gray-100 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-200 transition-colors text-center text-sm font-medium"
                  >
                    PROJETOS CONTEMPLADOS
                  </Link>
                </div>
              </div>
            </div>

            {/* Edital Organizações Sociais */}
            <div className="relative overflow-hidden rounded-2xl bg-white shadow-lg ring-1 ring-gray-200">
              <div className="p-8">
                <div className="flex items-center mb-4">
                  <CheckCircleIcon className="h-8 w-8 text-green-600 mr-3" />
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">Edital</h3>
                    <h4 className="text-xl font-bold text-blue-600">
                      Organizações Sociais
                    </h4>
                  </div>
                </div>

                <p className="text-base text-gray-600 mb-4">
                  Destinado às Organizações de Assistência Social do SUAS
                </p>

                <div className="mb-6 p-4 bg-gray-50 rounded-lg">
                  <h5 className="font-semibold text-gray-900 mb-2">
                    Informações do Edital:
                  </h5>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>
                      • Público-alvo: Organizações de Assistência Social do SUAS
                    </li>
                    <li>• Foco: Ações de custeio e impacto social</li>
                    <li>
                      • Status:{' '}
                      <span className="text-green-600 font-semibold">
                        Finalizado
                      </span>
                    </li>
                    <li>• Ano: 2023</li>
                  </ul>
                </div>

                <div className="space-y-3">
                  <Link
                    href="/editais-anteriores/organizacoes-sociais"
                    className="block w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors text-center text-sm font-medium"
                  >
                    VER DETALHES
                  </Link>
                  <Link
                    href="/editais-anteriores/organizacoes-sociais/resultados"
                    className="block w-full bg-gray-100 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-200 transition-colors text-center text-sm font-medium"
                  >
                    RESULTADOS
                  </Link>
                  <Link
                    href="/editais-anteriores/organizacoes-sociais/projetos-contemplados"
                    className="block w-full bg-gray-100 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-200 transition-colors text-center text-sm font-medium"
                  >
                    PROJETOS CONTEMPLADOS
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Dados Consolidados */}
        <div className="mb-8 lg:mb-16 bg-gray-50 rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-gray-900 text-center mb-8">
            Dados Consolidados dos Editais Anteriores
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">25</div>
              <div className="text-base font-semibold text-gray-900">
                Projetos Contemplados
              </div>
              <div className="text-sm text-gray-600">Em ambos os editais</div>
            </div>

            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">
                R$ 2.5M
              </div>
              <div className="text-base font-semibold text-gray-900">
                Recursos Destinados
              </div>
              <div className="text-sm text-gray-600">
                Total dos editais anteriores
              </div>
            </div>

            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">
                15.000+
              </div>
              <div className="text-base font-semibold text-gray-900">
                Votos Computados
              </div>
              <div className="text-sm text-gray-600">Participação popular</div>
            </div>
          </div>
        </div>

        {/* Timeline dos Editais */}
        <div className="mb-8 lg:mb-16">
          <h2 className="text-2xl font-bold text-gray-900 text-center mb-12">
            Histórico de Editais
          </h2>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gray-200"></div>

            <div className="space-y-12">
              {/* 2024 - Editais Atuais */}
              <div className="relative flex items-center">
                <div className="flex-1 text-right pr-8">
                  <div className="bg-white p-6 rounded-lg shadow-lg">
                    <h3 className="text-xl font-bold text-gray-900">2024</h3>
                    <h4 className="text-base font-semibold text-blue-600">
                      Educação, Saúde e Agricultura
                    </h4>
                    <p className="text-sm text-gray-600">
                      Editais atuais com foco em três áreas estratégicas
                    </p>
                  </div>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-600 rounded-full border-4 border-white"></div>
                <div className="flex-1 pl-8"></div>
              </div>

              {/* 2023 - Organizações Sociais */}
              <div className="relative flex items-center">
                <div className="flex-1 pr-8"></div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-green-600 rounded-full border-4 border-white"></div>
                <div className="flex-1 text-left pl-8">
                  <div className="bg-white p-6 rounded-lg shadow-lg">
                    <h3 className="text-xl font-bold text-gray-900">2023</h3>
                    <h4 className="text-base font-semibold text-green-600">
                      Organizações Sociais
                    </h4>
                    <p className="text-sm text-gray-600">
                      Fortalecimento das organizações do SUAS
                    </p>
                  </div>
                </div>
              </div>

              {/* 2023 - Guardas Municipais */}
              <div className="relative flex items-center">
                <div className="flex-1 text-right pr-8">
                  <div className="bg-white p-6 rounded-lg shadow-lg">
                    <h3 className="text-xl font-bold text-gray-900">2023</h3>
                    <h4 className="text-base font-semibold text-green-600">
                      Guardas Municipais
                    </h4>
                    <p className="text-sm text-gray-600">
                      Modernização e equipamentos para segurança pública
                    </p>
                  </div>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-green-600 rounded-full border-4 border-white"></div>
                <div className="flex-1 pl-8"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Transparência */}
        <div className="mb-8 lg:mb-16 bg-blue-50 rounded-2xl p-8">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Transparência e Prestação de Contas
            </h2>
            <p className="text-base text-gray-600 mb-8">
              Todos os editais anteriores seguiram rigorosos critérios de
              transparência e prestação de contas. Os recursos foram aplicados
              conforme planejado e fiscalizados pelos órgãos competentes.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-lg">
                <DocumentTextIcon className="h-8 w-8 text-blue-600 mx-auto mb-3" />
                <h3 className="font-semibold text-gray-900 mb-2">
                  Relatórios de Execução
                </h3>
                <p className="text-sm text-gray-600">
                  Acompanhe a execução de cada projeto contemplado
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg">
                <CalendarIcon className="h-8 w-8 text-blue-600 mx-auto mb-3" />
                <h3 className="font-semibold text-gray-900 mb-2">
                  Cronogramas Cumpridos
                </h3>
                <p className="text-sm text-gray-600">
                  Todas as etapas foram executadas conforme cronograma
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Voltar para editais atuais */}
        <div className="text-center">
          <Link
            href="/editais"
            className="inline-flex items-center bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium"
          >
            <DocumentTextIcon className="h-5 w-5 mr-2" />
            Ver Editais Atuais
          </Link>
        </div>
      </div>
    </div>
  );
}
