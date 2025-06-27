'use client';

import Link from 'next/link';
import {
  QuestionMarkCircleIcon,
  UserGroupIcon,
  DocumentTextIcon,
  ClockIcon,
  CheckCircleIcon,
  PhoneIcon,
  InformationCircleIcon,
  ArrowRightIcon,
} from '@heroicons/react/24/outline';

const faqs = [
  {
    question: 'O que são emendas participativas?',
    answer:
      'São recursos do orçamento público destinados a projetos escolhidos diretamente pela população através de votação democrática e transparente.',
    icon: QuestionMarkCircleIcon,
  },
  {
    question: 'Quem pode participar?',
    answer:
      'Todos os cidadãos maiores de 16 anos, residentes no estado, podem participar do processo de votação das emendas participativas.',
    icon: UserGroupIcon,
  },
  {
    question: 'Como funciona o processo de votação?',
    answer:
      'Após o cadastro na plataforma, você pode votar nas propostas de sua preferência durante o período de votação estabelecido no cronograma.',
    icon: DocumentTextIcon,
  },
  {
    question: 'Quando acontece a votação?',
    answer:
      'A votação está prevista para abril de 2025. Acompanhe o cronograma para não perder os prazos importantes do processo.',
    icon: ClockIcon,
  },
  {
    question: 'Como acompanhar os resultados?',
    answer:
      'Os resultados serão divulgados na plataforma oficial e você receberá notificações sobre o andamento dos projetos selecionados.',
    icon: CheckCircleIcon,
  },
  {
    question: 'Posso votar em mais de uma área?',
    answer:
      'Sim, você pode votar em propostas de diferentes áreas: educação, saúde, agricultura e capacitação profissional.',
    icon: InformationCircleIcon,
  },
];

export default function FAQPage() {
  return (
    <div className="bg-white">
      <div className="container pt-4 pb-8 lg:pb-16">
        {/* Hero Section */}
        <div className="text-center mb-8 lg:mb-16">
          <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl mb-3">
            Perguntas <span className="text-blue-600">Frequentes</span>
          </h1>
          <p className="text-base text-gray-600 max-w-2xl mx-auto">
            Tire suas dúvidas sobre o processo de emendas participativas
          </p>
        </div>

        {/* Perguntas e Respostas */}
        <div className="mb-8 lg:mb-16">
          <div className="grid gap-6 max-w-4xl mx-auto">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="group relative bg-white rounded-2xl border-2 border-blue-200 hover:border-blue-400 p-6 hover:shadow-xl hover:ring-4 hover:ring-blue-200 transition-all duration-300 hover:-translate-y-2 hover:scale-105"
              >
                <div className="flex items-start gap-4">
                  <div className="relative w-12 h-12 bg-blue-500 group-hover:bg-blue-600 rounded-2xl flex items-center justify-center shadow-lg transition-all duration-300 group-hover:scale-110 group-hover:rotate-3">
                    <faq.icon className="h-6 w-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-gray-800 transition-colors mb-3">
                      {faq.question}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {faq.answer}
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
            ))}
          </div>
        </div>

        {/* Ainda tem dúvidas? */}
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl mb-3">
            Ainda tem dúvidas?
          </h2>
          <p className="text-base text-gray-600 max-w-2xl mx-auto mb-8">
            Entre em contato conosco ou acesse mais informações
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              {
                title: 'Como Participar',
                description: 'Veja o passo a passo completo',
                icon: DocumentTextIcon,
                link: '/como-participar',
              },
              {
                title: 'Ver Editais',
                description: 'Confira todos os editais disponíveis',
                icon: InformationCircleIcon,
                link: '/editais',
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
