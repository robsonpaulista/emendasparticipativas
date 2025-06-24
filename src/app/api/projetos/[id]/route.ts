import { NextResponse } from 'next/server'
import { getServerSession } from 'next-auth'
import { prisma } from '@/lib/prisma'
import * as z from 'zod'

const projetoSchema = z.object({
  title: z.string().min(1, 'O título é obrigatório'),
  description: z.string().min(1, 'A descrição é obrigatória'),
  status: z.enum(['DRAFT', 'PENDING', 'APPROVED', 'REJECTED', 'CLOSED']),
})

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const session = await getServerSession()

    if (!session) {
      return new NextResponse('Não autorizado', { status: 401 })
    }

    const projeto = await prisma.project.findUnique({
      where: {
        id: params.id,
      },
    })

    if (!projeto) {
      return new NextResponse('Projeto não encontrado', { status: 404 })
    }

    return NextResponse.json(projeto)
  } catch (error) {
    return new NextResponse('Erro interno do servidor', { status: 500 })
  }
}

export async function PATCH(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const session = await getServerSession()

    if (!session) {
      return new NextResponse('Não autorizado', { status: 401 })
    }

    const json = await request.json()
    const body = projetoSchema.parse(json)

    const projeto = await prisma.project.update({
      where: {
        id: params.id,
      },
      data: {
        title: body.title,
        description: body.description,
        status: body.status,
      },
    })

    return NextResponse.json(projeto)
  } catch (error) {
    if (error instanceof z.ZodError) {
      return new NextResponse(JSON.stringify(error.issues), { status: 422 })
    }

    return new NextResponse('Erro interno do servidor', { status: 500 })
  }
}

export async function DELETE(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const session = await getServerSession()

    if (!session) {
      return new NextResponse('Não autorizado', { status: 401 })
    }

    await prisma.project.delete({
      where: {
        id: params.id,
      },
    })

    return new NextResponse(null, { status: 204 })
  } catch (error) {
    return new NextResponse('Erro interno do servidor', { status: 500 })
  }
} 