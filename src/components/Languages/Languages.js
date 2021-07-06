import React from 'react';


const Languages = ({ languages }) => {
   return (
      <div>
         <h3>Languages</h3>
         <ul>
            {Object.keys(languages).map(lang => (
               <li key={lang}> {lang} - {languages[lang]}</li>
            ))}
         </ul>
      </div>
   )
}

export default Languages;