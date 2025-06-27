import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { z } from 'zod'

const projectSchema = z.object({
  title: z.string().min(1, 'Título é obrigatório'),
  description: z.string().min(1, 'Descrição é obrigatória'),
  category: z.string().min(1, 'Categoria é obrigatória'),
  budget: z.number().min(0, 'Orçamento deve ser maior que zero'),
  location: z.string().min(1, 'Localização é obrigatória'),
})

export async function PUT(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const body = await request.json()
    const validatedData = projectSchema.parse(body)

    const project = await prisma.project.update({
      where: {
        id: params.id,
      },
      data: validatedData,
    })

    return NextResponse.json(project)
  } catch (error) {
    console.error('Erro ao atualizar projeto:', error)
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: 'Dados inválidos', details: error.errors },
        { status: 400 }
      )
    }
    return NextResponse.json(
      { error: 'Erro ao atualizar projeto' },
      { status: 500 }
    )
  }
}

export async function DELETE(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    // Verifica se o projeto existe
    const project = await prisma.project.findUnique({
      where: {
        id: params.id,
      },
      include: {
        votes: true,
      },
    })

    if (!project) {
      return NextResponse.json(
        { error: 'Projeto não encontrado' },
        { status: 404 }
      )
    }

    // Se o projeto já tem votos, apenas marca como inativo
    if (project.votes.length > 0) {
      await prisma.project.update({
        where: {
          id: params.id,
        },
        data: {
          status: 'INACTIVE',
        },
      })
    } else {
      // Se não tem votos, pode ser excluído
      await prisma.project.delete({
        where: {
          id: params.id,
        },
      })
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Erro ao excluir projeto:', error)
    return NextResponse.json(
      { error: 'Erro ao excluir projeto' },
      { status: 500 }
    )
  }
} 