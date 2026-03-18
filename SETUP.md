SETUP.md - Instruções Detalhadas de Configuração
=================================================

## 1️⃣ Pré-requisitos necessários

Antes de começar, certifique-se de ter instalado:

- **Node.js** 16.x ou superior
  - Download: https://nodejs.org/ (versão LTS recomendada)
  - Verificar: `node --version && npm --version`

- **Um editor de código** (VS Code recomendado)
  - Download: https://code.visualstudio.com/

## 2️⃣ Passo a Passo de Instalação

### Etapa 1: Abrir Terminal no VS Code
1. Abra a pasta `portifolio-react` no VS Code
2. Pressione `Ctrl + '' (backtick) para abrir o terminal integrado
3. Ou vá em: Terminal > Novo Terminal

### Etapa 2: Instalar Dependências
```bash
npm install
```

Isso instalará:
- React 18.2.0
- Vite (build tool)
- Plugins do Vite

⏱️ Tempo estimado: 2-5 minutos

### Etapa 3: Iniciar o Servidor de Desenvolvimento
```bash
npm run dev
```

Você verá mensagens como:
```
> portifolio-talita@1.0.0 dev
> vite

  VITE v5.x.x  ready in xxx ms

  ➜  Local:   http://localhost:3000/
  ➜  press h to show help
```

### Etapa 4: Acessar no Navegador
- Abra no navegador: http://localhost:3000/
- O site deve aparecer conectado ao servidor (com hot reload)

## 3️⃣ Comandos Importantes

```bash
# Iniciar em desenvolvimento (com hot reload)
npm run dev

# Criar build otimizado para produção
npm run build

# Visualizar a build localmente
npm run preview

# Parar o servidor
Ctrl + C (no terminal)
```

## 4️⃣ Estrutura Exata do Projeto

```
portifolio-react/
│
├── public/
│   ├── index.html               ← Arquivo HTML principal
│   └── img/                     ← IMAGENS (copiadas automaticamente)
│       ├── talita.png
│       ├── cachoro.png
│       ├── estetica.png
│       ├── linkedin.jpeg
│       ├── github.png
│       ├── whatsapp_logo..png
│       ├── capa-linguagens.png
│       └── ... outras imagens
│
├── src/
│   ├── components/              ← COMPONENTES REACT (reusáveis)
│   │   ├── Header.jsx           ← Cabeçalho com menu
│   │   ├── Hero.jsx             ← Seção inicial
│   │   ├── About.jsx            ← Seção Sobre
│   │   ├── Projects.jsx         ← Seção Projetos
│   │   ├── ProjectCard.jsx      ← Card individual de projeto
│   │   └── Footer.jsx           ← Rodapé com redes sociais
│   │
│   ├── styles/                  ← CSS MODULES (isolado por componente)
│   │   ├── global.css           ← Estilos globais
│   │   ├── Header.module.css    ← Estilos do Header
│   │   ├── Hero.module.css      ← Estilos do Hero
│   │   ├── About.module.css     ← Estilos do About
│   │   ├── Projects.module.css  ← Estilos do Projects
│   │   ├── ProjectCard.module.css ← Estilos do Card
│   │   └── Footer.module.css    ← Estilos do Footer
│   │
│   ├── App.jsx                  ← Componente principal que agrupa tudo
│   └── main.jsx                 ← Entry point (inicializa a app)
│
├── package.json                 ← Configuração do projeto + dependências
├── vite.config.js              ← Configuração do Vite
├── .gitignore                  ← Arquivos ignorados pelo Git
├── .eslintrc.cjs               ← Configuração do linter
├── README.md                   ← Documentação principal
├── MIGRATION.md                ← Guia de migração
└── SETUP.md                    ← Este arquivo
```

## 5️⃣ Como Editar o Projeto

### Adicionar uma nova seção:

1. Criar arquivo em `src/components/MinhaSecao.jsx`:
```jsx
export default function MinhaSecao() {
  return (
    <section id="minha-secao">
      <h2>Minha Seção</h2>
      {/* Conteúdo */}
    </section>
  )
}
```

2. Criar stylesheet em `src/styles/MinhaSecao.module.css`:
```css
.container {
  padding: 60px 30px;
  /* Seus estilos */
}
```

3. Importar em `src/App.jsx`:
```jsx
import MinhaSecao from './components/MinhaSecao'

function App() {
  return (
    <div>
      <Header />
      <Hero />
      <About />
      <MinhaSecao />  {/* 👈 Adicionar aqui */}
      <Projects />
      <Footer />
    </div>
  )
}
```

## 6️⃣ Editar Conteúdo Existente

### Alterar texto da seção Sobre:
- Arquivo: `src/components/About.jsx`
- Procure por: `<About>` component
- Edite o texto dentro das tags

### Adicionar/remover projetos:
- Arquivo: `src/components/Projects.jsx`
- Edite o array `projects`:
```jsx
const projects = [
  {
    id: 1,
    image: '/img/nome-imagem.png',
    title: 'Título do Projeto',
    description: 'Descrição aqui',
    link: 'https://link-do-projeto'
  },
  // Adicione mais projetos aqui
]
```

### Mudar cores principais:
- Edite os valores HEX nos arquivos CSS
- Cores principais: `#ec8ffa` (rosa), `#f6d3fb` (rosa claro), `#191919` (preto)

## 7️⃣ Hot Reload (Recarga Automática)

O Vite permite que você veja as mudanças em tempo real:
1. Faça uma alteração em qualquer arquivo
2. Salve o arquivo (Ctrl + S)
3. O navegador atualiza automaticamente ⚡

## 8️⃣ Build para Produção

Quando seu portfólio estiver pronto:

```bash
npm run build
```

Isso gera uma pasta `dist/` com:
- HTML minificado
- CSS otimizado
- JavaScript comprimido
- Pronto para fazer deploy

Para visualizar antes de fazer deploy:
```bash
npm run preview
```

## 😕 Troubleshooting (Problemas Comuns)

### ❌ "npm: command not found"
**Solução:** Node.js não está instalado. Baixe em https://nodejs.org/

### ❌ "Port 3000 already in use"
**Solução:** Outro programa está usando a porta
```bash
# Use outra porta
npm run dev -- --port 3001
```

### ❌ Imagens não aparecem
**Solução:** Verifique se as imagens estão em `public/img/`
- Use `/img/nome-imagem.png` nos componentes

### ❌ Estilos não carregam
**Solução:** Certifique-se de importar o CSS Module:
```jsx
import styles from '../styles/MeuComponente.module.css'
```

## 📚 Recursos Úteis

- **Documentação React:** https://pt-br.react.dev/
- **Documentação Vite:** https://vitejs.dev/
- **CSS Modules:** https://create-react-app.dev/docs/adding-a-css-modules-stylesheet/
- **Google Fonts:** https://fonts.google.com/

## ✨ Próxomas Melhorias Sugeridas

- [ ] Adicionar React Router para múltiplas páginas
- [ ] Criar formulário de contato funcional
- [ ] Implementar busca de projetos
- [ ] Dark mode toggle
- [ ] Animações com Framer Motion
- [ ] Testes com Vitest

---

🎉 **Pronto para começar?**

```bash
npm install    # Instalar dependências
npm run dev    # Iniciar servidor
```

Aproveite! 🚀
