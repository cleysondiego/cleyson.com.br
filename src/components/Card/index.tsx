import Link from 'next/link';

import styles from './styles.module.scss';

interface CardProps {
  link: string;
  title: string;
  description: string;
  isInternal?: boolean;
}

export function Card({ link, title, description, isInternal = false }: CardProps) {
  return (
    <Link 
      href={link} 
      target={isInternal ? undefined : "_blank"}
      rel={isInternal ? undefined : "noopener noreferrer"}
      className={styles.card}
    >
      <h2>{title}</h2>
      <p>{description}</p>
    </Link>
  );
}