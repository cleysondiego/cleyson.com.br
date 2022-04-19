import Link from 'next/link';

import styles from './styles.module.scss';

interface CardProps {
  link: string;
  title: string;
  description: string;
}

export function Card({ link, title, description }: CardProps) {
  return (
    <Link href={link}>
      <a target="_blank" className={styles.card}>
        <h2>{title}</h2>
        <p>{description}</p>
      </a>
    </Link>
  );
}