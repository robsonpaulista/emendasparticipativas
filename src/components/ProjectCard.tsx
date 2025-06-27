import { Project } from '@/lib/services/vote'
import { motion } from 'framer-motion'

interface ProjectCardProps {
  project: Project
  onVote: (projectId: string) => void
  isVoted: boolean
}

export function ProjectCard({ project, onVote, isVoted }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="flex flex-col justify-between rounded-2xl bg-white p-8 ring-1 ring-gray-200 xl:p-10"
    >
      <div>
        <h3 className="text-lg font-semibold leading-8 text-gray-900">{project.title}</h3>
        <p className="mt-4 text-sm leading-6 text-gray-600">{project.description}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          <span className="inline-flex items-center rounded-md bg-primary-50 px-2 py-1 text-xs font-medium text-primary-700 ring-1 ring-inset ring-primary-700/10">
            {project.category}
          </span>
          <span className="inline-flex items-center rounded-md bg-gray-50 px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10">
            {project.location}
          </span>
        </div>
        <p className="mt-4 text-sm font-medium text-gray-900">
          Orçamento: R$ {project.budget.toLocaleString('pt-BR')}
        </p>
        <p className="mt-1 text-sm text-gray-500">
          Votos: {project.votes}
        </p>
      </div>
      <button
        onClick={() => onVote(project.id)}
        disabled={isVoted}
        className={`mt-8 block w-full rounded-md px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ${
          isVoted
            ? 'bg-gray-400 cursor-not-allowed'
            : 'bg-primary-600 hover:bg-primary-500 focus-visible:outline-primary-600'
        }`}
      >
        {isVoted ? 'Voto Registrado' : 'Votar'}
      </button>
    </motion.div>
  )
} 