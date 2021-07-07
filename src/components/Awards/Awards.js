import React from 'react';
import styles from './awards.module.css';

const Awards = ({ awards }) => {
   return (
      <div className={styles.wrapper}>
         <h3 className={styles.title}>Awards</h3>
         {awards.map(award => (
            <p className={styles.award} key={award}>{award}</p>
         ))}
      </div>
   )
}

export default Awards;