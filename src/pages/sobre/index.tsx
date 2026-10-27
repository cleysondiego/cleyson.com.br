import Image from 'next/image';

import { Head } from '../../components/Head';
import { Layout } from '../../components/Layout';
import { profile, projects } from '../../lib/site';

import styles from './styles.module.scss';

export default function About() {
  return (
    <Layout>
      <Head title={`Sobre | ${profile.name}`} />

      <header className={styles.header}>
        <Image
          src="/images/profile.jpeg"
          alt={`Foto de ${profile.name}`}
          width={96}
          height={96}
          className={styles.photo}
          priority
        />
        <h1>Sobre</h1>
      </header>

      <div className={styles.content}>
        <p>
          Sou {profile.name}, {profile.role} na {profile.company}. Sou apaixonado por mobile,
          resolver problemas e criar produtos incríveis.
        </p>
        <p>
          Neste site eu escrevo sobre desenvolvimento Android, Kotlin e carreira. Minha trajetória
          profissional completa está no{' '}
          <a href={profile.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>, e meu
          código no <a href={profile.github} target="_blank" rel="noopener noreferrer">GitHub</a>.
        </p>

        {projects.length > 0 && (
          <>
            <h2 id="projetos">Projetos open source</h2>
            {projects.map((project) => (
              <p key={project.name}>
                <a href={project.url} target="_blank" rel="noopener noreferrer">{project.name}</a>
                {': '}
                {project.description}
              </p>
            ))}
          </>
        )}
      </div>
    </Layout>
  );
}
