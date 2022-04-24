import React from "react"; //Imports React
import axios from "axios";
import propTypes from "prop-types"; //Imports Prop-Types
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import './profile-view.scss';

export class ProfileView extends React.Component { //Exports MovieView for use outside movieView.jsx
   
    deleteUser(user, token) {
        axios.delete(`https://myflixbdg.herokuapp.com/users/${user.Username}`, {
            headers: {Authorization: `Bearer ${token}`}
        })
        alert('Your profile was deleted!');
        localStorage.clear();
        window.open('/', '_self');
    }
    render() {
        const {  userData, token, onBackClick} = this.props;
        return (

            <Card bg='dark' text='light'>
                <Card.Body>
                    <Card.Title>Account</Card.Title>
                    <Card.Text>{userData.Username}</Card.Text>
                    <Card.Text>{userData.Email}</Card.Text>
                    <Card.Text>{userData.Birthday}</Card.Text>
                    <Link to={`/user-update/${userData.Username}`}>
                    <Button className="Btn-bg" variant="primary">Edit</Button>
                    </Link>
                    <Button className="Btn-bg" variant="primary" type="submit" onClick={() => this.deleteUser( userData, token)} >Delete Account</Button>
                    <Button className="Btn-bg"  variant='primary' onClick={onBackClick}>Back</Button>
                </Card.Body>
                <Card.Footer>
                    <Card.Title>Favourites:</Card.Title>
                </Card.Footer>
        </Card>
        )
         // renders specific movie data when called in MainView and creates a back button returning to MovieCard component upon user click
    }
}
