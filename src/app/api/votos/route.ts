import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import * as z from 'zod';

const votoSchema = z.object({
  voterId: z.string().min(1, 'O eleitor é obrigatório'),
  projectId: z.string().min(1, 'O projeto é obrigatório'),
  editalId: z.string().min(1, 'O edital é obrigatório'),
});

export async function POST(request: Request) {
  try {
    const json = await request.json();
    const body = votoSchema.parse(json);

    // Verifica se já existe voto para o eleitor e edital (apenas um voto por edital)
    const votoExistente = await prisma.vote.findFirst({
      where: {
        voterId: body.voterId,
        editalId: body.editalId,
      },
    });

    if (votoExistente) {
      return new NextResponse(
        JSON.stringify({
          message: 'Você já votou neste edital',
        }),
        { status: 400 }
      );
    }

    // Cria o voto
    const voto = await prisma.vote.create({
      data: {
        voterId: body.voterId,
        projectId: body.projectId,
        editalId: body.editalId,
        ipAddress: request.headers.get('x-forwarded-for') || 'unknown',
        userAgent: request.headers.get('user-agent') || 'unknown',
      },
    });

    return NextResponse.json(voto);
  } catch (error) {
    if (error instanceof z.ZodError) {
      return new NextResponse(JSON.stringify(error.issues), { status: 422 });
    }

    return new NextResponse('Erro interno do servidor', { status: 500 });
  }
}

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const projectId = searchParams.get('projectId');

    if (!projectId) {
      return new NextResponse('ID do projeto é obrigatório', { status: 400 });
    }

    const votos = await prisma.vote.findMany({
      where: {
        projectId,
      },
      orderBy: {
        createdAt: 'desc',
      },
    });

    return NextResponse.json(votos);
  } catch (error) {
    return new NextResponse('Erro interno do servidor', { status: 500 });
  }
}
