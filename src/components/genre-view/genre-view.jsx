import React from "react"; //Imports React
import propTypes from "prop-types"; //Imports Prop-Types
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import './genre-view.scss';

export class GenreView extends React.Component { //Exports MovieView for use outside movieView.jsx
    render() {
        const {Genre, onBackClick} = this.props;
        return (

            <Card bg='dark' text='light'>
                <Card.Body>
                    <Card.Title>Genre: {Genre.Name}</Card.Title>
                    <Card.Text>{Genre.Description}</Card.Text>

                    <Button className="Btn-bg"  variant='primary' onClick={onBackClick}>Back</Button>
                </Card.Body>
        </Card>
        ); // renders specific movie data when called in MainView and creates a back button returning to MovieCard component upon user click
    }
}

GenreView.propTypes = {
        Genre: propTypes.shape({
            Name: propTypes.string.isRequired,
            Description: propTypes.string.isRequired
       
    }).isRequired,
};