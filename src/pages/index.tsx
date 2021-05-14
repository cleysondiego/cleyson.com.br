import Head from 'next/head';

import { SiGithub, SiLinkedin } from 'react-icons/si';
import { HiMail } from 'react-icons/hi';

import styles from './home.module.scss';

export default function Home() {
  return (
    <>
      <Head>
          <title>Home | Cleyson Diego</title>
      </Head>

      <main className={styles.contentContainer}>
        <section className={styles.hero}>
          <span>👋🏻 Hey, bem-vindo</span>
          <h1>Me chamo <span>Cleyson Diego</span>.</h1>

          <p>
            Sou desenvolvedor mobile e aqui<br />
            tratarei de assuntos como: <span>tecnologia</span>,<br />
            <span>desenvolvimento de software</span> e <span>aplicativos</span>.
          </p>
        </section>

        <img src="/images/avatar.svg" alt="Working" />
      </main>
    </>
  )
}
