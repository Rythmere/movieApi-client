import React from "react"; //Imports React
import axios from "axios";
import propTypes from "prop-types"; //Imports Prop-Types
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import './movieView.scss';

const mapStateToProps = state => {
    const {userData, token} = state;
    return { userData, token};
};

function MovieView(props) { //Exports MovieView for use outside movieView.jsx 
    const {movie, user, token, userData, onBackClick, update} = props;
   const isFavourited = () => {
        if(userData.Favourites.includes(movie._id)) {
            return true;
        } else {
            return false;
        }
    };

   const addFavourite = (movieId, user) => {
        axios.post(`https://myflixbdg.herokuapp.com/users/${user}/movies/${movieId}`, {},
         {headers:{Authorization: `Bearer ${token}`}
        }).then(() => {
            update()
          })
        
        
    }

  const  removeFavourite = (movieId, user) => {
        axios.delete(`https://myflixbdg.herokuapp.com/users/${user}/movies/${movieId}`, {
            headers: {Authorization: `Bearer ${token}`}
        }).then(() => {
          update()
        })
       
        
    }
    
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
                    {isFavourited() && 
                    <Button className="Btn-bg" variant="primary" type="submit" onClick={() => removeFavourite( movie._id, user) } >Remove</Button>}
                    {!isFavourited() && 
                    <Button className="Btn-bg" variant="primary" type="submit" onClick={() => addFavourite( movie._id, user)} >Favourite</Button>}
                    <Button className="Btn-bg"  variant='primary'  onClick={onBackClick}>Back</Button>
                </Card.Body>
        </Card>
        
        ); // renders specific movie data when called in MainView and creates a back button returning to MovieCard component upon user click
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

export default connect(mapStateToProps)(MovieView);