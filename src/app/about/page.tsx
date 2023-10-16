const AboutPage = () => {
  return (
    <div>
      About
      <a
        href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
        className={styles.card}
        target="_blank"
        rel="noopener noreferrer"
      >
        <h1>
          About<span>-&gt;</span>
        </h1>
        <p>안녕하세요. 저는 </p>
        프론트엔드 웹 개발자입니다.
        <br />
        현업에서는 React, Typescript를 주로 사용합니다. <br /> 개발 관련 공부를
        좋아합니다. Email: jmkim326@gmail.com
        <h1>Skills</h1>
        React, Typescript, Nextjs, Vue 2<h2>Interests</h2>
        Frontend Frameworks - Svelte, Vue 3, Remix Language Trends - Rust
        <h2>Activities</h2>
      </a>
      <a className={styles.card} target="_blank" rel="noopener noreferre">
        <h2>Welcome </h2>
        <p>Welcome to my homepage. Have a good day and make good codes. </p>
        asdfs
      </a>
    </div>
  );
};
export default AboutPage;
