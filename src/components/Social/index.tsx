import { HiMail } from "react-icons/hi";
import { SiGithub, SiLinkedin } from "react-icons/si";

import styles from './styles.module.scss';

export function Social() {
  return (
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
  );
}