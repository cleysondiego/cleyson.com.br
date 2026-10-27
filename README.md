# Website Pessoal

Site pessoal e blog. O projeto é um site estático com blog, onde o conteúdo é escrito em Markdown e renderizado com geração estática (SSG).

Disponível em: [cleyson.com.br](https://cleyson.com.br)

## Funcionalidades

- Página inicial com bio, posts recentes e projetos open source
- Página Sobre com o contexto de cada projeto
- Blog com posts em Markdown, ordenados por data, com capa e tempo de leitura
- Página de post com conteúdo renderizado a partir de arquivos `.md`
- Página de privacidade
- Tema claro e escuro (segue o sistema, com botão para alternar)
- Design responsivo com SCSS Modules e fontes Archivo e JetBrains Mono
- Geração estática (Static Site Generation) para melhor performance e SEO

## Stack

- [Next.js](https://nextjs.org/) (Pages Router) + [React](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Sass](https://sass-lang.com/) (SCSS Modules)
- [gray-matter](https://github.com/jonschlinkert/gray-matter) para parse do frontmatter
- [remark](https://github.com/remarkjs/remark) + [remark-html](https://github.com/remarkjs/remark-html) para renderização do Markdown
- [Yarn](https://yarnpkg.com/) 4 como gerenciador de pacotes

## Requisitos

- Node.js 18.18+ (ou versão suportada pela sua versão do Next.js)
- Yarn 4 (habilite com `corepack enable`)

## Como rodar localmente

```bash
# 1. Instale as dependências
yarn install

# 2. Rode o servidor de desenvolvimento
yarn dev
```

Acesse [http://localhost:3000](http://localhost:3000).

Para gerar a versão de produção:

```bash
yarn build
yarn start
```

## Estrutura do projeto

```
├── content/
│   └── posts/          # Posts do blog em Markdown
├── public/
│   ├── images/         # Imagens estáticas (perfil, etc.)
│   └── *.png|ico|webmanifest  # Favicons e manifest
└── src/
    ├── components/     # Componentes reutilizáveis (Layout, Head, PostList, ProjectList, ThemeToggle)
    ├── lib/            # Leitura dos posts, formatDate e dados do perfil e projetos (site.ts)
    ├── pages/          # Páginas (home, blog, sobre, privacy)
    └── styles/         # Estilos globais
```

## Escrevendo um post

Para publicar um novo post no blog, crie um arquivo `.md` em `content/posts/`. O nome do arquivo define a URL do post (slug).

O arquivo deve ter frontmatter com os seguintes campos:

```markdown
---
title: 'Título do post'
excerpt: 'Resumo exibido na listagem do blog.'
date: '2024-01-01'
author: 'Cleyson Diego'
cover: '/images/posts/meu-post.png' # opcional
---

Conteúdo do post em **Markdown**.
```

A capa (`cover`) é opcional, mas recomendada: salve a imagem em `public/images/posts/` (proporção 16:9). Sem ela, a listagem mostra uma capa gerada com o título do post.

## Editando perfil e projetos

O cargo, os links e a lista de projetos open source ficam em `src/lib/site.ts`. Se a lista de projetos estiver vazia, a seção some da home e da página Sobre.

## Licença

Todos os direitos reservados. O conteúdo do blog são de propriedade de Cleyson Diego. O código pode ser utilizado livremente.
