import { useState } from 'react';
import { PlusCircle } from '@phosphor-icons/react';

import Header from './components/header';
import ListHeader from './components/list/header';
import Empty from './components/list/empty';
import Item from './components/list/item';

import './global.css';

import styles from './app.module.css';

function App() {
  const [tasks, setTasks] = useState([1,2,3]);

  return (
    <main>
      <Header/>

      <section className={styles.content}>
        <div className={styles.taskInfoContainer}>
          <input placeholder='Adicione uma nova tarefa'/>

          <button>
            Criar
            <PlusCircle size={17} color='#f2f2f2' weight='bold' />
          </button>
        </div>

        <div className={styles.taskList}>
          <ListHeader/>

          {tasks.length > 0 ? (
            <div>
              {tasks.map((task) => (
                <Item />
              ))}
            </div>
          ) : (
            <Empty/>
          )}
        </div>
      </section>
    </main>
  );
}

export default App
