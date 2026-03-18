# Portfólio Talita Lima - React.js

Portfólio pessoal desenvolvido em **React.js** seguindo as melhores práticas de desenvolvimento frontend moderno.

## 📋 Pré-requisitos

- Node.js 16.x ou superior
- npm ou yarn

## 📦 Instalação

1. **Clone ou acesse o repositório:**
```bash
cd portifolio-react
```

2. **Instale as dependências:**
```bash
npm install
```

3. **Copie as imagens:**
Copy all images from the original `img/` folder to `public/img/` directory.

## 🚀 Como iniciar

### Modo de desenvolvimento:
```bash
npm run dev
```

A aplicação abrirá automaticamente em `http://localhost:3000`

### Build para produção:
```bash
npm run build
```

A pasta `dist/` será gerada com o projeto minificado e otimizado.

### Preview da build:
```bash
npm run preview
```

## 📁 Estrutura do Projeto

```
portifolio-react/
├── public/
│   ├── index.html          # HTML principal
│   └── img/                # Imagens do portfólio
├── src/
│   ├── components/         # Componentes React reutilizáveis
│   │   ├── Header.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Projects.jsx
│   │   ├── ProjectCard.jsx
│   │   └── Footer.jsx
│   ├── styles/             # CSS Modules (modulado)
│   │   ├── global.css
│   │   ├── Header.module.css
│   │   ├── Hero.module.css
│   │   ├── About.module.css
│   │   ├── Projects.module.css
│   │   ├── ProjectCard.module.css
│   │   └── Footer.module.css
│   ├── App.jsx             # Componente raiz
│   ├── main.jsx            # Entry point
├── package.json            # Dependências e scripts
├── vite.config.js         # Configuração do Vite
├── .gitignore             # Git ignore
└── README.md              # Esta documentação
```

## 🎨 Componentes

### Header
Componente de navegação com menu responsivo e hamburger menu para dispositivos móveis.

**Props:** Nenhuma (autossuficiente)

### Hero
Seção inicial com imagem de background e animação.

**Props:** Nenhuma (autossuficiente)

### About
Seção de apresentação pessoal com imagem e texto.

**Props:** Nenhuma (autossuficiente)

### Projects
Seção de portfólio que renderiza cards de projetos.

**Props:** Nenhuma (dados internos)

### ProjectCard
Componente de apresentação de projeto individual.

**Props:**
- `image` (string): URL da imagem
- `title` (string): Título do projeto
- `description` (string): Descrição do projeto
- `link` (string): URL do projeto

### Footer
Componente de rodapé com links de redes sociais.

**Props:** Nenhuma (autossuficiente)

## 🛠️ Tecnologias Utilizadas

- **React 18.2** - Biblioteca UI
- **Vite** - Build tool moderno e rápido
- **CSS Modules** - Isolamento de estilos
- **HTML5** - Semântica
- **JavaScript ES6+** - Programação moderna

## 📱 Responsividade

O projeto é totalmente responsivo, com breakpoints otimizados para:
- Desktop (1200px+)
- Tablet (768px - 1199px)
- Mobile (até 767px)

## 🎯 Melhores Práticas Implementadas

✅ **Componentes reutilizáveis** - Components bem definidos e isolados
✅ **CSS Modules** - Evita conflito de classes globais
✅ **Semantic HTML** - Uso de tags semânticas
✅ **Mobile-first** - Design responsivo
✅ **Acessibilidade** - ARIA labels e estrutura para leitores de tela
✅ **Performance** - Vite otimizado e lazy loading
✅ **Modularização** - Código organizado e escalável
✅ **Hooks React** - useState para gerenciamento de estado

## 🔄 Navegação SPA

Desenvolvido como uma Single Page Application (SPA) com navegação suave via âncoras HTML e scroll behavior.

## 📝 Adições Futuras

- [ ] React Router para múltiplas páginas
- [ ] Formulário de contato funcional
- [ ] Transições e animações avançadas
- [ ] Dark mode
- [ ] Integração com back-end
- [ ] Testes automatizados (Vitest)
- [ ] Storybook para documentação de componentes

## 📄 Licença

Este projeto é fornecido como está para fins de portfólio pessoal.

## 👤 Autor

**Talita Lima de Andrade**
- LinkedIn: [linkedin.com/in/talita-lima-de-andrade](https://www.linkedin.com/in/talita-lima-de-andrade-6218151a7/)
- GitHub: [github.com/THalita-Lima](https://github.com/THalita-Lima)
- WhatsApp: [wa.me/+5511913193732](https://wa.me/+5511913193732)

---

Desenvolvido com ❤️ usando React.js
