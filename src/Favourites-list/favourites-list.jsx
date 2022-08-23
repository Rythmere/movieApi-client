import React from "react";
import { Col } from "react-bootstrap";
import { connect } from "react-redux";
import { MovieCard } from "../components/movieCard/movieCard";
function FavouriteList(props) {
    const { movies, userData} = props;
    let filteredMovies = movies.filter(m => userData.Favourites.includes(m._id));

    return <>
    {filteredMovies.map(movie => (
        <Col md={3} key={movie._id}>
            <MovieCard movie={movie} />
        </Col>
    ))}</>;
}
let mapStateToProps = state => {
    return { movies: state.movies,
            userData: state.userData}
}
export default connect(mapStateToProps)(FavouriteList);