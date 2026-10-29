export const profile = {
  name: 'Cleyson Diego',
  role: 'Senior Android Developer',
  company: 'BEES (AB InBev)',
  linkedin: 'https://www.linkedin.com/in/cleysondiego/',
  github: 'https://github.com/cleysondiego',
};

export interface Project {
  name: string;
  url: string;
  tags: string;
  summary: string;
  description: string;
}

// Projetos open source exibidos na home e na página Sobre.
export const projects: Project[] = [
  {
    name: 'TimeTracker',
    url: 'https://github.com/cleysondiego/TimeTracker',
    tags: 'Kotlin · SDK',
    summary: 'SDK para medir o tempo de execução de trechos de código no Android.',
    description:
      'SDK em Kotlin para medir quanto tempo um trecho de código leva para rodar em apps Android. Cada medição recebe um rótulo, o rastreamento pode ser ligado e desligado globalmente e a saída do log é personalizável. Está disponível via JitPack.',
  },
  {
    name: 'URLShortener',
    url: 'https://github.com/cleysondiego/URLShortener',
    tags: 'Kotlin · Compose',
    summary: 'App Android para encurtar URLs com Compose, MVVM e Hilt.',
    description:
      'App Android que encurta URLs. A interface é feita em Jetpack Compose, e o projeto segue Clean Architecture com MVVM, StateFlow, Retrofit e injeção de dependência com Hilt.',
  },
  {
    name: 'LoginAndAuthenticatedArea',
    url: 'https://github.com/cleysondiego/LoginAndAuthenticatedArea',
    tags: 'Kotlin · Compose',
    summary: 'Exemplo de login, cadastro e área autenticada em Compose.',
    description:
      'Projeto de exemplo com telas de login e cadastro e uma área autenticada com navegação inferior, construído com Jetpack Compose e Navigation.',
  },
];
