import React from 'react';
import styles from './avatar.module.css';
import photo from '../../assets/photo/photo1.jpg';

const Avatar = ({ name, surname, grade, position }) => {
   return (
      <div className={styles.avatarContainer}>
         <figure className={styles.figure}>
            <img src={photo} alt="#" className={styles.photo}></img>
         </figure>
         <p className={styles.fullName}><span>{name} </span><span>{surname}</span></p>
         <p className={styles.position}><span>{grade} </span><span>{position}</span></p>
      </div >
   )
}

export default Avatar;