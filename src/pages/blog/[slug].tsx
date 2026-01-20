import Head from 'next/head';
import Link from 'next/link';
import { GetStaticProps, GetStaticPaths } from 'next';
import { getAllPostIds, getPostData, PostData } from '../../lib/posts';
import styles from './blog.module.scss'; // Reusing for container/back button
import contentStyles from './post.module.scss';

export default function Post({ postData }: { postData: PostData }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <article>
        <h1 className={styles.headingXl}>{postData.title}</h1>
        <div className={styles.lightText}>
          {postData.date}
        </div>
        <div 
            className={contentStyles.markdownContent}
            dangerouslySetInnerHTML={{ __html: postData.contentHtml || '' }} 
        />
      </article>
      <div className={styles.backToHome}>
        <Link href="/blog">
          ← Back to blog
        </Link>
      </div>
    </div>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const postData = await getPostData(params?.slug as string);
  return {
    props: {
      postData,
    },
  };
};
