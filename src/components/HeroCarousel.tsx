'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  ArrowRightIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  DocumentTextIcon,
  TrophyIcon,
  AcademicCapIcon,
  HeartIcon,
  HomeModernIcon,
  UserGroupIcon,
  ClockIcon,
  CheckCircleIcon,
  UserPlusIcon,
  DocumentCheckIcon,
  ChartBarIcon,
  ShieldCheckIcon,
  HandRaisedIcon,
} from '@heroicons/react/24/outline';

interface CarouselSlide {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  primaryAction: {
    text: string;
    href: string;
  };
  secondaryAction?: {
    text: string;
    href: string;
  };
  backgroundImage?: string;
  backgroundColor?: string;
  icon?: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  features?: Array<{
    text: string;
    icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  }>;
  timeline?: Array<{
    title: string;
    date: string;
    description: string;
    icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
    status: 'completed' | 'current' | 'upcoming';
  }>;
}

const slides: CarouselSlide[] = [
  {
    id: 'home',
    title: 'O Futuro é pra já',
    subtitle: 'E você decide agora',
    description:
      'Com emendas participativas, damos voz à população para escolher, de forma democrática e transparente, onde investir os recursos que transformam o nosso estado.',
    primaryAction: {
      text: 'Ver Editais Disponíveis',
      href: '/editais',
    },
    secondaryAction: {
      text: 'Como Participar',
      href: '/como-participar',
    },
    backgroundColor: 'from-black via-gray-900 to-black',
    features: [
      { text: '2.5M+ Eleitores Cadastrados', icon: UserGroupIcon },
      { text: 'R$ 50M Disponíveis', icon: DocumentTextIcon },
      { text: '150+ Projetos Aprovados', icon: TrophyIcon },
    ],
  },
  {
    id: 'participacao',
    title: 'Participe ativamente',
    subtitle: 'Sua voz importa',
    description:
      'Entenda como funciona o processo de emendas participativas e como você pode contribuir para o desenvolvimento do nosso estado.',
    primaryAction: {
      text: 'Inscreva seu projeto',
      href: '/como-participar',
    },
    secondaryAction: {
      text: 'FAQ',
      href: '/faq',
    },
    backgroundColor: 'from-black via-gray-900 to-black',
    features: [
      { text: 'Processo 100% Digital', icon: ShieldCheckIcon },
      { text: 'Votação Transparente', icon: HandRaisedIcon },
      { text: 'Acompanhamento em Tempo Real', icon: ChartBarIcon },
      { text: 'Participação Democrática', icon: UserGroupIcon },
    ],
    timeline: [
      {
        title: 'Cadastro',
        date: 'Crie sua conta',
        description:
          'Faça seu cadastro com seus dados pessoais. É rápido e seguro.',
        icon: UserPlusIcon,
        status: 'completed',
      },
      {
        title: 'Enviar Projeto',
        date: 'Informações do projeto',
        description:
          'Certifique-se da conformidade do projeto com as exigências legais e recursos elegíveis.',
        icon: DocumentCheckIcon,
        status: 'completed',
      },
      {
        title: 'Confirmação de Recebimento',
        date: 'Confirmação de envio',
        description:
          'Após inclusão dos documentos necessários do projeto, será mostrada uma mensagem de confirmação de envio',
        icon: CheckCircleIcon,
        status: 'current',
      },
      {
        title: 'Acompanhamento',
        date: 'Monitore o progresso',
        description:
          'Acompanhe o cronograma para ficar por dentro das atualizações do seu projeto.',
        icon: ChartBarIcon,
        status: 'upcoming',
      },
    ],
  },
  {
    id: 'editais',
    title: 'Editais disponíveis',
    subtitle: 'Participe agora',
    description:
      'Conheça as áreas de investimento disponíveis e participe do processo democrático de escolha dos projetos que transformarão nosso estado.',
    primaryAction: {
      text: 'Ver Todos os Editais',
      href: '/editais',
    },
    secondaryAction: {
      text: 'Como Votar',
      href: '/votar',
    },
    backgroundColor: 'from-black via-gray-900 to-black',
    icon: DocumentTextIcon,
    features: [
      { text: 'Educação e Cultura', icon: AcademicCapIcon },
      { text: 'Saúde e Bem-estar', icon: HeartIcon },
      { text: 'Agricultura Familiar', icon: HomeModernIcon },
      { text: 'Capacitação Profissional', icon: UserGroupIcon },
    ],
    timeline: [
      {
        title: 'Inscrição',
        date: '30 abril - 25 maio',
        description:
          'Período para submissão de propostas de projetos. Apresente sua ideia para melhorar sua região.',
        icon: DocumentTextIcon,
        status: 'completed',
      },
      {
        title: 'Análise Técnica',
        date: '26-28 maio',
        description:
          'Avaliação da viabilidade técnica e orçamentária dos projetos por nossa equipe especializada.',
        icon: ClockIcon,
        status: 'current',
      },
      {
        title: 'Votação',
        date: '04-13 junho',
        description:
          'Fase de votação popular. A comunidade escolhe os projetos mais relevantes para implementação.',
        icon: CheckCircleIcon,
        status: 'upcoming',
      },
      {
        title: 'Resultado',
        date: '04 julho',
        description:
          'Divulgação dos projetos aprovados e início do planejamento para implementação.',
        icon: TrophyIcon,
        status: 'upcoming',
      },
    ],
  },
];

export default function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [progress, setProgress] = useState(0);

  const SLIDE_DURATION = 8000; // 8 segundos por slide

  useEffect(() => {
    if (isPaused) return;

    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          setCurrentSlide((current) => (current + 1) % slides.length);
          return 0;
        }
        return prev + 100 / (SLIDE_DURATION / 100);
      });
    }, 100);

    return () => clearInterval(progressInterval);
  }, [isPaused, currentSlide]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setProgress(0);
  };

  const nextSlide = () => {
    setCurrentSlide((current) => (current + 1) % slides.length);
    setProgress(0);
  };

  const prevSlide = () => {
    setCurrentSlide((current) => (current - 1 + slides.length) % slides.length);
    setProgress(0);
  };

  const currentSlideData = slides[currentSlide];

  return (
    <div
      className="relative h-screen overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Background */}
      <div className="absolute inset-0">
        {currentSlideData.backgroundImage ? (
          <div className="relative w-full h-full">
            <Image
              src={currentSlideData.backgroundImage}
              alt={currentSlideData.title}
              fill
              className="object-cover opacity-70"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/60 to-black/80" />
          </div>
        ) : (
          <div
            className={`w-full h-full bg-gradient-to-br ${currentSlideData.backgroundColor}`}
          />
        )}
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
          <div
            className={`grid lg:grid-cols-2 gap-12 ${currentSlide === 0 ? 'items-center' : 'items-start'}`}
          >
            {/* Text Content */}
            <div
              key={currentSlide}
              className="text-white space-y-8 animate-slide-in-left"
            >
              {/* Title */}
              <div key={`title-${currentSlide}`} className="space-y-2">
                <h1 className="text-3xl font-bold leading-tight animate-fade-in">
                  {currentSlideData.title}
                </h1>
                <h2 className="text-lg font-bold text-blue-600 animate-fade-in-delay">
                  {currentSlideData.subtitle}
                </h2>
              </div>

              {/* Description */}
              <p
                key={`description-${currentSlide}`}
                className="text-lg sm:text-xl text-white/90 max-w-2xl leading-relaxed animate-fade-in-delay-2"
              >
                {currentSlideData.description}
              </p>

              {/* Features as bullets */}
              {currentSlideData.features && (
                <div
                  key={`features-${currentSlide}`}
                  className="space-y-3 animate-fade-in-delay-3"
                >
                  {currentSlideData.features.map((feature, index) => (
                    <div
                      key={`${feature.text}-${currentSlide}`}
                      className="flex items-center gap-3 animate-fade-in"
                      style={{ animationDelay: `${0.8 + index * 0.1}s` }}
                    >
                      <feature.icon className="w-5 h-5 text-blue-500" />
                      <span className="text-white/90 font-medium">
                        {feature.text}
                      </span>
                    </div>
                  ))}
                </div>
              )}

              {/* Actions */}
              <div
                key={`actions-${currentSlide}`}
                className="flex flex-col sm:flex-row gap-3 animate-fade-in-delay-4"
              >
                <Link
                  href={currentSlideData.primaryAction.href}
                  className="relative inline-flex items-center justify-center px-6 py-3 bg-transparent font-medium rounded-lg hover:bg-blue-600/10 hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-blue-500/25 text-sm overflow-hidden group border-spinning-button"
                >
                  <span
                    className="button-text opacity-0"
                    style={{
                      animation: 'text-appear 0.5s ease-out 3s forwards',
                      color: '#60a5fa',
                    }}
                  >
                    {currentSlideData.primaryAction.text}
                  </span>
                  <ArrowRightIcon
                    className="ml-2 w-4 h-4 button-icon opacity-0"
                    style={{
                      animation: 'text-appear 0.5s ease-out 3s forwards',
                      color: '#60a5fa',
                    }}
                  />
                </Link>
                {currentSlideData.secondaryAction && (
                  <Link
                    href={currentSlideData.secondaryAction.href}
                    className="relative inline-flex items-center justify-center px-6 py-3 bg-transparent font-medium rounded-lg hover:bg-white/5 transition-all duration-300 text-sm text-white/70 hover:text-white"
                  >
                    {currentSlideData.secondaryAction.text}
                  </Link>
                )}
              </div>
            </div>

            {/* Image on the right side for the first slide */}
            {currentSlide === 0 && (
              <div className="hidden lg:block relative h-[800px] w-full animate-fade-in-right -ml-12">
                <Image
                  src="/capanova2.png"
                  alt="Emendas Participativas"
                  fill
                  className="object-contain transform -translate-x-12"
                  priority
                  quality={100}
                  sizes="(min-width: 1024px) 50vw, 100vw"
                />
              </div>
            )}

            {/* Timeline on the right side */}
            {currentSlideData.timeline &&
              currentSlideData.timeline.length > 0 && (
                <div className="relative hidden lg:block">
                  <div className="absolute inset-0 flex items-start justify-center pt-4">
                    <div className="w-[400px] h-[400px] rounded-full bg-white/5 backdrop-blur-3xl animate-pulse-slow" />
                  </div>
                  <div className="relative">
                    <h3 className="text-2xl font-bold text-white mb-6 animate-fade-in-delay-3">
                      {currentSlideData.id === 'editais'
                        ? 'Cronograma'
                        : 'Etapas para Cadastro do Projeto'}
                    </h3>
                    <div
                      key={`timeline-${currentSlide}`}
                      className="space-y-5 animate-fade-in-delay-4"
                    >
                      {currentSlideData.timeline.map((item, index) => (
                        <div
                          key={`${item.title}-${currentSlide}`}
                          className="flex items-center gap-4 animate-fade-in"
                          style={{ animationDelay: `${1.2 + index * 0.1}s` }}
                        >
                          <div
                            className={`relative flex items-center justify-center w-12 h-12 rounded-full border-2 transition-all duration-300 ${
                              item.status === 'completed'
                                ? 'border-green-500 bg-green-500/10 timeline-dot-completed'
                                : item.status === 'current'
                                  ? 'border-blue-500 bg-blue-500/10 timeline-dot-current'
                                  : 'border-white/30 bg-white/5'
                            }`}
                          >
                            <item.icon
                              className={`w-6 h-6 ${
                                item.status === 'completed'
                                  ? 'text-green-500'
                                  : item.status === 'current'
                                    ? 'text-blue-500'
                                    : 'text-white/50'
                              }`}
                            />
                            {index < currentSlideData.timeline.length - 1 && (
                              <div className="absolute top-[calc(100%+1px)] left-1/2 -translate-x-1/2 w-0.5 h-8 overflow-hidden bg-white/10">
                                <div
                                  className={`w-full ${
                                    item.status === 'completed'
                                      ? 'bg-green-500 timeline-line-progress'
                                      : 'bg-white/20'
                                  }`}
                                  style={{
                                    height: '100%',
                                    transformOrigin: 'top',
                                    animationDelay: `${0.3 + index * 0.2}s`,
                                  }}
                                />
                              </div>
                            )}
                          </div>
                          <div className="flex-1">
                            <h4
                              className={`text-lg font-medium ${
                                item.status === 'completed'
                                  ? 'text-green-500'
                                  : item.status === 'current'
                                    ? 'text-blue-500'
                                    : 'text-white/50'
                              }`}
                            >
                              {item.title}
                            </h4>
                            <p className="text-sm text-white/70">{item.date}</p>
                            <p className="text-sm text-white/60 mt-1">
                              {item.description}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
          </div>
        </div>
      </div>

      {/* Navigation Controls */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <div className="flex items-center space-x-4">
          {/* Previous Button */}
          <button
            onClick={prevSlide}
            className="p-2 bg-black/60 backdrop-blur-sm rounded-full border border-blue-500/30 text-blue-400 hover:bg-blue-500/20 hover:border-blue-400/50 transition-all duration-300 group"
          >
            <ChevronLeftIcon className="w-5 h-5 group-hover:-translate-x-1 transition-transform duration-300" />
          </button>

          {/* Slide Indicators */}
          <div className="flex space-x-3">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className="relative w-12 h-2 bg-gray-700 rounded-full overflow-hidden"
              >
                <div
                  className={`h-full bg-gradient-to-r from-blue-400 to-blue-600 rounded-full transition-all duration-300 ${
                    index === currentSlide ? 'opacity-100' : 'opacity-60'
                  }`}
                  style={{
                    width:
                      index === currentSlide
                        ? `${progress}%`
                        : index < currentSlide
                          ? '100%'
                          : '0%',
                  }}
                />
              </button>
            ))}
          </div>

          {/* Next Button */}
          <button
            onClick={nextSlide}
            className="p-2 bg-black/60 backdrop-blur-sm rounded-full border border-blue-500/30 text-blue-400 hover:bg-blue-500/20 hover:border-blue-400/50 transition-all duration-300 group"
          >
            <ChevronRightIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
          </button>
        </div>
      </div>
    </div>
  );
}
