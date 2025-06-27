'use client';

import { useState } from 'react';
import {
  ArrowRightIcon,
  ArrowLeftIcon,
  CheckCircleIcon,
} from '@heroicons/react/24/outline';

// Tipos para os dados do formulário
interface FormData {
  // Dados do Cadastro (Etapa 1)
  nomeCompleto: string;
  cpf: string;
  email: string;
  telefone: string;
  endereco: string;

  // Dados do Projeto (Etapa 2)
  tituloProjeto: string;
  areaProjeto: string;
  descricaoProjeto: string;
  bairro: string;
  comunidadeBeneficiada: string;
  orcamentoEstimado: string;
  documentosApoio: FileList | null;
  videoApresentacao: FileList | null;
}

type FormValue<T extends keyof FormData> = FormData[T];

// Componentes das etapas
const DadosCadastro = ({
  data,
  onChange,
  onNext,
}: {
  data: FormData;
  onChange: <T extends keyof FormData>(field: T, value: FormValue<T>) => void;
  onNext: () => void;
}) => (
  <div className="space-y-3">
    <div className="bg-white/5 backdrop-blur-lg rounded-xl p-4 border border-white/10">
      <h2 className="text-lg font-semibold mb-3 text-white">
        Dados do Cadastro
      </h2>
      <div className="grid grid-cols-2 gap-3">
        <div className="col-span-2">
          <label className="block text-sm font-medium text-white/70 mb-1">
            Nome Completo
          </label>
          <input
            type="text"
            value={data.nomeCompleto}
            onChange={(e) => onChange('nomeCompleto', e.target.value)}
            className="w-full bg-white/10 border border-white/20 rounded-lg px-3 py-2 text-white placeholder-white/30 focus:outline-none focus:border-blue-500"
            placeholder="Digite seu nome completo"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-white/70 mb-1">
            CPF
          </label>
          <input
            type="text"
            value={data.cpf}
            onChange={(e) => onChange('cpf', e.target.value)}
            className="w-full bg-white/10 border border-white/20 rounded-lg px-3 py-2 text-white placeholder-white/30 focus:outline-none focus:border-blue-500"
            placeholder="000.000.000-00"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-white/70 mb-1">
            E-mail
          </label>
          <input
            type="email"
            value={data.email}
            onChange={(e) => onChange('email', e.target.value)}
            className="w-full bg-white/10 border border-white/20 rounded-lg px-3 py-2 text-white placeholder-white/30 focus:outline-none focus:border-blue-500"
            placeholder="seu@email.com"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-white/70 mb-1">
            Telefone
          </label>
          <input
            type="tel"
            value={data.telefone}
            onChange={(e) => onChange('telefone', e.target.value)}
            className="w-full bg-white/10 border border-white/20 rounded-lg px-3 py-2 text-white placeholder-white/30 focus:outline-none focus:border-blue-500"
            placeholder="(00) 00000-0000"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-white/70 mb-1">
            Endereço
          </label>
          <input
            type="text"
            value={data.endereco}
            onChange={(e) => onChange('endereco', e.target.value)}
            className="w-full bg-white/10 border border-white/20 rounded-lg px-3 py-2 text-white placeholder-white/30 focus:outline-none focus:border-blue-500"
            placeholder="Rua, número, bairro - Cidade"
          />
        </div>
      </div>
    </div>
    <div className="flex justify-end">
      <button
        onClick={onNext}
        className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg text-white font-medium hover:from-blue-600 hover:to-blue-700 transition-all duration-300 hover:scale-105"
      >
        Avançar
        <ArrowRightIcon className="ml-2 w-4 h-4" />
      </button>
    </div>
  </div>
);

const DadosProjeto = ({
  data,
  onChange,
  onNext,
  onBack,
}: {
  data: FormData;
  onChange: <T extends keyof FormData>(field: T, value: FormValue<T>) => void;
  onNext: () => void;
  onBack: () => void;
}) => (
  <div className="space-y-3">
    <div className="bg-white/5 backdrop-blur-lg rounded-xl p-4 border border-white/10">
      <h2 className="text-lg font-semibold mb-3 text-white">
        Dados do Projeto
      </h2>
      <div className="grid grid-cols-2 gap-3">
        <div className="col-span-2">
          <label className="block text-sm font-medium text-white/70 mb-1">
            Título do Projeto
          </label>
          <input
            type="text"
            value={data.tituloProjeto}
            onChange={(e) => onChange('tituloProjeto', e.target.value)}
            className="w-full bg-white/10 border border-white/20 rounded-lg px-3 py-2 text-white placeholder-white/30 focus:outline-none focus:border-blue-500"
            placeholder="Digite o título do projeto"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-white/70 mb-1">
            Área do Projeto
          </label>
          <select
            value={data.areaProjeto}
            onChange={(e) => onChange('areaProjeto', e.target.value)}
            className="w-full bg-white/10 border border-white/20 rounded-lg px-3 py-2 text-white placeholder-white/30 focus:outline-none focus:border-blue-500"
          >
            <option value="">Selecione uma área</option>
            <option value="educacao">Educação</option>
            <option value="saude">Saúde</option>
            <option value="meioAmbiente">Meio Ambiente</option>
            <option value="cultura">Cultura</option>
            <option value="esporte">Esporte</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-white/70 mb-1">
            Bairro
          </label>
          <input
            type="text"
            value={data.bairro}
            onChange={(e) => onChange('bairro', e.target.value)}
            className="w-full bg-white/10 border border-white/20 rounded-lg px-3 py-2 text-white placeholder-white/30 focus:outline-none focus:border-blue-500"
            placeholder="Bairro do projeto"
          />
        </div>
        <div className="col-span-2">
          <label className="block text-sm font-medium text-white/70 mb-1">
            Descrição Detalhada
          </label>
          <textarea
            value={data.descricaoProjeto}
            onChange={(e) => onChange('descricaoProjeto', e.target.value)}
            className="w-full bg-white/10 border border-white/20 rounded-lg px-3 py-2 text-white placeholder-white/30 focus:outline-none focus:border-blue-500 min-h-[80px]"
            placeholder="Descreva os objetivos, impacto social e público-alvo"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-white/70 mb-1">
            Comunidade Beneficiada
          </label>
          <input
            type="text"
            value={data.comunidadeBeneficiada}
            onChange={(e) => onChange('comunidadeBeneficiada', e.target.value)}
            className="w-full bg-white/10 border border-white/20 rounded-lg px-3 py-2 text-white placeholder-white/30 focus:outline-none focus:border-blue-500"
            placeholder="Comunidade beneficiada"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-white/70 mb-1">
            Orçamento Estimado
          </label>
          <input
            type="text"
            value={data.orcamentoEstimado}
            onChange={(e) => onChange('orcamentoEstimado', e.target.value)}
            className="w-full bg-white/10 border border-white/20 rounded-lg px-3 py-2 text-white placeholder-white/30 focus:outline-none focus:border-blue-500"
            placeholder="R$ 0,00"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-white/70 mb-1">
            Documentos de Apoio
          </label>
          <input
            type="file"
            multiple
            onChange={(e) => {
              const files = e.target.files;
              if (files) {
                onChange('documentosApoio', files);
              }
            }}
            className="w-full bg-white/10 border border-white/20 rounded-lg px-3 py-1.5 text-white file:mr-3 file:py-1.5 file:px-3 file:rounded-lg file:border-0 file:text-sm file:font-medium file:bg-blue-500 file:text-white hover:file:bg-blue-600"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-white/70 mb-1">
            Vídeo (opcional)
          </label>
          <input
            type="file"
            accept="video/*"
            onChange={(e) => {
              const files = e.target.files;
              if (files) {
                onChange('videoApresentacao', files);
              }
            }}
            className="w-full bg-white/10 border border-white/20 rounded-lg px-3 py-1.5 text-white file:mr-3 file:py-1.5 file:px-3 file:rounded-lg file:border-0 file:text-sm file:font-medium file:bg-blue-500 file:text-white hover:file:bg-blue-600"
          />
        </div>
      </div>
    </div>
    <div className="flex justify-between">
      <button
        onClick={onBack}
        className="inline-flex items-center px-4 py-2 bg-white/10 rounded-lg text-white font-medium hover:bg-white/20 transition-all duration-300"
      >
        <ArrowLeftIcon className="mr-2 w-4 h-4" />
        Voltar
      </button>
      <button
        onClick={onNext}
        className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg text-white font-medium hover:from-blue-600 hover:to-blue-700 transition-all duration-300 hover:scale-105"
      >
        Avançar
        <ArrowRightIcon className="ml-2 w-4 h-4" />
      </button>
    </div>
  </div>
);

const Confirmacao = ({
  data,
  onNext,
  onBack,
}: {
  data: FormData;
  onNext: () => void;
  onBack: () => void;
}) => (
  <div className="space-y-3">
    <div className="bg-white/5 backdrop-blur-lg rounded-xl p-4 border border-white/10">
      <h2 className="text-lg font-semibold mb-3 text-white">
        Confirmar Informações
      </h2>
      <div className="space-y-4">
        <div>
          <h3 className="text-base font-medium text-white mb-2">
            Dados do Requerente
          </h3>
          <div className="grid grid-cols-2 gap-3 text-sm text-white/70">
            <div>
              <p className="font-medium text-white/50">Nome Completo</p>
              <p>{data.nomeCompleto}</p>
            </div>
            <div>
              <p className="font-medium text-white/50">CPF</p>
              <p>{data.cpf}</p>
            </div>
            <div>
              <p className="font-medium text-white/50">E-mail</p>
              <p>{data.email}</p>
            </div>
            <div>
              <p className="font-medium text-white/50">Telefone</p>
              <p>{data.telefone}</p>
            </div>
            <div className="col-span-2">
              <p className="font-medium text-white/50">Endereço</p>
              <p>{data.endereco}</p>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-base font-medium text-white mb-2">
            Dados do Projeto
          </h3>
          <div className="grid grid-cols-2 gap-3 text-sm text-white/70">
            <div className="col-span-2">
              <p className="font-medium text-white/50">Título do Projeto</p>
              <p>{data.tituloProjeto}</p>
            </div>
            <div>
              <p className="font-medium text-white/50">Área do Projeto</p>
              <p>{data.areaProjeto}</p>
            </div>
            <div>
              <p className="font-medium text-white/50">Bairro</p>
              <p>{data.bairro}</p>
            </div>
            <div className="col-span-2">
              <p className="font-medium text-white/50">
                Comunidade Beneficiada
              </p>
              <p>{data.comunidadeBeneficiada}</p>
            </div>
            <div className="col-span-2">
              <p className="font-medium text-white/50">Descrição Detalhada</p>
              <p className="whitespace-pre-wrap">{data.descricaoProjeto}</p>
            </div>
            <div>
              <p className="font-medium text-white/50">Orçamento Estimado</p>
              <p>{data.orcamentoEstimado}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="flex justify-between">
      <button
        onClick={onBack}
        className="inline-flex items-center px-4 py-2 bg-white/10 rounded-lg text-white font-medium hover:bg-white/20 transition-all duration-300"
      >
        <ArrowLeftIcon className="mr-2 w-4 h-4" />
        Voltar
      </button>
      <button
        onClick={onNext}
        className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg text-white font-medium hover:from-blue-600 hover:to-blue-700 transition-all duration-300 hover:scale-105"
      >
        Confirmar e Enviar
        <ArrowRightIcon className="ml-2 w-4 h-4" />
      </button>
    </div>
  </div>
);

const Sucesso = () => (
  <div className="text-center">
    <div className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10">
      <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
        <CheckCircleIcon className="w-10 h-10 text-white" />
      </div>
      <h2 className="text-xl font-bold text-white mb-2">
        Cadastro concluído com sucesso!
      </h2>
      <p className="text-white/70">
        Agradecemos por sua iniciativa em construir um futuro melhor para nossa
        comunidade. Sua proposta é fundamental para a transformação que
        buscamos.
      </p>
    </div>
  </div>
);

export default function NovoProjeto() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<FormData>({
    nomeCompleto: '',
    cpf: '',
    email: '',
    telefone: '',
    endereco: '',
    tituloProjeto: '',
    areaProjeto: '',
    bairro: '',
    descricaoProjeto: '',
    comunidadeBeneficiada: '',
    orcamentoEstimado: '',
    documentosApoio: null,
    videoApresentacao: null,
  });

  const nextStep = () => setStep((prev) => prev + 1);
  const prevStep = () => setStep((prev) => prev - 1);

  const handleChange = <T extends keyof FormData>(
    field: T,
    value: FormValue<T>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black text-white">
      <div className="container mx-auto px-4 pt-24 pb-8">
        <div className="max-w-3xl mx-auto">
          {/* Indicador de Progresso */}
          <div className="flex items-center justify-between mb-6">
            {[1, 2, 3, 4].map((number) => (
              <div
                key={number}
                className={`flex items-center ${number !== 4 ? 'flex-1' : ''}`}
              >
                <div
                  className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold relative ${
                    step >= number ? 'bg-blue-500' : 'bg-white/20'
                  }`}
                >
                  {number}
                  {number < 4 && (
                    <div
                      className={`absolute left-6 w-full h-0.5 -z-10 ${
                        step > number ? 'bg-blue-500' : 'bg-white/20'
                      }`}
                    />
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Formulários */}
          {step === 1 && (
            <DadosCadastro
              data={formData}
              onChange={handleChange}
              onNext={nextStep}
            />
          )}
          {step === 2 && (
            <DadosProjeto
              data={formData}
              onChange={handleChange}
              onNext={nextStep}
              onBack={prevStep}
            />
          )}
          {step === 3 && (
            <Confirmacao data={formData} onNext={nextStep} onBack={prevStep} />
          )}
          {step === 4 && <Sucesso />}
        </div>
      </div>
    </main>
  );
}
