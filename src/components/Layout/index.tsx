import Link from 'next/link';
import { ReactNode } from 'react';

import { profile } from '../../lib/site';
import { ThemeToggle } from '../ThemeToggle';

import styles from './styles.module.scss';

interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <Link href="/" className={styles.brand}>
          {profile.name}
        </Link>
        <nav className={styles.nav}>
          <Link href="/blog">Blog</Link>
          <Link href="/sobre">Sobre</Link>
          <ThemeToggle />
        </nav>
      </header>

      <main className={styles.main}>{children}</main>

      <footer className={styles.footer}>
        <span>© {new Date().getFullYear()} {profile.name}</span>
        <span className={styles.footerLinks}>
          <a href={profile.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href={profile.github} target="_blank" rel="noopener noreferrer">GitHub</a>
          <Link href="/privacy">Privacidade</Link>
        </span>
      </footer>
    </div>
  );
}
