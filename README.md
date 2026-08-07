# Website Pessoal

Site pessoal e blog. O projeto é um site estático com blog, onde o conteúdo é escrito em Markdown e renderizado com geração estática (SSG).

Disponível em: [cleyson.com.br](https://cleyson.com.br)

## Funcionalidades

- Página inicial com perfil e links para Blog, LinkedIn e GitHub
- Blog com posts em Markdown, ordenados por data
- Página de post com conteúdo renderizado a partir de arquivos `.md`
- Página de privacidade
- Design responsivo com SCSS Modules
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
    ├── components/     # Componentes reutilizáveis (Card, Head)
    ├── lib/            # Utilitários (parse de posts, formatDate)
    ├── pages/          # Páginas (home, blog, privacy)
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
---

Conteúdo do post em **Markdown**.
```

## Licença

Todos os direitos reservados. O conteúdo do blog são de propriedade de Cleyson Diego. O código pode ser utilizado livremente.
