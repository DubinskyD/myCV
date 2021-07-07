import React from 'react';
import style from './avatar.module.css';

const Avatar = ({ name, surname, grade, position }) => {
   return (
      <div className={style.avatarContainer}>
         <img src='../../assets/photo/photo1.jpg' className={style.avatar}></img>
         <p className={style.fullName}><span>{name} </span><span>{surname}</span></p>
         <p className={style.position}><span>{grade} </span><span>{position}</span></p>
      </div>
   )
}

export default Avatar;