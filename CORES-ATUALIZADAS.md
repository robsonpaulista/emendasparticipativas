# Atualização de Cores - Padronização Azul

## Mudanças Implementadas

### 🎨 Palette de Cores Padronizada

Substituição da palette que incluía rosa/roxo por tons de azul consistentes, seguindo o padrão visual da FIAP.

### 📍 Alterações Específicas

#### HeroCarousel.tsx

- **Slide 1**: `from-blue-900 to-blue-800` (era `from-blue-900 to-purple-900`)
- **Slide 2**: `from-blue-800 to-blue-700` (era `from-emerald-900 to-teal-900`)
- **Slide 3**: `from-blue-700 to-blue-600` (era `from-purple-900 to-pink-900`)
- **Efeito flutuante**: `from-blue-400/20 to-blue-500/20` (era `to-purple-400/20`)

#### Navigation.tsx

- **Linha de destaque**: `from-blue-400 to-blue-600` (era `to-purple-500`)
- **Botão Votar**: `from-blue-600 to-blue-700` (era `to-purple-600`)
- **Hover do botão**: `from-blue-700 to-blue-800` (era `to-purple-700`)
- **Overlay do botão**: `from-blue-400 to-blue-500` (era `to-purple-400`)

#### StatsCarousel.tsx

- **Efeito ativo**: `from-blue-400/20 to-blue-500/20` (era `to-purple-400/20`)

### 📏 Ajustes de Tamanho

#### Títulos do HeroCarousel

- **H1**: `text-3xl sm:text-4xl lg:text-5xl` (era `text-4xl sm:text-5xl lg:text-6xl`)
- **H2**: `text-xl sm:text-2xl lg:text-3xl` (era `text-2xl sm:text-3xl lg:text-4xl`)

#### StatsCarousel

- **Valores**: `text-xl lg:text-2xl` (era `text-2xl lg:text-3xl`)
- **Labels**: `text-xs` (era `text-sm`)
- **Padding**: `p-4` (era `p-6`)
- **Ícones**: `w-5 h-5` (era `w-6 h-6`)
- **Padding dos ícones**: `p-2` (era `p-3`)

#### Navigation

- **Logo**: `text-lg` (era `text-xl`)
- **Texto**: "EMENDAS PARTICIPATIVAS" / "Dep. Fed. Jadyel Alencar"

## 🎯 Resultado Visual

### Antes

- Mistura de cores: azul, roxo, rosa, verde, turquesa
- Títulos muito grandes dominando a tela
- Cards de estatísticas com muito espaçamento

### Depois

- Palette consistente em tons de azul
- Títulos proporcionais e legíveis
- Cards mais compactos e elegantes
- Visual harmonioso e profissional

## 🔄 Gradientes Utilizados

### Backgrounds dos Slides

1. `bg-gradient-to-br from-blue-900 to-blue-800`
2. `bg-gradient-to-br from-blue-800 to-blue-700`
3. `bg-gradient-to-br from-blue-700 to-blue-600`

### Elementos Interativos

- **Linhas de destaque**: `from-blue-400 to-blue-600`
- **Botões principais**: `from-blue-600 to-blue-700`
- **Estados hover**: `from-blue-700 to-blue-800`
- **Efeitos overlay**: `from-blue-400 to-blue-500`

## ✅ Benefícios

1. **Consistência Visual**: Toda a interface usa a mesma família de cores
2. **Profissionalismo**: Visual mais corporativo e confiável
3. **Legibilidade**: Títulos em tamanho adequado para melhor leitura
4. **Harmonia**: Elementos se complementam visualmente
5. **Foco**: Usuário não se distrai com cores conflitantes

## 🚀 Compatibilidade

- ✅ Mantém toda funcionalidade existente
- ✅ Responsivo em todos os dispositivos
- ✅ Acessibilidade preservada
- ✅ Performance não impactada
