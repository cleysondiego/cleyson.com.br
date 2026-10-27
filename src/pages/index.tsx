import Image from 'next/image';
import Link from 'next/link';
import { GetStaticProps } from 'next';

import { Head } from '../components/Head';
import { Layout } from '../components/Layout';
import { PostList } from '../components/PostList';
import { ProjectList } from '../components/ProjectList';
import { getAllPosts } from '../lib/content';
import { PostMeta } from '../lib/posts';
import { profile, projects } from '../lib/site';

import styles from './home.module.scss';

const RECENT_POSTS = 5;

interface HomeProps {
  posts: PostMeta[];
  hasMorePosts: boolean;
}

export default function Home({ posts, hasMorePosts }: HomeProps) {
  return (
    <Layout>
      <Head title={`${profile.name} | ${profile.role}`} />

      <section className={styles.intro}>
        <Image
          src="/images/profile.jpeg"
          alt={`Foto de ${profile.name}`}
          width={72}
          height={72}
          className={styles.photo}
          priority
        />
        <p>
          Oi, eu sou {profile.name}. Sou {profile.role} na {profile.company}, apaixonado por mobile,
          resolver problemas e criar produtos incríveis.
        </p>
        <p>
          Aqui eu escrevo sobre desenvolvimento Android, Kotlin e carreira. Você também me encontra
          no <a href={profile.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a> e
          no <a href={profile.github} target="_blank" rel="noopener noreferrer">GitHub</a>.
        </p>
      </section>

      <section className={styles.section}>
        <h2 className={styles.label}>Posts</h2>
        <PostList posts={posts} />
        {hasMorePosts && (
          <Link href="/blog" className={styles.more}>
            Todos os posts →
          </Link>
        )}
      </section>

      {projects.length > 0 && (
        <section className={styles.section}>
          <h2 className={styles.label}>Projetos open source</h2>
          <ProjectList projects={projects} />
          <Link href="/sobre#projetos" className={styles.more}>
            Mais sobre cada projeto →
          </Link>
        </section>
      )}
    </Layout>
  );
}

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  const allPosts = getAllPosts();

  return {
    props: {
      posts: allPosts.slice(0, RECENT_POSTS),
      hasMorePosts: allPosts.length > RECENT_POSTS,
    },
  };
};
