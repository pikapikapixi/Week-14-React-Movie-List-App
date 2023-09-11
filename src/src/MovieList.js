import React from 'react';
import Movie from './Movie';

const MovieList = () => {
 const movies = [
 { id: 1, title: 'Title: Fiddler on the Roof', synopsis: 'A devout Jewish family is forced out of their home in this epic musical telling of Jewish hisotry in 1905 Ukraine. This movie features an all star cast and came out in 1971. While it may seem dated, the viewer can relate with Tevye and his family while they push through the hopeless times with their strong faith in Judaism, ', rating: 4.5, image: 'https://images.pexels.com/photos/15967604/pexels-photo-15967604/free-photo-of-a-case-with-a-violin-on-the-grass.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2https://images.pexels.com/photos/1438404/pexels-photo-1438404.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', reviews: [] },
 { id: 2, title: 'Title: Titanic', synopsis: 'Two lovers from two different econimcal backgrounds find a way to fall in love on doomed Titanic in this 1997 movie as directed by James Cameron. This movie may be long, but the tale is still epic today as it was over twenty years ago.', rating: 4.1, image: 'https://images.pexels.com/photos/6588914/pexels-photo-6588914.jpeg?auto=compress&cs=tinysrgb&w=600', reviews: [] },
 // Add more movies as needed
 ];

 return (
 <div>
 {movies.map(movie => (
 <Movie key={movie.id} movie={movie} />
 ))}
 </div>
 );
};

export default MovieList;
