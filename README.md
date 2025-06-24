# Emendas Participativas

Sistema de gerenciamento de emendas parlamentares participativas, inspirado no projeto real das Emendas Participativas de Sergipe. Permite que cidadãos participem ativamente da escolha de projetos que receberão recursos públicos através de um processo democrático e transparente.

## Sobre o Projeto

As Emendas Participativas representam uma forma transparente e democrática de destinação de recursos públicos. Por meio deste sistema, a população tem voz ativa na escolha dos projetos que receberão investimentos, promovendo um mandato colaborativo onde cidadãos decidem diretamente como os recursos serão utilizados.

## Funcionalidades Principais

### 📊 Sistema de Editais

- Gerenciamento completo de editais por categoria (Educação, Saúde, Agricultura Familiar, etc.)
- Controle de cronogramas e fases (Inscrição, Análise Técnica, Votação, Resultado)
- Histórico de editais anteriores
- Status de votação em tempo real

### 🗳️ Sistema de Votação

- Validação segura por CPF e telefone
- Controle anti-fraude com verificação de IP e dispositivo
- Proteção contra bots e votação automatizada
- Interface intuitiva para escolha de projetos

### 👥 Área Administrativa

- Dashboard com estatísticas em tempo real
- Gerenciamento de projetos e eleitores
- Relatórios detalhados por categoria e localização
- Configurações de votação e orçamento

### 🔒 Autenticação e Segurança

- Sistema de autenticação JWT
- Controle de acesso por roles (USER/ADMIN)
- Validação rigorosa de dados
- Auditoria completa de votos

### 📱 Interface Responsiva

- Design moderno e acessível
- Totalmente responsivo para mobile
- Identidade visual profissional
- Experiência de usuário otimizada

## Editais Implementados

### Editais Atuais (2024)

- **Educação**: Destinado a Instituições Federais
- **Saúde**: Destinado aos Hospitais Filantrópicos
- **Agricultura Familiar**: Destinado a Associações e Cooperativas

### Editais Anteriores (2023)

- **Guardas Municipais**: Equipamentos e veículos para segurança pública
- **Organizações Sociais**: Fortalecimento de organizações do SUAS

## Processo de Participação

1. **Inscrição** (30 abril - 25 maio): Entidades inscrevem seus projetos
2. **Análise Técnica** (26-28 maio): Avaliação de conformidade com editais
3. **Votação** (04-13 junho): População escolhe projetos prioritários
4. **Resultado** (04 julho): Divulgação dos projetos contemplados

## Tecnologias Utilizadas

- **Frontend**: Next.js 14, React 18, TypeScript, Tailwind CSS
- **Backend**: Next.js API Routes, Prisma ORM
- **Banco de Dados**: SQLite (desenvolvimento) / PostgreSQL (produção)
- **Autenticação**: JWT com biblioteca 'jose'
- **Validação**: Zod Schema Validation
- **Forms**: React Hook Form
- **UI Components**: Headless UI, Heroicons
- **Desenvolvimento**: ESLint, Prettier, Husky

## Estrutura do Projeto

```
src/
├── app/
│   ├── admin/                    # Área administrativa
│   │   ├── dashboard/           # Dashboard com estatísticas
│   │   ├── projetos/            # Gerenciamento de projetos
│   │   ├── eleitores/           # Listagem de eleitores
│   │   ├── relatorios/          # Relatórios e analytics
│   │   └── configuracoes/       # Configurações do sistema
│   ├── editais/                 # Listagem de editais ativos
│   ├── editais-anteriores/      # Histórico de editais
│   ├── identidade-visual/       # Materiais de marca
│   ├── votar/                   # Sistema de votação
│   ├── faq/                     # Perguntas frequentes
│   └── api/                     # APIs do sistema
├── components/                   # Componentes reutilizáveis
├── lib/
│   ├── services/                # Serviços (auth, vote)
│   ├── validations/             # Schemas de validação
│   └── prisma.ts               # Cliente do banco
└── middleware.ts               # Proteção de rotas
```

## Instalação e Configuração

### Pré-requisitos

- Node.js 18+
- npm ou yarn
- Git

### Configuração Local

1. **Clone o repositório:**

```bash
git clone https://github.com/seu-usuario/emendas-participativas.git
cd emendas-participativas
```

2. **Instale as dependências:**

```bash
npm install
```

3. **Configure as variáveis de ambiente:**

```bash
# Crie o arquivo .env com base no .env.example
DATABASE_URL="file:./dev.db"
JWT_SECRET="sua-chave-jwt-super-secreta"
NEXTAUTH_URL="http://localhost:3000"
```

4. **Configure o banco de dados:**

```bash
npx prisma generate
npx prisma migrate dev
```

5. **Inicie o servidor de desenvolvimento:**

```bash
npm run dev
```

6. **Acesse o sistema:**

- Frontend: http://localhost:3000
- Admin: http://localhost:3000/admin

## Scripts Disponíveis

```bash
npm run dev              # Servidor de desenvolvimento
npm run build            # Build de produção
npm run start            # Servidor de produção
npm run lint             # Verificação de código
npm run format           # Formatação com Prettier
npx prisma studio        # Interface do banco de dados
npx prisma generate      # Gerar cliente Prisma
npx prisma migrate dev   # Executar migrações
```

## Segurança e Transparência

### Validação de Votos

- **Controle por CPF**: Cada pessoa vota apenas uma vez por edital
- **Validação de Telefone**: Verificação adicional de identidade
- **Controle de IP**: Prevenção de múltiplas votações
- **Anti-Fraude**: Detecção de bots e tentativas de manipulação

### Transparência

- Todos os processos são auditáveis
- Estatísticas públicas em tempo real
- Histórico completo de votações
- Relatórios detalhados por categoria

## Configuração para Produção

### Deploy com Docker

```bash
# Build da imagem
docker build -t emendas-participativas .

# Executar com docker-compose
docker-compose up -d
```

### Variáveis de Ambiente de Produção

```bash
NODE_ENV=production
DATABASE_URL="postgresql://user:pass@host:5432/db"
JWT_SECRET="chave-super-secreta-produção"
NEXTAUTH_URL="https://seu-dominio.com"
```

## Contribuição

1. Fork o projeto
2. Crie uma branch para sua feature (`git checkout -b feature/nova-feature`)
3. Commit suas mudanças (`git commit -m 'feat: adiciona nova feature'`)
4. Push para a branch (`git push origin feature/nova-feature`)
5. Abra um Pull Request

### Padrões de Código

- Use TypeScript para type safety
- Siga as convenções do ESLint
- Mantenha componentes pequenos e reutilizáveis
- Documente funções complexas
- Teste as funcionalidades principais

## Roadmap

- [ ] Sistema de notificações por email
- [ ] API pública para integração
- [ ] Dashboard público com estatísticas
- [ ] Sistema de upload de documentos
- [ ] Integração com sistemas externos
- [ ] App mobile

## Suporte

- **Email**: contato@emendasparticipativas.com.br
- **Telefone**: (79) 98123-2193
- **Gabinete**: Rua Frei Paulo, 444 - Suíssa, Aracaju-SE

## Inspiração

Este projeto foi inspirado no sistema real de Emendas Participativas implementado pelo Senador Alessandro Vieira em Sergipe, promovendo transparência e participação cidadã na destinação de recursos públicos.

## Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---

**Desenvolvido com ❤️ para promover a democracia participativa e transparência na gestão pública.**
