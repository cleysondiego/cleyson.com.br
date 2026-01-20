import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Link from 'next/link';
import { GetStaticProps } from 'next';

import { Head } from '../../components/Head';
import { formatDate, PostMeta } from '../../lib/posts';

import styles from './styles.module.scss';

interface BlogPageProps {
  posts: PostMeta[];
}

export default function Blog({ posts }: BlogPageProps) {
  return (
    <>
      <Head title="Blog | Cleyson Diego" />
      <div className={styles.container}>
        <header className={styles.header}>
          <Link href="/" className={styles.backLink}>
            ← Voltar
          </Link>
          <h1>Blog</h1>
          <p>Compartilhando conhecimento e experiências sobre desenvolvimento de software.</p>
        </header>

        <main className={styles.postList}>
          {posts.length === 0 ? (
            <p className={styles.empty}>Nenhum post publicado ainda.</p>
          ) : (
            posts.map((post) => (
              <article key={post.slug} className={styles.postCard}>
                <Link href={`/blog/${post.slug}`}>
                  <h2>{post.title}</h2>
                  <p className={styles.excerpt}>{post.excerpt}</p>
                  <div className={styles.meta}>
                    <span className={styles.date}>{formatDate(post.date)}</span>
                    <span className={styles.author}>por {post.author}</span>
                  </div>
                </Link>
              </article>
            ))
          )}
        </main>

        <footer className={styles.footer}>
          Cleyson Diego • Todos os direitos reservados
        </footer>
      </div>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const postsDirectory = path.join(process.cwd(), 'content/posts');
  
  // Check if directory exists
  if (!fs.existsSync(postsDirectory)) {
    return {
      props: {
        posts: [],
      },
    };
  }

  const fileNames = fs.readdirSync(postsDirectory);
  
  const posts: PostMeta[] = fileNames
    .filter((fileName) => fileName.endsWith('.md'))
    .map((fileName) => {
      const slug = fileName.replace(/\.md$/, '');
      const fullPath = path.join(postsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, 'utf8');
      const { data } = matter(fileContents);

      return {
        slug,
        title: data.title || slug,
        excerpt: data.excerpt || '',
        date: data.date || '',
        author: data.author || '',
      };
    });

  // Sort posts by date in descending order
  posts.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });

  return {
    props: {
      posts,
    },
  };
};
