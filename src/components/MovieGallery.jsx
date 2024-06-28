import React, { useEffect, useState } from "react";
import "./MovieGallery.css";

const MovieGallery = ({ title, imdbIds, apiKey }) => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMovies = async () => {
      setLoading(true);
      try {
        const fetchedMovies = [];
        for (const id of imdbIds) {
          const response = await fetch(`https://www.omdbapi.com/?i=${id}&apikey=${apiKey}`);
          const data = await response.json();
          if (data.Response === "True") {
            fetchedMovies.push(data);
          } else {
            setError(data.Error);
          }
        }
        setMovies(fetchedMovies);
      } catch (error) {
        setError(error.message);
      }
      setLoading(false);
    };
    
    // return (
    //     <div className="movie-gallery">
    //       <h4>{title}</h4>
    //       <div className="movie-row">
    //         {movies.map((movie, index) => (
    //           <div key={index} className="movie-item">
    //             <img className="movie-img" src={movie.Poster} alt={movie.Title} />
    //           </div>
    //         ))}
    //       </div>
    //     </div>
    //   );

    fetchMovies();
  }, [imdbIds, apiKey]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="movie-gallery">
      <h4>{title}</h4>
      <div className="movie-row">
        {movies.map((movie, index) => (
          <div key={index} className="movie-item">
            <img className="movie-img" src={movie.Poster} alt={movie.Title} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default MovieGallery;
