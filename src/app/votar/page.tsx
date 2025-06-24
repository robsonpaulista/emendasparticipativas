'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { voteFormSchema, type VoteFormData } from '@/lib/validations/vote';
import { voteService, type Project } from '@/lib/services/vote';
import { ProjectCard } from '@/components/ProjectCard';
import {
  ClockIcon,
  InformationCircleIcon,
  CalendarIcon,
} from '@heroicons/react/24/outline';
import Link from 'next/link';

type VotingStatus = 'ABERTA' | 'ENCERRADA' | 'EM_BREVE';

export default function Votar() {
  const [step, setStep] = useState(1);
  const [voterId, setVoterId] = useState<string | null>(null);
  const [projects, setProjects] = useState<Project[]>([]);
  const [votedProjects, setVotedProjects] = useState<Set<string>>(new Set());
  const [error, setError] = useState<string | null>(null);

  // Status da votação (será controlado dinamicamente no futuro)
  const votingStatus = 'ENCERRADA' as VotingStatus;

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<VoteFormData>({
    resolver: zodResolver(voteFormSchema),
  });

  const onSubmit = async (data: VoteFormData) => {
    if (votingStatus !== 'ABERTA') {
      setError('A votação está encerrada no momento.');
      return;
    }

    try {
      setError(null);
      const response = await voteService.validateVoter(data);
      setVoterId(response.voterId);
      const projectsData = await voteService.getProjects();
      setProjects(projectsData);
      setStep(2);
    } catch (err) {
      setError('Falha ao validar eleitor. Por favor, tente novamente.');
    }
  };

  const handleVote = async (projectId: string) => {
    if (!voterId || votingStatus !== 'ABERTA') return;

    try {
      setError(null);
      await voteService.submitVote(projectId, voterId);
      setVotedProjects((prev) => new Set([...prev, projectId]));
      setProjects((prev) =>
        prev.map((p) => (p.id === projectId ? { ...p, votes: p.votes + 1 } : p))
      );
    } catch (err) {
      setError('Falha ao registrar voto. Por favor, tente novamente.');
    }
  };

  const getStatusInfo = () => {
    switch (votingStatus) {
      case 'ENCERRADA':
        return {
          icon: ClockIcon,
          title: 'VOTAÇÃO ENCERRADA',
          description:
            'O período de votação foi finalizado. Confira os resultados e fique atento aos próximos editais.',
          bgColor: 'bg-red-100',
          textColor: 'text-red-700',
          iconColor: 'text-red-600',
        };
      case 'EM_BREVE':
        return {
          icon: CalendarIcon,
          title: 'VOTAÇÃO EM BREVE',
          description:
            'Novo período de votação será aberto em breve. Acompanhe nossas redes sociais.',
          bgColor: 'bg-yellow-100',
          textColor: 'text-yellow-700',
          iconColor: 'text-yellow-600',
        };
      default:
        return {
          icon: InformationCircleIcon,
          title: 'VOTAÇÃO ABERTA',
          description:
            'Participe da escolha dos projetos que receberão recursos.',
          bgColor: 'bg-green-100',
          textColor: 'text-green-700',
          iconColor: 'text-green-600',
        };
    }
  };

  const statusInfo = getStatusInfo();

  return (
    <div className="bg-white">
      <div className="container py-24 sm:py-32">
        <div className="mx-auto max-w-4xl">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              Votação
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Participe da escolha dos projetos que receberão recursos através
              das emendas participativas.
            </p>
          </div>

          {/* Status da Votação */}
          <div
            className={`mt-12 ${statusInfo.bgColor} border border-gray-200 rounded-2xl p-8`}
          >
            <div className="flex items-center justify-center mb-4">
              <statusInfo.icon
                className={`h-8 w-8 ${statusInfo.iconColor} mr-3`}
              />
              <h2 className={`text-2xl font-bold ${statusInfo.textColor}`}>
                {statusInfo.title}
              </h2>
            </div>
            <p className={`text-center text-lg ${statusInfo.textColor} mb-6`}>
              {statusInfo.description}
            </p>

            {votingStatus === 'ENCERRADA' && (
              <div className="text-center space-y-4">
                <p className="text-gray-600">
                  Os editais de <strong>Educação</strong>,{' '}
                  <strong>Saúde</strong> e <strong>Agricultura Familiar</strong>
                  já finalizaram suas votações.
                </p>
                <div className="flex justify-center space-x-4">
                  <Link href="/editais" className="btn-primary">
                    Ver Editais
                  </Link>
                  <Link href="/faq" className="btn-secondary">
                    Perguntas Frequentes
                  </Link>
                </div>
              </div>
            )}
          </div>

          {/* Informações sobre o Processo */}
          <div className="mt-16 bg-gray-50 rounded-2xl p-8">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">
              Como Funciona o Processo de Votação
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-primary-600 font-bold">1</span>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Validação</h3>
                <p className="text-sm text-gray-600">
                  Informe CPF e telefone para validar sua participação
                </p>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-primary-600 font-bold">2</span>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Escolha</h3>
                <p className="text-sm text-gray-600">
                  Conheça os projetos aprovados na análise técnica
                </p>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-primary-600 font-bold">3</span>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Votação</h3>
                <p className="text-sm text-gray-600">
                  Vote no projeto de sua categoria preferida
                </p>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-primary-600 font-bold">4</span>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Resultado</h3>
                <p className="text-sm text-gray-600">
                  Os projetos mais votados são contemplados
                </p>
              </div>
            </div>
          </div>

          {/* Formulário de Votação (quando ativa) */}
          {votingStatus === 'ABERTA' && (
            <>
              {error && (
                <div className="mt-8 rounded-md bg-red-50 p-4">
                  <div className="flex">
                    <div className="ml-3">
                      <h3 className="text-sm font-medium text-red-800">
                        {error}
                      </h3>
                    </div>
                  </div>
                </div>
              )}

              {step === 1 ? (
                <div className="mt-16">
                  <h2 className="text-2xl font-bold text-gray-900 text-center mb-8">
                    Validação de Eleitor
                  </h2>
                  <form
                    onSubmit={handleSubmit(onSubmit)}
                    className="mx-auto max-w-xl"
                  >
                    <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                      <div className="sm:col-span-2">
                        <label
                          htmlFor="cpf"
                          className="block text-sm font-semibold leading-6 text-gray-900"
                        >
                          CPF
                        </label>
                        <div className="mt-2.5">
                          <input
                            {...register('cpf')}
                            type="text"
                            id="cpf"
                            autoComplete="off"
                            placeholder="000.000.000-00"
                            className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-600 sm:text-sm sm:leading-6"
                          />
                          {errors.cpf && (
                            <p className="mt-2 text-sm text-red-600">
                              {errors.cpf.message}
                            </p>
                          )}
                        </div>
                      </div>
                      <div className="sm:col-span-2">
                        <label
                          htmlFor="phone"
                          className="block text-sm font-semibold leading-6 text-gray-900"
                        >
                          Telefone
                        </label>
                        <div className="mt-2.5">
                          <input
                            {...register('phone')}
                            type="tel"
                            id="phone"
                            autoComplete="tel"
                            placeholder="(11) 99999-9999"
                            className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-600 sm:text-sm sm:leading-6"
                          />
                          {errors.phone && (
                            <p className="mt-2 text-sm text-red-600">
                              {errors.phone.message}
                            </p>
                          )}
                        </div>
                      </div>
                      <div className="sm:col-span-2">
                        <label
                          htmlFor="email"
                          className="block text-sm font-semibold leading-6 text-gray-900"
                        >
                          Email (opcional)
                        </label>
                        <div className="mt-2.5">
                          <input
                            {...register('email')}
                            type="email"
                            id="email"
                            autoComplete="email"
                            placeholder="seu@email.com"
                            className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-600 sm:text-sm sm:leading-6"
                          />
                          {errors.email && (
                            <p className="mt-2 text-sm text-red-600">
                              {errors.email.message}
                            </p>
                          )}
                        </div>
                      </div>
                    </div>
                    <div className="mt-10">
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="block w-full rounded-md bg-primary-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-primary-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600 disabled:bg-gray-400"
                      >
                        {isSubmitting ? 'Validando...' : 'Validar e Continuar'}
                      </button>
                    </div>
                  </form>
                </div>
              ) : (
                <div className="mx-auto mt-16">
                  <h2 className="text-2xl font-bold text-gray-900 text-center mb-8">
                    Escolha seus Projetos
                  </h2>
                  <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {projects.map((project) => (
                      <ProjectCard
                        key={project.id}
                        project={project}
                        onVote={handleVote}
                        isVoted={votedProjects.has(project.id)}
                      />
                    ))}
                  </div>
                </div>
              )}
            </>
          )}

          {/* Segurança e Transparência */}
          <div className="mt-16 bg-primary-50 rounded-2xl p-8">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">
              Segurança e Transparência
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <InformationCircleIcon className="h-8 w-8 text-primary-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">
                  Controle por CPF
                </h3>
                <p className="text-sm text-gray-600">
                  Cada pessoa pode votar apenas uma vez por edital usando CPF e
                  telefone
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <InformationCircleIcon className="h-8 w-8 text-primary-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">
                  Validação IP
                </h3>
                <p className="text-sm text-gray-600">
                  Sistema verifica IP e dispositivo para impedir votações
                  múltiplas
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <InformationCircleIcon className="h-8 w-8 text-primary-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">
                  Anti-Fraude
                </h3>
                <p className="text-sm text-gray-600">
                  Proteção contra bots e tentativas de manipulação dos
                  resultados
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
