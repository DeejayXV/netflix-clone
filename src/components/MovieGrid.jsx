import React, { useEffect, useState } from 'react';
// import { Row, Col } from 'react-bootstrap';
import './MovieGrid.css';

const MovieGrid = ({ title, fetchUrl }) => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMovies = async () => {
      setLoading(true);
      try {
        const response = await fetch(fetchUrl);
        const data = await response.json();
        if (data.Response === 'True') {
          setMovies(data.Search || []);
        } else {
          setError(data.Error);
        }
      } catch (error) {
        setError(error.message);
      }
      setLoading(false);
    };

    fetchMovies();
  }, [fetchUrl]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="movie-grid">
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

export default MovieGrid;
