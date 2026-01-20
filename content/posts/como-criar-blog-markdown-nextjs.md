---
title: 'Como criar um blog com Markdown no Next.js'
excerpt: 'Aprenda a criar um blog simples e eficiente usando arquivos Markdown no Next.js, perfeito para hospedar no GitHub.'
date: '2026-01-20'
author: 'Cleyson Diego'
---

# Como criar um blog com Markdown no Next.js

Neste post, vou explicar como configurei este blog usando arquivos Markdown e Next.js.

## Por que Markdown?

Markdown é uma linguagem de marcação leve que oferece várias vantagens:

- **Simplicidade**: Fácil de escrever e ler
- **Versionável**: Funciona perfeitamente com Git
- **Portável**: Pode ser usado em qualquer plataforma
- **Sem banco de dados**: Não precisa de infraestrutura complexa

## Estrutura do projeto

A estrutura básica do projeto é:

```
/content
  /posts
    meu-primeiro-post.md
    outro-post.md
/src
  /lib
    posts.ts
  /pages
    /blog
      index.tsx
      [slug].tsx
```

## Bibliotecas utilizadas

Para processar os arquivos Markdown, utilizamos:

- **gray-matter**: Para extrair o frontmatter (metadados) do arquivo
- **remark**: Para processar o conteúdo Markdown
- **remark-html**: Para converter Markdown em HTML

## Como funciona

1. Os posts são escritos em Markdown na pasta `/content/posts`
2. O frontmatter define metadados como título, data e descrição
3. O Next.js lê esses arquivos em tempo de build
4. O conteúdo é convertido para HTML e renderizado na página

## Vantagens dessa abordagem

- **Gratuito**: Hospede no GitHub Pages ou Vercel
- **Rápido**: Páginas estáticas são super rápidas
- **SEO friendly**: Conteúdo é renderizado no servidor
- **Fácil manutenção**: Edite os arquivos diretamente no GitHub

## Conclusão

Esta é uma solução simples e eficiente para quem quer começar um blog sem complicações. Todo o conteúdo fica versionado no Git e você tem controle total sobre ele.

Espero que este post tenha sido útil! 📝
