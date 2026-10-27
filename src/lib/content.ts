import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

import { Post, PostMeta } from './posts';

const postsDirectory = path.join(process.cwd(), 'content/posts');

const WORDS_PER_MINUTE = 200;

function readingTime(content: string): number {
  const words = content.trim().split(/\s+/).length;
  return Math.max(1, Math.ceil(words / WORDS_PER_MINUTE));
}

function readPost(slug: string) {
  const fullPath = path.join(postsDirectory, `${slug}.md`);
  const { data, content } = matter(fs.readFileSync(fullPath, 'utf8'));

  const meta: PostMeta = {
    slug,
    title: data.title || slug,
    excerpt: data.excerpt || '',
    date: data.date || '',
    author: data.author || '',
    cover: data.cover || null,
    readingTime: readingTime(content),
  };

  return { meta, content };
}

export function getPostSlugs(): string[] {
  if (!fs.existsSync(postsDirectory)) {
    return [];
  }

  return fs
    .readdirSync(postsDirectory)
    .filter((fileName) => fileName.endsWith('.md'))
    .map((fileName) => fileName.replace(/\.md$/, ''));
}

// Posts sorted by date in descending order
export function getAllPosts(): PostMeta[] {
  return getPostSlugs()
    .map((slug) => readPost(slug).meta)
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}

export async function getPost(slug: string): Promise<Post | null> {
  if (!getPostSlugs().includes(slug)) {
    return null;
  }

  const { meta, content } = readPost(slug);
  const processedContent = await remark().use(html, { sanitize: false }).process(content);

  return { ...meta, content: processedContent.toString() };
}
