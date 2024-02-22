import { useState } from 'react';
import { PlusCircle } from '@phosphor-icons/react';

import Header from './components/header';
import ListHeader from './components/list/header';
import Empty from './components/list/empty';
import Item from './components/list/item';

import './global.css';

import styles from './app.module.css';

export interface Tasks {
  id: number;
  text: string;
  isChecked: boolean;
}

function App() {
  const [tasks, setTasks] = useState<Tasks[]>([{id: 1708575868817, text: 'teste', isChecked: true}]);
  const [inputValue, setInputValue] = useState('');

  function handleAddTask() {
    if (!inputValue) {
      return
    }

    const newTask: Tasks = {
      id: Date.now(),
      text: inputValue,
      isChecked: false,
    }

    setTasks(state => [...state, newTask]);
    setInputValue('');
  }

  function handleToggleTask(id: number, value: boolean) {
    const updatedTasks = tasks.map(task => {
      if (task.id === id) {
        return { ...task, isChecked: value };
      }
      return task;
    });
    
    setTasks(updatedTasks);
  }

  function handleDeleteTask(id: number) {
    const updatedTasks = tasks.filter(task => task.id !== id);

    if (!confirm('Deseja mesmo apagar essa tarefa?')) {
      return
    }

    setTasks(updatedTasks);
  }
  
  const checkedTasksCounter = tasks.reduce((prev, current) => {
    if (current.isChecked) {
      return prev + 1;
    }
    return prev;
  }, 0);

  const isNewTask = inputValue === '';

  return (
    <main>
      <Header/>

      <section className={styles.content}>
        <div className={styles.taskInfoContainer}>
          <input
            placeholder='Adicione uma nova tarefa'
            value={inputValue}
            onChange={event => setInputValue(event.target.value)}
          />

          <button disabled={isNewTask} onClick={handleAddTask}>
            Criar
            <PlusCircle size={17} color='#f2f2f2' weight='bold' />
          </button>
        </div>

        <div className={styles.taskList}>
          <ListHeader
            tasksCounter={tasks.length}
            checkedTasksCounter={checkedTasksCounter}
          />

          {tasks.length > 0 ? (
            <div>
              {tasks.map((task) => (
                <Item
                  key={task.id}
                  data={task}
                  onToggleTask={handleToggleTask}
                  onDeleteTask={handleDeleteTask}
                />
              ))}
            </div>
          ) : (
            <Empty />
          )}
        </div>
      </section>
    </main>
  );
}

export default App
