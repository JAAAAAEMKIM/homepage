import Link from 'next/link';
import styles from './page.module.css';

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.heroText}>
        {`I'M JAEMIN.`} <br /> I DEVELOP
        <br /> WEB <br />
        APPLICATIONS.
      </div>
      <div className={styles.contents}>
        <a
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
          href="https://blue-tang.tistory.com/"
        >
          <h2>
            Blog <span>-&gt;</span>
          </h2>
          <p>Tistory 블로그</p>
          <ul>
            <li className={styles.card}>Post 1</li>
            <li className={styles.card}>Post 2</li>
            <li className={styles.card}>Post 3</li>
          </ul>
        </a>
        <Link className={styles.card} href="/portfolio">
          <h2>
            Portfolio <span>-&gt;</span>
          </h2>
          <p>소개, 토이프로젝트 등</p>
          <ul>
            <li className={styles.card}>Project 1</li>
            <li className={styles.card}>Project 2</li>
            <li className={styles.card}>Project 3</li>
          </ul>
        </Link>
      </div>
      Top
    </main>
  );
}
