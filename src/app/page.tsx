import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.heroText}>
        I'M JAEMIN. <br /> I DEVELOP
        <br /> WEB <br />
        APPLICATIONS.
      </div>
      <a
        href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
        className={styles.card}
        target="_blank"
        rel="noopener noreferrer"
      >
        <h2>
          About<span>-&gt;</span>
        </h2>
        <p>안녕하세요. 저는 </p>
        프론트엔드 웹 개발자입니다.
        <br />
        현업에서는 React, Typescript를 주로 사용합니다. <br /> 개발 관련 공부를
        좋아합니다. Email: jmkim326@gmail.com
      </a>
      <a
        href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
        className={styles.card}
        target="_blank"
        rel="noopener noreferrer"
      >
        <h2>
          Portfolio <span>-&gt;</span>
        </h2>
        <p>Learn about Next.js in an interactive course with&nbsp;quizzes!</p>
      </a>
      <a
        href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
        className={styles.card}
        target="_blank"
        rel="noopener noreferrer"
      >
        <h2>
          Blog <span>-&gt;</span>
        </h2>
        <p>Explore the Next.js 13 playground.</p>
      </a>
      Top
    </main>
  );
}
