import react from 'react'; // Imports React
import propTypes from 'prop-types'; //Imports Prop-Types
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './movieCard.scss';

export class MovieCard extends react.Component { //Exports MovieCard component for use outside movieCard.jsx
    render() {
        const {movie, onMovieClick} = this.props;

        return (
            <Card>
                <Card.Img variant='top' src={movie.ImagePath} />
                <Card.Body>
                    <Card.Title>{movie.Title}</Card.Title>
                    <Card.Text>{movie.Description}</Card.Text>
                    <Button onClick={()=> onMovieClick(movie)} variant='link'>open</Button>
                </Card.Body>
        
        <div className='movie-card' onClick={()=> {onMovieClick(movie);}}>{movie.Title}</div>
        </Card>
        );
    } // Listens for a click from user, to switch to MovieView component and renders MovieCard component to list out movies
}

MovieCard.propTypes = {
    movie: propTypes.shape({
        Title: propTypes.string.isRequired
    }).isRequired,
    onMovieClick: propTypes.func.isRequired
};