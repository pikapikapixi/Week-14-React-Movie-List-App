import React from 'react';

const Stars = ({ rating, onRatingChange }) => {
 const handleClick = (newRating) => {
   onRatingChange(newRating);
 };

 return (
   <div>
     {[1, 2, 3, 4, 5].map((star) => (
       <span
         key={star}
         style={{ cursor: 'pointer' }}
         onClick={() => handleClick(star)}
       >
         {star <= rating ? '⭐' : '☆'}
       </span>
     ))}
   </div>
 );
};

export default Stars;
