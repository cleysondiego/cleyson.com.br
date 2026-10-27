import { GetStaticProps } from 'next';

import { Head } from '../../components/Head';
import { Layout } from '../../components/Layout';
import { PostList } from '../../components/PostList';
import { getAllPosts } from '../../lib/content';
import { PostMeta } from '../../lib/posts';

import styles from './styles.module.scss';

interface BlogPageProps {
  posts: PostMeta[];
}

export default function Blog({ posts }: BlogPageProps) {
  return (
    <Layout>
      <Head title="Blog | Cleyson Diego" />

      <header className={styles.header}>
        <h1>Blog</h1>
        <p>Posts sobre desenvolvimento Android, Kotlin e carreira.</p>
      </header>

      <PostList posts={posts} />
    </Layout>
  );
}

export const getStaticProps: GetStaticProps<BlogPageProps> = async () => {
  return {
    props: {
      posts: getAllPosts(),
    },
  };
};
