import { SignJWT, jwtVerify, JWTPayload } from 'jose'
import { NextRequest } from 'next/server'
import { prisma } from '@/lib/prisma'
import bcrypt from 'bcryptjs'

const JWT_SECRET = process.env.JWT_SECRET || 'your-secret-key'
const secret = new TextEncoder().encode(JWT_SECRET)

interface CustomJWTPayload extends JWTPayload {
  userId: string
  role: string
}

export const authService = {
  async generateToken(payload: CustomJWTPayload) {
    return await new SignJWT(payload)
      .setProtectedHeader({ alg: 'HS256' })
      .setIssuedAt()
      .setExpirationTime('24h')
      .sign(secret)
  },

  async verifyToken(token: string) {
    try {
      const { payload } = await jwtVerify(token, secret)
      return payload as CustomJWTPayload
    } catch (error) {
      throw new Error('Token inválido')
    }
  },

  async login(email: string, password: string) {
    const user = await prisma.user.findUnique({
      where: { email },
    })

    if (!user) {
      throw new Error('Usuário não encontrado')
    }

    const isValidPassword = await bcrypt.compare(password, user.password)

    if (!isValidPassword) {
      throw new Error('Senha inválida')
    }

    const token = await this.generateToken({
      userId: user.id,
      role: user.role,
    })

    return { user, token }
  },

  async register(name: string, email: string, password: string) {
    const existingUser = await prisma.user.findUnique({
      where: { email },
    })

    if (existingUser) {
      throw new Error('Email já cadastrado')
    }

    const hashedPassword = await bcrypt.hash(password, 10)

    const user = await prisma.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
        role: 'USER',
      },
    })

    const token = await this.generateToken({
      userId: user.id,
      role: user.role,
    })

    return { user, token }
  },

  async getCurrentUser(request: NextRequest) {
    const token = request.cookies.get('token')?.value

    if (!token) {
      return null
    }

    try {
      const payload = await this.verifyToken(token)
      return payload
    } catch (error) {
      return null
    }
  },
} 