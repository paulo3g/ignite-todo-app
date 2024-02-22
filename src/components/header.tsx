import styles from './header.module.css'

export default function Header() {
  return (
    <header className={styles.container}>
      <img src="logo.svg" alt="Logo" />
    </header>
  )
}