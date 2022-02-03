import react from 'react'; // Imports React

export class MovieCard extends react.Component { //Exports MovieCard component for use outside movieCard.jsx
    render() {
        const {movie, onMovieClick} = this.props;
        return <div className='movie-card' onClick={()=> {onMovieClick(movie);}}>{movie.Title}</div>;
    } // Listens for a click from user, to switch to MovieView component and renders MovieCard component to list out movies
}