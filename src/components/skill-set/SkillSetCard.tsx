import Image from 'next/image';
import styles from './SkillSetCard.module.css';

interface SkillSetCardProps {
  title: string;
  subtitle?: string;
  logo: React.ReactNode;
  tags?: React.ReactNode;
  children: React.ReactNode;
}
const SkillSetCard: React.FC<SkillSetCardProps> = ({
  title,
  subtitle,
  logo,
  tags,
  children,
}) => {
  return (
    <div className={styles.card}>
      <div className={styles.title}>
        {logo}
        <h3>{title}</h3>
      </div>
      <span className={styles.subtitle}>{subtitle}</span>
      <div className={styles.contents}>
        {tags}
        {children}
      </div>
    </div>
  );
};

export default SkillSetCard;
