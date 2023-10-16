import Link from 'next/link';
import styles from './page.module.css';
import SkillSet from '@/components/skill-set/SkillSet';

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.heroText}>
        {`I'M JAEMIN.`} <br /> I DEVELOP
        <br /> WEB <br />
        APPLICATIONS.
      </div>
      <div className={styles.contents}>
        <h1>ABOUT</h1>
        <h2>Timeline</h2>
        <span className={styles.verticalLine} />
        <ul className={styles.timeline}>
          <li>2017 말 - python으로 프로그래밍 언어 독학 시작</li>
          <li>2018 - 컴퓨터학과 전공 시작</li>
          <li>2020</li>
          <li>- 겨울방학 개발 인턴</li>
          <li>- 졸업</li>
          <li>- 프로그래머스 인턴 매칭 (2020 여름방학)</li>
          <li> - 인어교주해적단 인턴 합격</li>
          <li> - 정규직 전환</li>
          <li>2021</li>
          <li>- NHN 2021 공채 합격</li>
          <li>- NHN 루키 교육 후 NHN Dooray 입사`</li>
        </ul>
        <SkillSet />
        <Link className={styles.card} href="/portfolio">
          <h1>
            Projects <span>-&gt;</span>
          </h1>
          <p>토이프로젝트 등</p>
          <ul>
            <li className={styles.card}>
              기순 AI 깃헙: 소개 - 리그오브레전드 게임에서 내전 시 밸런스 맞는
              팀을 짜기 위한 디스코드 봇
            </li>
            <li className={styles.card}>
              Talk with gpt 익스텐션 깃헙: 소개 - 말하기 공부에 활용하기 위해
              만들어본 Extension - 스토어 등록까지 진행해봤음.
            </li>
            <li className={styles.card}>
              Todolist 깃헙: 소개 - Loopback BE 서버에 vue3로 만든 연습용
              프로젝트 `
            </li>
          </ul>
          <ul>
            ~2020
            <li>OAZ Homepage</li>
            <li className={styles.card}>
              MadCamp (보여주지 않음) (2020) 깃헙: 소개 - 몰입캠프 프로젝트들 -
              Catchmind client - CS 공부 외에 프로덕트 개발을 처음 접함 `
            </li>
          </ul>
        </Link>
        <a
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
          href="https://blue-tang.tistory.com/"
        >
          <h1>
            Blog <span>-&gt;</span>
          </h1>
          <p>Tistory 블로그</p>
          <ul>
            <li className={styles.card}>Post 1</li>
            <li className={styles.card}>Post 2</li>
            <li className={styles.card}>Post 3</li>
          </ul>
        </a>
      </div>
      Thank you for visiting me. If you want to contact, please send me an email
      here: jmkim326@gmail.com Top
    </main>
  );
}
