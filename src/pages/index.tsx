import Image from 'next/image';

import { Card } from '../components/Card';
import { Head } from '../components/Head';

import styles from './home.module.scss';

export default function Home() {
  return (
    <>
      <Head title='Cleyson Diego | Desenvolvedor Mobile' />
      <div className={styles.container}>
        <main className={styles.contentContainer}>
          <Image
            src='/images/profile.jpeg'
            alt='Picture of Cleyson'
            width={200}
            height={200}
          />

          <h1>Cleyson Diego</h1>

          <p>
            Desenvolvedor de Software apaixonado por Mobile, resolver problemas e criar produtos incríveis.
          </p>

          <div>
            <Card
              title='Blog'
              description='Leia meus posts sobre desenvolvimento de software'
              link='/blog'
              isInternal
            />

            <Card
              title='LinkedIn'
              description='Veja minha tragetória profissional'
              link='https://www.linkedin.com/in/cleysondiego/'
            />

            <Card
              title='Github'
              description='Conheça meus projetos e habilidades técnicas'
              link='https://www.github.com/cleysondiego'
            />
          </div>
        </main>

        <footer className={styles.footer}>
          Cleyson Diego • Todos os direitos reservados
        </footer>
      </div>
    </>
  )
}
