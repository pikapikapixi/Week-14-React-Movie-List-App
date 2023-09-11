import React, { useState } from 'react';
import Stars from './Stars';

const ReviewForm = ({ onReviewSubmit }) => {
 const [text, setText] = useState('');
 const [rating, setRating] = useState(0);

 const handleSubmit = (e) => {
   e.preventDefault();
   onReviewSubmit(text, rating);
   setText('');
   setRating(0);
 };

 return (
   <form onSubmit={handleSubmit}>
     <textarea value={text} onChange={e => setText(e.target.value)}></textarea>
     <Stars rating={rating} onRatingChange={setRating} />
     <button type="submit">Submit Review</button>
   </form>
 );
};

export default ReviewForm;
