import { VoteFormData } from '../validations/vote';

export interface Project {
  id: string;
  title: string;
  description: string;
  category: string;
  budget: number;
  location: string;
  votes: number;
}

export const voteService = {
  async validateVoter(data: VoteFormData) {
    const response = await fetch('/api/vote/validate', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error('Falha ao validar eleitor');
    }

    return response.json();
  },

  async getProjects() {
    const response = await fetch('/api/projects');

    if (!response.ok) {
      throw new Error('Falha ao carregar projetos');
    }

    return response.json() as Promise<Project[]>;
  },

  async submitVote(projectId: string, voterId: string, editalId: string) {
    const response = await fetch('/api/votos', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ projectId, voterId, editalId }),
    });

    if (!response.ok) {
      throw new Error('Falha ao registrar voto');
    }

    return response.json();
  },
};
