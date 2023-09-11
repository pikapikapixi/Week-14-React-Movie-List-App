import React from 'react';

const Review = ({ review }) => {
 return (
 <div>
 <p>{review.text}</p>
 <p>By: {review.user}</p>
 </div>
 );
};

export default Review;
