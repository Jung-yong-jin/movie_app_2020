import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './Movie.css';

function Movie({year, title, summary, poster, rating, genres}){
    return (<div className="movie">
                <Link to={{pathname: '/movie-detail', state: {year, title, summary, poster, genres}}}>
                <img src={poster} alt={title} title={title}/>
                <div className="movie__data">
                    <h3 className="movie__title">제목 : {title}</h3>
                    <h5 className="movie__year">년도 : {year}</h5>
                    <h5 className="movie__rating">평점 : {rating} / 10</h5>
                    <ul className="movie__genres">
                        {genres.map((genre, index) =>{
                            return <li key={index} className="movie__genre">{index+1 < genres.length ? genre + ',' : genre}</li>;
                        })}
                    </ul>
                    <p className="movie__summary">줄거리 : {summary.length > 180 ?  summary.slice(0, 180) + '...' : summary}</p>
                </div>
                </Link>
            </div>);
}


Movie.propTypes = {
    year: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movie;