import React from 'react';


const Education = ({ education }) => {
   return (
      <div>
         <h3>Education</h3>
         <p>{education.university_grade}</p>
         <p>"{education.university_name}"</p>
         <p>{education.expiration_date}</p>
         <p>Program Subject Area</p>
         <p>{education.program_subject_area}</p>
      </div>
   )
}

export default Education;