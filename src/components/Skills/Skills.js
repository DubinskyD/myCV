import React from 'react';
import styles from './skills.module.css';

const Skils = ({ skills }) => {

   return (
      <div className={styles.wrapper}>
         <h3 className={styles.title}>Skills Summary</h3>
         <div className={styles.skillsContainer}>
            {skills.map(skill => (
               <span key={skill} className={styles.skill}>{skill}, </span>
            ))}
         </div>
      </div>
   )
}

export default Skils;