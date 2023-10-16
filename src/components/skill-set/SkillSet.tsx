import SkillSetCard from './SkillSetCard';
import styles from './SkillSet.module.css';
import Image from 'next/image';

const SkillSet = () => {
  return (
    <div>
      <h2>Skills</h2>
      <div className={styles.grid}>
        <SkillSetCard
          logo={
            <Image
              src="react.svg"
              width="48"
              height="48"
              alt="https://www.react.org"
            />
          }
          tags={<div>Main Skill</div>}
          title="React"
        >
          <ul>
            <li>다양한 상태 관리 시스템 사용 경험</li>
            <li>
              <li>- Redux, Redux Toolkit, Redux Saga</li>
              <li>- Tanstack Query</li>
              <li>- Jotai</li>
            </li>
            <br />
            <li>성능 개선 경험</li>
            <li>- FID NN% 개선</li>
          </ul>
        </SkillSetCard>
        <SkillSetCard
          logo={
            <Image
              src="typescript.svg"
              width="48"
              height="48"
              alt="https://typescriptlang.org"
            />
          }
          tags={<div>Main Skill</div>}
          title="TypeScript"
          subtitle="/ JavaScript"
        >
          <ul>
            <li>- 주로 React와 함께 타입스크립트 사용.</li>
            <br />
            <li>
              - 레거시 버전(vue2, angular js) 개발 및 유지보수에서 ES5
              자바스크립트 사용.
            </li>
          </ul>
        </SkillSetCard>
        <SkillSetCard
          logo={<Image src="" width="32" height="32" alt="logo" />}
          title="Testing"
        >
          <ul>
            <strong>단위 테스트</strong>
            <li>- Jest, React Testing Library</li>
            <br />
            <strong>UI 테스트</strong>
            <li>- Storybook</li>
            <br />
            <strong>e2e 테스트</strong>
            <li>- Cypress</li>
          </ul>
        </SkillSetCard>
        <SkillSetCard
          logo={<Image src="" width="32" height="32" alt="logo" />}
          title="CSS"
        >
          <ul>
            <li>- CSS-in-JS: Emotion</li>
            <br />
            <li>- SCSS</li>
          </ul>
        </SkillSetCard>
        <SkillSetCard
          logo={<Image src="" width="32" height="32" alt="logo" />}
          title="Etc."
        >
          <ul>
            <li>VueJS (v2) with vuex, Vue class component</li>
            <li> AngularJS</li>
            <li>NextJS</li>
          </ul>
        </SkillSetCard>
      </div>
    </div>
  );
};

export default SkillSet;

{
  /* <h2>Skills</h2>
        <h3>현업에서 사용한 FE 스택</h3>* React * Typescript * NextJS 상태관리
        {`
        
        - *React
          - 상태 관리
            - React Query
            - Redux, Redux Toolkit, Redux Saga
            - Jotai
        - *Typescript
        - CSS-in-JS (emotion)
        - Scss (emotion)
        - Nextjs (SSR, Server component)
        - Vue 2 (Vue class component, Vuex)
        - 테스팅
          - jest
          - react testing library
          - storybook
          - cypress


        토이 프로젝트 경험
        - Python (Django) ? 넣어야할까
        - Nodejs (Express, loopback ...)
        - AWS (EC2, EBS, S3 ...)

        그 외 공부했던 내용
        - Rust (Rust 스터디 및 공식 문서 독학)
        - AI (pytorch, keras 등 간단한 모델링)

        최근 관심사 Interests
        웹 개발 관련 기술 및 동향
        - 웹 어플리케이션 빌드 시스템
        - 마이크로 프론트엔드
        - 웹어셈블리`} */
}
