import React from 'react';
import styles from './education.module.css';

const Education = ({ education }) => {
   return (
      <div className={styles.wrapper}>
         <h3 className={styles.title}>Education</h3>
         <p className={styles.universityGrade}>{education.university_grade}</p>
         <p className={styles.universityName}>"{education.university_name}"</p>
         <p className={styles.date}>{education.expiration_date}</p>
         <p className={styles.subjectTitle}>Program Subject Area</p>
         <p className={styles.subject}>"{education.program_subject_area}"</p>
      </div >
   )
}

export default Education;