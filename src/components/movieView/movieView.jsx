import react from "react"; //Imports React
import propTypes from "prop-types"; //Imports Prop-Types
import './movieView.scss';

export class MovieView extends react.Component { //Exports MovieView for use outside movieView.jsx
    render() {
        const {movie, onBackClick} = this.props;
        return (
            <div className="movie-view">
                <div className="movie-poster">
                    <img src={movie.ImagePath}/>
                </div>
                <div className="movie-title">
                    <span className="label">Title: </span>
                    <span className="value">{movie.Title}</span>
                </div>
                <div className="movie-description">
                    <span className="label">Description: </span>
                    <span className="value">{movie.Description}</span>
                </div>
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
            </div>
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