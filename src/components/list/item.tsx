import { Check, Trash } from '@phosphor-icons/react';
import styles from './item.module.css';

import { Tasks } from '../../app';

interface ItemProps {
  data: Tasks;
  onToggleTask: (id: number, value: boolean) => void;
  onDeleteTask: (id: number) => void;
}

export default function Item({ data, onToggleTask, onDeleteTask }: ItemProps) {
  const checkboxCheckedClassName = data.isChecked && styles.checkboxChecked;
  const paragraphCheckedClassName = data.isChecked && styles.paragraphChecked;

  return (
    <div className={styles.container}>
      <label>
        <input type="checkbox" readOnly checked={data.isChecked} />
        <span
          className={`${styles.checkbox} ${checkboxCheckedClassName}`}
          onClick={() => onToggleTask(data.id, !data.isChecked)}
        >
          {data.isChecked && <Check size={14} />}
        </span>

        <p className={`${styles.paragraph} ${paragraphCheckedClassName}`}>
          {data.text}
        </p>
      </label>

      <button onClick={() => onDeleteTask(data.id)}>
        <Trash size={18} color='#808080' />
      </button>
    </div>
  );
}