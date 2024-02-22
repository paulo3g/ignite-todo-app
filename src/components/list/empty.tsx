import styles from './empty.module.css';

export default function Empty() {
  return (
    <div className={styles.container}>
      <img src="clipboard.svg" />

      <p>
        <strong>Você ainda não tem tarefas cadastradas</strong>
        Crie tarefas e organize seus itens a fazer
      </p>
    </div>
  );
}