import React, { useState } from 'react';
import Stars from './Stars';
import ReviewList from './ReviewList';
import ReviewForm from './ReviewForm';

const Movie = ({ movie }) => {
 const [reviews, setReviews] = useState(movie.reviews);

 const handleReviewSubmit = (reviewText, rating) => {
   const newReview = { id: Date.now(), text: reviewText, user: "User", rating };
   setReviews([...reviews, newReview]);
 };

 return (
   <div>
     <h2>{movie.title}</h2>
     <img src={movie.image} alt={movie.title} />
     <p>{movie.synopsis}</p>
     <p>Rating: {movie.rating}</p>
     <Stars rating={movie.rating} />
     <ReviewList reviews={reviews} />
     <ReviewForm onReviewSubmit={handleReviewSubmit} />
   </div>
 );
};

export default Movie;
