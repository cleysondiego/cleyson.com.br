import Image from 'next/image';
import Link from 'next/link';

import { formatDate, PostMeta } from '../../lib/posts';

import styles from './styles.module.scss';

interface PostListProps {
  posts: PostMeta[];
}

export function PostList({ posts }: PostListProps) {
  if (posts.length === 0) {
    return <p className={styles.empty}>Nenhum post publicado ainda.</p>;
  }

  return (
    <ul className={styles.list}>
      {posts.map((post) => (
        <li key={post.slug}>
          <Link href={`/blog/${post.slug}`} className={styles.item}>
            <div className={styles.cover}>
              {post.cover ? (
                <Image src={post.cover} alt="" fill sizes="(max-width: 600px) 112px, 200px" />
              ) : (
                // Capa gerada para posts sem imagem própria
                <span className={styles.placeholder} aria-hidden="true">
                  <span>{post.title}</span>
                </span>
              )}
            </div>
            <div className={styles.text}>
              <h3>{post.title}</h3>
              <span className={styles.meta}>
                {formatDate(post.date)} · {post.readingTime} min de leitura
              </span>
              {post.excerpt && <p className={styles.excerpt}>{post.excerpt}</p>}
            </div>
          </Link>
        </li>
      ))}
    </ul>
  );
}
