import React from 'react';


const WorkExperience = ({ work_experience }) => {


   return (
      <div>
         <h3>Work Experience</h3>
         {work_experience.map(place => (
            <div key={place}>
               <p>{place.position}</p>
               <p>{place.department}</p>
               <p>
                  <span>{place.period},</span><span>{place.company}</span>
               </p>
               <p>{place.direction}</p>
               <ul>
                  {place.responsibilities.map(resp => (

                     <li key={resp} > {resp}</li>
                  ))}
               </ul>
            </div>
         ))
         }
      </div >
   )
}

export default WorkExperience;