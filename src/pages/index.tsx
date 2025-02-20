import Image from 'next/image';

import { Card } from '../components/Card';
import { Head } from '../components/Head';

import styles from './home.module.scss';

export default function Home() {
  return (
    <>
      <Head title='Cleyson Diego' />
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
              title='LinkedIn'
              description='Veja minha tragetória profissional'
              link='https://www.linkedin.com/in/cleysondiego/'
            />

            <Card
              title='Github'
              description='Conheça meus projetos e habilidades técnicas'
              link='https://www.github.com/cleysondiego'
            />

            <Card
              title='Medium'
              description='Acompanhe os textos que publiquei sobre tecnologia'
              link='https://medium.com/@cleysondiego'
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
