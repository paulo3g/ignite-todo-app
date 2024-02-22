import { Trash } from '@phosphor-icons/react';
import styles from './item.module.css';

export default function Item() {
  return (
    <div className={styles.container}>
      <label htmlFor="">
        <input type="checkbox" readOnly />
        <span className={styles.checkbox}></span>

        <p className={styles.paragraph}>
          Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.
        </p>
      </label>

      <button>
        <Trash size={18} color='#808080' />
      </button>
    </div>
  );
}