import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { prisma } from '@/lib/prisma';
import * as z from 'zod';

const projetoSchema = z.object({
  title: z.string().min(1, 'O título é obrigatório'),
  description: z.string().min(1, 'A descrição é obrigatória'),
  organization: z.string().min(1, 'A organização é obrigatória'),
  category: z.string().min(1, 'A categoria é obrigatória'),
  budget: z.number().min(0, 'O orçamento é obrigatório'),
  location: z.string().min(1, 'A localização é obrigatória'),
  editalId: z.string().min(1, 'O ID do edital é obrigatório'),
  status: z
    .enum(['INSCRITO', 'APROVADO_TECNICA', 'REPROVADO_TECNICA', 'SELECIONADO'])
    .optional(),
});

export async function POST(request: Request) {
  try {
    const session = await getServerSession();

    if (!session) {
      return new NextResponse('Não autorizado', { status: 401 });
    }

    const json = await request.json();
    const body = projetoSchema.parse(json);

    const projeto = await prisma.project.create({
      data: {
        title: body.title,
        description: body.description,
        organization: body.organization,
        category: body.category,
        budget: body.budget,
        location: body.location,
        editalId: body.editalId,
        status: body.status || 'INSCRITO',
      },
    });

    return NextResponse.json(projeto);
  } catch (error) {
    if (error instanceof z.ZodError) {
      return new NextResponse(JSON.stringify(error.issues), { status: 422 });
    }

    return new NextResponse('Erro interno do servidor', { status: 500 });
  }
}

export async function GET() {
  try {
    const session = await getServerSession();

    if (!session) {
      return new NextResponse('Não autorizado', { status: 401 });
    }

    const projetos = await prisma.project.findMany({
      orderBy: {
        createdAt: 'desc',
      },
    });

    return NextResponse.json(projetos);
  } catch (error) {
    return new NextResponse('Erro interno do servidor', { status: 500 });
  }
}
