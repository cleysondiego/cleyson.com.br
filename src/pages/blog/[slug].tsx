import Image from 'next/image';
import Link from 'next/link';
import { GetStaticPaths, GetStaticProps } from 'next';

import { Head } from '../../components/Head';
import { Layout } from '../../components/Layout';
import { getPost, getPostSlugs } from '../../lib/content';
import { formatDate, Post } from '../../lib/posts';

import styles from './post.module.scss';

interface PostPageProps {
  post: Post;
}

export default function PostPage({ post }: PostPageProps) {
  return (
    <Layout>
      <Head title={`${post.title} | Cleyson Diego`} description={post.excerpt || undefined} image={post.cover} />

      <article className={styles.article}>
        <header className={styles.articleHeader}>
          <Link href="/blog" className={styles.backLink}>
            ← Blog
          </Link>
          <h1>{post.title}</h1>
          <span className={styles.meta}>
            {formatDate(post.date)} · {post.readingTime} min de leitura
          </span>
        </header>

        {post.cover && (
          <div className={styles.cover}>
            <Image src={post.cover} alt="" fill sizes="(max-width: 800px) 100vw, 720px" priority />
          </div>
        )}

        <div
          className={styles.content}
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </article>
    </Layout>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: getPostSlugs().map((slug) => ({
      params: { slug },
    })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<PostPageProps> = async ({ params }) => {
  const post = await getPost(params?.slug as string);

  if (!post) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      post,
    },
  };
};
