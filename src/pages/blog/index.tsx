import Head from 'next/head';
import Link from 'next/link';
import { GetStaticProps } from 'next';
import { getSortedPostsData, PostData } from '../../lib/posts';
import styles from './blog.module.scss';

export default function Blog({ allPostsData }: { allPostsData: PostData[] }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Blog</title>
      </Head>
      <main>
        <h1>Blog</h1>
        <ul className={styles.list}>
          {allPostsData.map(({ id, date, title, description }) => (
            <li className={styles.listItem} key={id}>
              <Link href={`/blog/${id}`} className={styles.titleLink}>
                {title}
              </Link>
              <br />
              <small className={styles.lightText}>
                {date}
              </small>
               {description && <p className={styles.description}>{description}</p>}
            </li>
          ))}
        </ul>
        <div className={styles.backToHome}>
            <Link href="/">
              ← Back to home
            </Link>
        </div>
      </main>
    </div>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
};
