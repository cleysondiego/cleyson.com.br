// Types for posts
export interface PostMeta {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  author: string;
}

export interface Post extends PostMeta {
  content: string;
}

export function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString('pt-BR', {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
  });
}
