import React from 'react';
import PropTypes, { func } from 'prop-types';

function Movie({id, year, title, summary, poster}){
    return (<div>
                <h1>제목 : {title}</h1>
                <h2>년도 : {year}</h2>
                <p>줄거리 : {summary}</p>
                <img src={poster} alt={title}/>
                
            </div>);
}


Movie.propTypes = {
    id: PropTypes.number.isRequired,
    year: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,

};

export default Movie;