import react from "react"; //Imports React
import propTypes from "prop-types"; //Imports Prop-Types
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './movieView.scss';

export class MovieView extends react.Component { //Exports MovieView for use outside movieView.jsx
    render() {
        const {movie, onBackClick} = this.props;
        return (

            <Card bg='dark' text='light'>
                <Card.Img variant='top' src={movie.ImagePath} />
                <Card.Body>
                    <Card.Title>{movie.Title}</Card.Title>
                    <Card.Text>{movie.Description}</Card.Text>
                    <Card.Title>Director: {movie.Director.Name}</Card.Title>
                    <Card.Text>Bio: {movie.Director.Bio}</Card.Text>
                    <Card.Text>Birthyear: {movie.Director.Birth}</Card.Text>
                    <Card.Title>Genre: {movie.Genre.Name}</Card.Title>
                    <Card.Text>{movie.Genre.Description}</Card.Text>

                    <Button className="Btn-bg" onClick={()=> onBackClick(null)} variant='primary'>Back</Button>
                </Card.Body>
        </Card>
          /*  <div className="movie-view">
                <div className="movie-Director">
                    <span className="label">Director: </span>
                    <span className="value">{movie.Director.Name}</span>
                </div>
                <div className="movie-Director">
                    <span className="label">Bio: </span>
                    <span className="value">{movie.Director.Bio}</span>
                </div>
                <div className="movie-Director">
                    <span className="label">Birth: </span>
                    <span className="value">{movie.Director.Birth}</span>
                </div>
                <div className="movie-Genre">
                    <span className="label">Genre: </span>
                    <span className="value">{movie.Genre.Name}</span>
                </div>
                <div className="movie-Genre">
                    <span className="label">Description: </span>
                    <span className="value">{movie.Genre.Description}</span>
                </div>
                <button onClick={()=> {onBackClick(null); }}>Back</button>
            </div> */
        ); // renders specific movie data when called in MainView and creates a back button returning to MovieCard component upon user click
    }
}

MovieView.propTypes = {
    movie: propTypes.shape({
        Title: propTypes.string.isRequired,
        Description: propTypes.string.isRequired,
        ImagePath: propTypes.string.isRequired,
        Genre: propTypes.shape({
            Name: propTypes.string.isRequired,
            Description: propTypes.string.isRequired
        }),
        Director: propTypes.shape({
            Name: propTypes.string.isRequired,
            Bio: propTypes.string.isRequired,
            Birth: propTypes.string.isRequired
        }),
        Featured: propTypes.bool.isRequired
    }).isRequired,
    onBackClick: propTypes.func.isRequired
};