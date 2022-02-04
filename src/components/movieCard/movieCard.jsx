import react from 'react'; // Imports React
import propTypes from 'prop-types'; //Imports Prop-Types
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './movieCard.scss';

export class MovieCard extends react.Component { //Exports MovieCard component for use outside movieCard.jsx
    render() {
        const {movie, onMovieClick} = this.props;
        let Description = movie.Description;
        let Display = Description.substr(0,100);
        return (
            <Card bg='dark' text='light' className='h-100'>
                <Card.Img variant='top' src={movie.ImagePath} />
                <Card.Body>
                    <Card.Title>{movie.Title}</Card.Title>
                    <Card.Text>{Display}</Card.Text>
                    <Button className='Btn-bg' onClick={()=> onMovieClick(movie)} variant='primary' >open</Button>
                </Card.Body>
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