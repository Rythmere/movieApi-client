import React from "react"; //Imports React
import axios from "axios";
import propTypes from "prop-types"; //Imports Prop-Types
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import './movieView.scss';

export class MovieView extends React.Component { //Exports MovieView for use outside movieView.jsx 
    
    
    isFavourited(userData, movie) {
        if(userData.Favourites.includes(movie)) {
            return true;
        } else {
            return false;
        }
    }

    addFavourite(token, movieId, user) {
        axios.post(`https://myflixbdg.herokuapp.com/users/${user}/movies/${movieId}`, {},
         {headers:{Authorization: `Bearer ${token}`}
        }).then(() => {
            this.props.update()
          })
        
        
    }

    removeFavourite(token, movieId, user) {
        axios.delete(`https://myflixbdg.herokuapp.com/users/${user}/movies/${movieId}`, {
            headers: {Authorization: `Bearer ${token}`}
        }).then(() => {
          this.props.update()
        })
       
        
    }
    render() {
        const {movie, user, token, userData, onBackClick} = this.props;
        return (

            <Card bg='dark' text='light'>
                <Card.Img variant='top' src={movie.ImagePath} />
                <Card.Body>
                    <Card.Title>{movie.Title}</Card.Title>
                    <Card.Text>{movie.Description}</Card.Text>
                    <Link to={`/movies-director/${movie.Director.Name}`}>
                    <Button className="Btn-bg" variant="primary">Director: {movie.Director.Name}</Button>
                    </Link>
                    <Link to={`/movies-genre/${movie.Genre.Name}`}>
                    <Button className="Btn-bg" variant="primary">Genre: {movie.Genre.Name}</Button>
                    </Link>
                    <br/>
                    {this.isFavourited(userData, movie._id) && 
                    <Button className="Btn-bg" variant="primary" type="submit" onClick={() => this.removeFavourite( token, movie._id, user) } >Remove</Button>}
                    {!this.isFavourited(userData, movie._id) && 
                    <Button className="Btn-bg" variant="primary" type="submit" onClick={() => this.addFavourite( token, movie._id, user)} >Favourite</Button>}
                    <Button className="Btn-bg"  variant='primary'  onClick={onBackClick}>Back</Button>
                </Card.Body>
        </Card>
        
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
};

