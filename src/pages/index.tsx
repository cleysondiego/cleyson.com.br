import Head from 'next/head';

import { SiGithub, SiLinkedin } from 'react-icons/si';
import { HiMail } from 'react-icons/hi';

import styles from './home.module.scss';

export default function Home() {
  return (
    <>
      <Head>
          <title>Em breve! | Cleyson Diego</title>
      </Head>
      <div className={styles.contentContainer}>
        <h1 className={styles.title}>Em breve!</h1>
        <div className={styles.icons}>
          <a href="mailto:cleyson7@hotmail.com">
            <HiMail />
          </a>

          <a href="https://github.com/cleysondiego" target="_blank" rel="noreferrer noopener">
            <SiGithub />
          </a>

          <a href="https://www.linkedin.com/in/cleysondiego/" target="_blank" rel="noreferrer noopener">
            <SiLinkedin />
          </a>
        </div>
      </div>
    </>
  )
}
