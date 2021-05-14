import Link from "next/link";

import { ActiveLink } from '../ActiveLink';
import { Social } from '../Social';
import styles from './styles.module.scss';

export function Header() {
  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <Link href="/">
          <a>
            <p className={styles.logo}>
              Cleyson Diego
            </p>
          </a>
        </Link>
        <nav>
          <ActiveLink activeClassName={styles.active} href="/">
            <a>Home</a>
          </ActiveLink>
          <ActiveLink activeClassName={styles.active} href="/posts">
            <a>Posts</a>
          </ActiveLink>
        </nav>

        <Social />
      </div>
    </header>
  );
}