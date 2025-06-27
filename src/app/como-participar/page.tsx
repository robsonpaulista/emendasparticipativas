import Link from 'next/link';
import {
  UserPlusIcon,
  DocumentTextIcon,
  CheckCircleIcon,
  ArrowRightIcon,
  ClipboardDocumentIcon,
} from '@heroicons/react/24/outline';

export default function ComoParticiparPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black text-white">
      <div className="container mx-auto px-4 pt-32 pb-8">
        {/* Hero Section */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold mb-3 text-white">
            Cadastro de Projetos
          </h1>
          <p className="text-base text-white/70 max-w-2xl mx-auto">
            Transforme sua ideia em realidade. Cadastre seu projeto para as
            emendas parlamentares e contribua com o desenvolvimento da nossa
            comunidade.
          </p>
        </div>

        {/* Etapas do Cadastro */}
        <div className="max-w-5xl mx-auto">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                step: 1,
                title: 'Dados do Cadastro',
                description:
                  'Preencha seus dados pessoais e informações de contato.',
                icon: UserPlusIcon,
                status: 'active',
              },
              {
                step: 2,
                title: 'Dados do Projeto',
                description:
                  'Informe título, área e descrição detalhada do projeto.',
                icon: DocumentTextIcon,
                status: 'upcoming',
              },
              {
                step: 3,
                title: 'Confirmação',
                description: 'Revise as informações antes de prosseguir.',
                icon: ClipboardDocumentIcon,
                status: 'upcoming',
              },
              {
                step: 4,
                title: 'Conclusão',
                description: 'Envie seu projeto para análise técnica.',
                icon: CheckCircleIcon,
                status: 'upcoming',
              },
            ].map((step) => (
              <div
                key={step.step}
                className="relative p-4 rounded-2xl bg-white/5 backdrop-blur-lg border border-white/10 hover:border-blue-500/50 transition-all duration-300 group"
              >
                <div className="absolute -top-3 -left-3 w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-sm font-bold">
                  {step.step}
                </div>
                <div
                  className={`w-10 h-10 mb-3 rounded-xl flex items-center justify-center ${
                    step.status === 'active' ? 'bg-blue-500' : 'bg-white/10'
                  }`}
                >
                  <step.icon className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-lg font-bold mb-1 text-white group-hover:text-blue-400 transition-colors">
                  {step.title}
                </h3>
                <p className="text-sm text-white/60">{step.description}</p>
              </div>
            ))}
          </div>

          {/* Informações Importantes */}
          <div className="mt-8 text-sm text-white/60 space-y-1 max-w-3xl mx-auto text-center">
            <p>
              • Preencha todos os campos com atenção e clareza para análise de
              viabilidade
            </p>
            <p>
              • Anexe documentos de apoio e um vídeo opcional para fortalecer
              sua proposta
            </p>
          </div>

          {/* Botão de Início */}
          <div className="mt-6 text-center">
            <Link
              href="/projetos/novo"
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl text-white font-medium hover:from-blue-600 hover:to-blue-700 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25"
            >
              Iniciar Cadastro
              <ArrowRightIcon className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
