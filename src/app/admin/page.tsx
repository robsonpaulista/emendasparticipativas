'use client'

import { useEffect, useState } from 'react'
import {
  UserGroupIcon,
  DocumentTextIcon,
  ChartBarIcon,
  CurrencyDollarIcon,
} from '@heroicons/react/24/outline'

interface DashboardStats {
  totalVoters: number
  totalProjects: number
  totalVotes: number
  totalBudget: number
}

export default function AdminDashboard() {
  const [stats, setStats] = useState<DashboardStats>({
    totalVoters: 0,
    totalProjects: 0,
    totalVotes: 0,
    totalBudget: 0,
  })

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const response = await fetch('/api/admin/stats')
        const data = await response.json()
        setStats(data)
      } catch (error) {
        console.error('Erro ao carregar estatísticas:', error)
      }
    }

    fetchStats()
  }, [])

  const statsCards = [
    {
      name: 'Total de Eleitores',
      value: stats.totalVoters,
      icon: UserGroupIcon,
      color: 'bg-blue-500',
    },
    {
      name: 'Total de Projetos',
      value: stats.totalProjects,
      icon: DocumentTextIcon,
      color: 'bg-green-500',
    },
    {
      name: 'Total de Votos',
      value: stats.totalVotes,
      icon: ChartBarIcon,
      color: 'bg-purple-500',
    },
    {
      name: 'Orçamento Total',
      value: `R$ ${stats.totalBudget.toLocaleString('pt-BR')}`,
      icon: CurrencyDollarIcon,
      color: 'bg-yellow-500',
    },
  ]

  return (
    <div>
      <h1 className="text-2xl font-semibold text-gray-900">Dashboard</h1>
      <p className="mt-2 text-sm text-gray-700">
        Visão geral do sistema de emendas participativas
      </p>

      <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {statsCards.map((card) => (
          <div
            key={card.name}
            className="overflow-hidden rounded-lg bg-white shadow"
          >
            <div className="p-5">
              <div className="flex items-center">
                <div className={`flex-shrink-0 rounded-md p-3 ${card.color}`}>
                  <card.icon className="h-6 w-6 text-white" aria-hidden="true" />
                </div>
                <div className="ml-5 w-0 flex-1">
                  <dl>
                    <dt className="truncate text-sm font-medium text-gray-500">
                      {card.name}
                    </dt>
                    <dd className="mt-1 text-3xl font-semibold text-gray-900">
                      {card.value}
                    </dd>
                  </dl>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
} 