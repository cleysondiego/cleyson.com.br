import { Project } from '../../lib/site';

import styles from './styles.module.scss';

interface ProjectListProps {
  projects: Project[];
}

export function ProjectList({ projects }: ProjectListProps) {
  return (
    <ul className={styles.list}>
      {projects.map((project) => (
        <li key={project.name}>
          <a href={project.url} target="_blank" rel="noopener noreferrer" className={styles.row}>
            <span className={styles.name}>
              {project.name}
              <span className={styles.summary}>{project.summary}</span>
            </span>
            <span className={styles.tags}>{project.tags}</span>
          </a>
        </li>
      ))}
    </ul>
  );
}
