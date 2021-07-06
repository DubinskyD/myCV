import React from 'react';


const Awards = ({ awards }) => {
   return (
      <div>
         <h3>Awards</h3>
         {awards.map(award => (
            <p key={award}>{award}</p>
         ))}
      </div>
   )
}

export default Awards;