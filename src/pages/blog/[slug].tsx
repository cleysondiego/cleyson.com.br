import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';
import Link from 'next/link';
import { GetStaticPaths, GetStaticProps } from 'next';

import { Head } from '../../components/Head';
import { formatDate, Post } from '../../lib/posts';

import styles from './post.module.scss';

interface PostPageProps {
  post: Post;
}

export default function PostPage({ post }: PostPageProps) {
  return (
    <>
      <Head title={`${post.title} | Cleyson Diego`} />
      <div className={styles.container}>
        <header className={styles.header}>
          <Link href="/blog" className={styles.backLink}>
            ← Voltar para o Blog
          </Link>
        </header>

        <article className={styles.article}>
          <header className={styles.articleHeader}>
            <h1>{post.title}</h1>
            <div className={styles.meta}>
              <span className={styles.date}>{formatDate(post.date)}</span>
              <span className={styles.author}>por {post.author}</span>
            </div>
          </header>

          <div 
            className={styles.content}
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </article>

        <footer className={styles.footer}>
          Cleyson Diego • Todos os direitos reservados
        </footer>
      </div>
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const postsDirectory = path.join(process.cwd(), 'content/posts');
  
  if (!fs.existsSync(postsDirectory)) {
    return {
      paths: [],
      fallback: false,
    };
  }

  const fileNames = fs.readdirSync(postsDirectory);
  
  const slugs = fileNames
    .filter((fileName) => fileName.endsWith('.md'))
    .map((fileName) => fileName.replace(/\.md$/, ''));

  return {
    paths: slugs.map((slug) => ({
      params: { slug },
    })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const slug = params?.slug as string;
  const postsDirectory = path.join(process.cwd(), 'content/posts');
  const fullPath = path.join(postsDirectory, `${slug}.md`);
  
  if (!fs.existsSync(fullPath)) {
    return {
      notFound: true,
    };
  }

  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);

  // Convert markdown to HTML
  const processedContent = await remark()
    .use(html, { sanitize: false })
    .process(content);
  
  const contentHtml = processedContent.toString();

  const post: Post = {
    slug,
    title: data.title || slug,
    excerpt: data.excerpt || '',
    date: data.date || '',
    author: data.author || '',
    content: contentHtml,
  };

  return {
    props: {
      post,
    },
  };
};
