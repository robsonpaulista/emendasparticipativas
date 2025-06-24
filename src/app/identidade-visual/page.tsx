import Link from 'next/link';
import {
  ArrowDownTrayIcon,
  EyeIcon,
  DocumentTextIcon,
} from '@heroicons/react/24/outline';

export default function IdentidadeVisualPage() {
  return (
    <div className="bg-white">
      <div className="container pt-4 pb-8 lg:pb-16">
        {/* Hero Section */}
        <div className="text-center mb-8 lg:mb-16">
          <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl mb-3">
            Identidade <span className="text-blue-600">Visual</span>
          </h1>
          <h2 className="text-xl font-bold text-blue-600 mb-3">
            Emendas Participativas
          </h2>
          <p className="text-base text-gray-600 max-w-2xl mx-auto">
            Acesse os materiais de identidade visual das Emendas Participativas.
            Logotipos, manuais e diretrizes para uso correto da marca.
          </p>
        </div>

        {/* Manual de Identidade Visual */}
        <div className="mb-8 lg:mb-16 bg-gray-50 rounded-2xl p-8">
          <div className="text-center mb-12">
            <DocumentTextIcon className="h-16 w-16 text-blue-600 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Manual de Identidade Visual
            </h2>
            <p className="text-base text-gray-600 max-w-3xl mx-auto">
              O manual de identidade visual contém todas as diretrizes para uso
              correto da marca Emendas Participativas, incluindo logotipos,
              cores, tipografia e aplicações.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Manual Completo
              </h3>
              <p className="text-gray-600 mb-6">
                Documento completo com todas as diretrizes de identidade visual,
                incluindo variações do logotipo, paleta de cores e aplicações.
              </p>
              <div className="space-y-3">
                <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium inline-flex items-center justify-center">
                  <ArrowDownTrayIcon className="h-5 w-5 mr-2" />
                  Download PDF (2.5MB)
                </button>
                <button className="w-full bg-gray-100 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-200 transition-colors text-sm font-medium inline-flex items-center justify-center">
                  <EyeIcon className="h-5 w-5 mr-2" />
                  Visualizar Online
                </button>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Logotipos
              </h3>
              <p className="text-gray-600 mb-6">
                Conjunto de logotipos em diferentes formatos e variações para
                uso em diversos materiais e aplicações.
              </p>
              <div className="space-y-3">
                <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium inline-flex items-center justify-center">
                  <ArrowDownTrayIcon className="h-5 w-5 mr-2" />
                  Download ZIP (15MB)
                </button>
                <button className="w-full bg-gray-100 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-200 transition-colors text-sm font-medium inline-flex items-center justify-center">
                  <EyeIcon className="h-5 w-5 mr-2" />
                  Ver Galeria
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Logotipos Disponíveis */}
        <div className="mb-8 lg:mb-16">
          <h2 className="text-2xl font-bold text-gray-900 text-center mb-12">
            Logotipos Disponíveis
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Logo Principal */}
            <div className="bg-white border border-gray-200 rounded-lg p-6 text-center">
              <div className="h-32 bg-gray-100 rounded-lg mb-4 flex items-center justify-center">
                <span className="text-blue-600 font-bold text-lg">
                  LOGO PRINCIPAL
                </span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">
                Logo Principal
              </h3>
              <p className="text-sm text-gray-600 mb-4">
                Versão completa para uso geral
              </p>
              <div className="space-y-2">
                <button className="w-full text-sm bg-gray-100 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-200 transition-colors font-medium">
                  PNG • SVG • AI
                </button>
              </div>
            </div>

            {/* Logo Horizontal */}
            <div className="bg-white border border-gray-200 rounded-lg p-6 text-center">
              <div className="h-32 bg-gray-100 rounded-lg mb-4 flex items-center justify-center">
                <span className="text-blue-600 font-bold text-lg">
                  LOGO HORIZONTAL
                </span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">
                Logo Horizontal
              </h3>
              <p className="text-sm text-gray-600 mb-4">
                Versão horizontal para espaços largos
              </p>
              <div className="space-y-2">
                <button className="w-full text-sm bg-gray-100 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-200 transition-colors font-medium">
                  PNG • SVG • AI
                </button>
              </div>
            </div>

            {/* Logo Símbolo */}
            <div className="bg-white border border-gray-200 rounded-lg p-6 text-center">
              <div className="h-32 bg-gray-100 rounded-lg mb-4 flex items-center justify-center">
                <span className="text-blue-600 font-bold text-lg">SÍMBOLO</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Símbolo</h3>
              <p className="text-sm text-gray-600 mb-4">
                Apenas o símbolo, sem texto
              </p>
              <div className="space-y-2">
                <button className="w-full text-sm bg-gray-100 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-200 transition-colors font-medium">
                  PNG • SVG • AI
                </button>
              </div>
            </div>

            {/* Logo Monocromático */}
            <div className="bg-white border border-gray-200 rounded-lg p-6 text-center">
              <div className="h-32 bg-gray-100 rounded-lg mb-4 flex items-center justify-center">
                <span className="text-gray-800 font-bold text-lg">
                  MONOCROMÁTICO
                </span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">
                Monocromático
              </h3>
              <p className="text-sm text-gray-600 mb-4">
                Versão em preto para casos especiais
              </p>
              <div className="space-y-2">
                <button className="w-full text-sm bg-gray-100 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-200 transition-colors font-medium">
                  PNG • SVG • AI
                </button>
              </div>
            </div>

            {/* Logo Negativo */}
            <div className="bg-gray-800 border border-gray-700 rounded-lg p-6 text-center">
              <div className="h-32 bg-gray-700 rounded-lg mb-4 flex items-center justify-center">
                <span className="text-white font-bold text-lg">NEGATIVO</span>
              </div>
              <h3 className="font-semibold text-white mb-2">Logo Negativo</h3>
              <p className="text-sm text-gray-300 mb-4">
                Versão para fundos escuros
              </p>
              <div className="space-y-2">
                <button className="w-full text-sm bg-white text-gray-800 hover:bg-gray-100 px-4 py-2 rounded-lg transition-colors font-medium">
                  PNG • SVG • AI
                </button>
              </div>
            </div>

            {/* Logo Simplificado */}
            <div className="bg-white border border-gray-200 rounded-lg p-6 text-center">
              <div className="h-32 bg-gray-100 rounded-lg mb-4 flex items-center justify-center">
                <span className="text-blue-600 font-bold text-lg">
                  SIMPLIFICADO
                </span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Simplificado</h3>
              <p className="text-sm text-gray-600 mb-4">
                Versão para tamanhos muito pequenos
              </p>
              <div className="space-y-2">
                <button className="w-full text-sm bg-gray-100 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-200 transition-colors font-medium">
                  PNG • SVG • AI
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Paleta de Cores */}
        <div className="mb-8 lg:mb-16">
          <h2 className="text-2xl font-bold text-gray-900 text-center mb-12">
            Paleta de Cores
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="h-24 bg-blue-600 rounded-lg mb-3"></div>
              <h3 className="font-semibold text-gray-900">Azul Principal</h3>
              <p className="text-sm text-gray-600">#2563EB</p>
            </div>

            <div className="text-center">
              <div className="h-24 bg-blue-500 rounded-lg mb-3"></div>
              <h3 className="font-semibold text-gray-900">Azul Claro</h3>
              <p className="text-sm text-gray-600">#3B82F6</p>
            </div>

            <div className="text-center">
              <div className="h-24 bg-gray-800 rounded-lg mb-3"></div>
              <h3 className="font-semibold text-gray-900">Cinza Escuro</h3>
              <p className="text-sm text-gray-600">#1F2937</p>
            </div>

            <div className="text-center">
              <div className="h-24 bg-gray-300 rounded-lg mb-3"></div>
              <h3 className="font-semibold text-gray-900">Cinza Claro</h3>
              <p className="text-sm text-gray-600">#D1D5DB</p>
            </div>
          </div>
        </div>

        {/* Diretrizes de Uso */}
        <div className="mb-8 lg:mb-16 bg-yellow-50 border border-yellow-200 rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-gray-900 text-center mb-8">
            Diretrizes de Uso
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold text-green-800 mb-4">
                ✓ Permitido
              </h3>
              <ul className="space-y-2 text-green-700">
                <li>• Usar as cores oficiais da paleta</li>
                <li>• Manter proporções originais do logotipo</li>
                <li>• Aplicar sobre fundos neutros</li>
                <li>• Usar versão monocromática quando necessário</li>
                <li>• Manter área de proteção mínima</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold text-red-800 mb-4">
                ✗ Não Permitido
              </h3>
              <ul className="space-y-2 text-red-700">
                <li>• Alterar as cores do logotipo</li>
                <li>• Distorcer ou inclinar o logotipo</li>
                <li>• Aplicar efeitos visuais não autorizados</li>
                <li>• Usar sobre fundos com baixo contraste</li>
                <li>• Separar elementos do logotipo</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Download Completo */}
        <div className="mb-8 lg:mb-16 bg-blue-600 text-white rounded-2xl p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Download Completo</h2>
          <p className="text-base mb-8">
            Baixe todos os materiais de identidade visual em um arquivo único
          </p>
          <button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-base inline-flex items-center transition-colors">
            <ArrowDownTrayIcon className="h-6 w-6 mr-3" />
            Download Completo (25MB)
          </button>
          <p className="text-blue-100 mt-4 text-sm">
            Inclui logotipos, manual, templates e diretrizes
          </p>
        </div>

        {/* Contato */}
        <div className="text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Dúvidas sobre o uso da identidade visual?
          </h3>
          <p className="text-base text-gray-600 mb-6">
            Entre em contato conosco para esclarecimentos sobre o uso correto da
            marca
          </p>
          <Link
            href="/faq"
            className="bg-gray-100 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-200 transition-colors text-sm font-medium mr-4"
          >
            Perguntas Frequentes
          </Link>
          <a
            href="mailto:contato@emendasparticipativas.com.br"
            className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium"
          >
            Enviar Email
          </a>
        </div>
      </div>
    </div>
  );
}
