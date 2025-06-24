import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import * as z from 'zod'

const votoSchema = z.object({
  userId: z.string().min(1, 'O usuário é obrigatório'),
  projectId: z.string().min(1, 'O projeto é obrigatório'),
})

export async function POST(request: Request) {
  try {
    const json = await request.json()
    const body = votoSchema.parse(json)

    // Verifica se já existe voto para o projeto e usuário
    const votoExistente = await prisma.vote.findFirst({
      where: {
        projectId: body.projectId,
        userId: body.userId,
      },
    })

    if (votoExistente) {
      return new NextResponse(
        JSON.stringify({
          message: 'Você já votou neste projeto',
        }),
        { status: 400 }
      )
    }

    // Cria o voto
    const voto = await prisma.vote.create({
      data: {
        userId: body.userId,
        projectId: body.projectId,
      },
    })

    return NextResponse.json(voto)
  } catch (error) {
    if (error instanceof z.ZodError) {
      return new NextResponse(JSON.stringify(error.issues), { status: 422 })
    }

    return new NextResponse('Erro interno do servidor', { status: 500 })
  }
}

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url)
    const projectId = searchParams.get('projectId')

    if (!projectId) {
      return new NextResponse('ID do projeto é obrigatório', { status: 400 })
    }

    const votos = await prisma.vote.findMany({
      where: {
        projectId,
      },
      orderBy: {
        createdAt: 'desc',
      },
    })

    return NextResponse.json(votos)
  } catch (error) {
    return new NextResponse('Erro interno do servidor', { status: 500 })
  }
} 