import styles from './header.module.css';

export default function Header() {
  return (
    <header className={styles.container}>
      <aside>
        <strong>Tarefas criadas</strong>
        <span>5</span>
      </aside>

      <aside>
        <strong>Concluídas</strong>
        <span>2 de 5</span>
      </aside>
    </header>
  );
}