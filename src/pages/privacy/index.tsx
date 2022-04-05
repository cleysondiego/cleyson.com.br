import Head from "next/head";

import styles from './styles.module.scss';

export default function Privacy() {
  return (
    <>
      <Head>
        <title>Privacy | Cleyson Diego</title>
      </Head>

      <main className={styles.container}>
        <article className={styles.post}>
          <h1>Privacy</h1>
          <time>15 de abril de 2022</time>

          <div className={styles.content}>

          </div>
        </article>
      </main>
    </>
  )
}