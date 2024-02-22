import styles from './header.module.css';

interface HeaderProps {
  tasksCounter: number;
  checkedTasksCounter: number;
}

export default function Header({ tasksCounter, checkedTasksCounter }: HeaderProps) {
  return (
    <header className={styles.container}>
      <aside>
        <strong>Tarefas criadas</strong>
        <span>{tasksCounter}</span>
      </aside>

      <aside>
        <strong>Concluídas</strong>
        <span>{checkedTasksCounter} de {tasksCounter}</span>
      </aside>
    </header>
  );
}