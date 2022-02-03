import react from "react"; //Imports React

export class MovieView extends react.Component { //Exports MovieView for use outside movieView.jsx
    render() {
        const {movie, onBackClick} = this.props;
        return (
            <div className="movie-view">
                <div className="movie-poster">
                    <img src={movie.ImagePath}/>
                </div>
                <div className="movie-title">
                    <span className="label">Title:</span>
                    <span className="value">{movie.Title}</span>
                </div>
                <div className="movie-description">
                    <span className="label">Description:</span>
                    <span className="value">{movie.Description}</span>
                </div>
                <button onClick={()=> {onBackClick(null); }}>Back</button>
            </div>
        ); // renders specific movie data when called in MainView and creates a back button returning to MovieCard component upon user click
    }
}