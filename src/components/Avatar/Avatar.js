import React from 'react';


const Avatar = ({ name, surname, grade, position }) => {
   return (
      <div>

         <p><span>{name} </span><span>{surname}</span></p>
         <p><span>{grade} </span><span>{position}</span></p>
      </div>
   )
}

export default Avatar;