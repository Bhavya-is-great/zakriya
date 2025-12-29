import React from 'react';
import styles from '@/css/ui/Card.module.css';

const Card = ({icon, title, detail}) => {
  return (
    <div className={styles.card}>
        <div className={styles.icon}>
            {icon}
        </div>
        <h3 className={styles.title}>
            {title}
        </h3>
        <p className={styles.detail}>
            {detail}
        </p>
    </div>
  )
}

export default Card
