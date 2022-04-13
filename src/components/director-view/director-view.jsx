import React from "react"; //Imports React
import propTypes from "prop-types"; //Imports Prop-Types
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './director-view.scss';


export class DirectorView extends React.Component { //Exports MovieView for use outside movieView.jsx
    render() {
        const { Director, onBackClick} = this.props;
        return (

            <Card bg='dark' text='light'>
                <Card.Body>
                    <Card.Title>Director: {Director.Name}</Card.Title>
                    <Card.Text>Bio: {Director.Bio}</Card.Text>
                    <Card.Text>Birthyear: {Director.Birth}</Card.Text>
                    <Button className="Btn-bg"  variant='primary' onClick={onBackClick}>Back</Button>
                </Card.Body>
        </Card>
        ); // renders specific movie data when called in MainView and creates a back button returning to MovieCard component upon user click
    }
}

DirectorView.propTypes = {
        Director: propTypes.shape({
            Name: propTypes.string.isRequired,
            Bio: propTypes.string.isRequired,
            Birth: propTypes.string.isRequired
    }).isRequired,
};