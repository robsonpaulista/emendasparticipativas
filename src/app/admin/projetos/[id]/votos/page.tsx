import { getServerSession } from 'next-auth';
import { prisma } from '@/lib/prisma';
import { redirect } from 'next/navigation';
import Link from 'next/link';

interface Props {
  params: {
    id: string;
  };
}

export default async function VotosProjetoPage({ params }: Props) {
  const session = await getServerSession();

  if (!session) {
    redirect('/admin/login');
  }

  const [projeto, votos] = await Promise.all([
    prisma.project.findUnique({
      where: {
        id: params.id,
      },
    }),
    prisma.vote.findMany({
      where: {
        projectId: params.id,
      },
      orderBy: {
        createdAt: 'desc',
      },
    }),
  ]);

  if (!projeto) {
    redirect('/admin/projetos');
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold">Votos do Projeto</h1>
          <p className="text-gray-500">
            Visualize os votos recebidos para o projeto {projeto.title}.
          </p>
        </div>

        <Link
          href={`/admin/projetos/${projeto.id}`}
          className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Voltar
        </Link>
      </div>

      <div className="bg-white shadow overflow-hidden sm:rounded-md">
        <ul className="divide-y divide-gray-200">
          {votos.map((voto) => (
            <li key={voto.id}>
              <div className="px-4 py-4 sm:px-6">
                <div className="flex items-center justify-between">
                  <div className="text-sm font-medium text-indigo-600 truncate">
                    Voto ID: {voto.id}
                  </div>
                  <div className="ml-2 flex-shrink-0 flex">
                    <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                      {new Date(voto.createdAt).toLocaleDateString()}
                    </span>
                  </div>
                </div>
                <div className="mt-2 sm:flex sm:justify-between">
                  <div className="sm:flex">
                    <div className="flex items-center text-sm text-gray-500">
                      ID do Eleitor: {voto.voterId}
                    </div>
                  </div>
                  <div className="mt-2 flex items-center text-sm text-gray-500 sm:mt-0">
                    Projeto: {voto.projectId}
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
