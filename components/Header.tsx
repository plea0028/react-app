import styles from './Header.module.css';

export default function Header() {
  return (
    <div className={styles.headerDiv}>
      <a href="/"><h1 className={styles.headerH1}>Movie Night</h1></a>
    </div>
  )
}