import React from 'react';


const Skils = ({ skills }) => {

   return (
      <div>
         <h3>Skills Summary</h3>
         {skills.map(skill => (
            <span key={skill}> {skill}, </span>
         ))}

      </div>
   )
}

export default Skils;