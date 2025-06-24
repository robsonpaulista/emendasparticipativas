FROM node:18-alpine AS base

# Instala dependências necessárias
RUN apk add --no-cache libc6-compat

# Configura o diretório de trabalho
WORKDIR /app

# Copia os arquivos de configuração
COPY package.json package-lock.json ./
COPY prisma ./prisma/

# Instala as dependências
RUN npm ci

# Copia o código fonte
COPY . .

# Gera o cliente Prisma
RUN npx prisma generate

# Cria a build de produção
RUN npm run build

# Configura o ambiente de produção
ENV NODE_ENV=production

# Expõe a porta 3000
EXPOSE 3000

# Inicia a aplicação
CMD ["npm", "start"] 