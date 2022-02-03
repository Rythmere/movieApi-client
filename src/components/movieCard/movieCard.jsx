import react from 'react'; // Imports React
import propTypes from 'prop-types'; //Imports Prop-Types
import './movieCard.scss';

export class MovieCard extends react.Component { //Exports MovieCard component for use outside movieCard.jsx
    render() {
        const {movie, onMovieClick} = this.props;
        return <div className='movie-card' onClick={()=> {onMovieClick(movie);}}>{movie.Title}</div>;
    } // Listens for a click from user, to switch to MovieView component and renders MovieCard component to list out movies
}

MovieCard.propTypes = {
    movie: propTypes.shape({
        Title: propTypes.string.isRequired
    }).isRequired,
    onMovieClick: propTypes.func.isRequired
};