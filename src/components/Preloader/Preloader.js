import React from 'react';
import style from './preloader.module.css';


const Preloader = (props) => {
   return (
      <div className={style.loader}>
         Loading...
      </div>
   )
}

export default Preloader;