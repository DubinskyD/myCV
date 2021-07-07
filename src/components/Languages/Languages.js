import React from 'react';
import styles from './languages.module.css';

const Languages = ({ languages }) => {
   return (
      <div className={styles.wrapper}>
         <h3 className={styles.title}>Languages</h3>
         <ul>
            {Object.keys(languages).map(lang => (
               <li className={styles.list} key={lang}> <span className={styles.lang}>{lang} </span>- <span className={styles.lvl}>{languages[lang]}</span></li>
            ))}
         </ul>
      </div>
   )
}

export default Languages;