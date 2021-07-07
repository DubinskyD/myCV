import React from 'react';
import styles from './workExperience.module.css';

const WorkExperience = ({ work_experience }) => {


   return (
      <div className={styles.wrapper}>
         <h3 className={styles.title}>Work Experience</h3>
         {work_experience.map(place => (
            <div className={styles.place} key={place}>
               <p className={styles.position}>{place.position}</p>
               <p className={styles.department}>{place.department}</p>
               <p className={styles.periodWrapper} >
                  <span>{place.period}, </span><span>{place.company}</span>
               </p>
               <p className={styles.direction}>{place.direction}</p>
               <ul className={styles.list}>
                  {place.responsibilities.map(resp => (

                     <li className={styles.listResp} key={resp} > {resp}</li>
                  ))}
               </ul>
            </div>
         ))
         }
      </div >
   )
}

export default WorkExperience;