import { prisma } from '@/lib/prisma'

export default async function DashboardPage() {
  const [projetosCount, votosCount] = await Promise.all([
    prisma.project.count(),
    prisma.vote.count(),
  ])

  return (
    <div>
      <h1 className="text-2xl font-semibold text-gray-900">Dashboard</h1>
      <p className="mt-2 text-sm text-gray-700">
        Bem-vindo ao painel administrativo das Emendas Participativas.
      </p>

      <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-2">
        <div className="overflow-hidden rounded-lg bg-white px-4 py-5 shadow sm:p-6">
          <dt className="truncate text-sm font-medium text-gray-500">Total de Projetos</dt>
          <dd className="mt-1 text-3xl font-semibold tracking-tight text-gray-900">
            {projetosCount}
          </dd>
        </div>

        <div className="overflow-hidden rounded-lg bg-white px-4 py-5 shadow sm:p-6">
          <dt className="truncate text-sm font-medium text-gray-500">Total de Votos</dt>
          <dd className="mt-1 text-3xl font-semibold tracking-tight text-gray-900">
            {votosCount}
          </dd>
        </div>
      </div>

      <div className="mt-8">
        <h2 className="text-lg font-medium text-gray-900">Ações Rápidas</h2>
        <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <a
            href="/admin/editais/novo"
            className="relative block w-full rounded-lg border-2 border-dashed border-gray-300 p-12 text-center hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
          >
            <div className="mt-2 block text-sm font-semibold text-gray-900">
              Criar Novo Edital
            </div>
          </a>

          <a
            href="/admin/projetos/novo"
            className="relative block w-full rounded-lg border-2 border-dashed border-gray-300 p-12 text-center hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
          >
            <div className="mt-2 block text-sm font-semibold text-gray-900">
              Cadastrar Novo Projeto
            </div>
          </a>

          <a
            href="/admin/usuarios/novo"
            className="relative block w-full rounded-lg border-2 border-dashed border-gray-300 p-12 text-center hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
          >
            <div className="mt-2 block text-sm font-semibold text-gray-900">
              Adicionar Novo Usuário
            </div>
          </a>
        </div>
      </div>
    </div>
  )
} 