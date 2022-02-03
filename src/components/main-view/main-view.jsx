import react from 'react'; //Imports react
import { MovieCard } from '../movieCard/movieCard'; // Imports MovieCard component
import { MovieView } from '../movieView/movieView'; // Imports MovieView component

export class MainView extends react.Component { // Exports MainView component for use outside of main-view.jsx

    constructor(){ // sets up main view state with a movie object containing a array of movie data and sets selectedMovie state to null
        super();
        this.state = {
            movies: [
                {_id: 1, Title: 'Your Name', Description: 'Placeholder', ImagePath: 'https://en.wikipedia.org/wiki/Your_Name#/media/File:Your_Name_poster.png'},
                {_id: 2, Title: 'Weathering With You', Description: 'Placeholder', ImagePath: 'https://en.wikipedia.org/wiki/Weathering_with_You#/media/File:Weathering_with_You_Poster.jpg'},
                {_id: 3, Title: 'The Garden of Words', Description: 'Placeholder', ImagePath: 'https://en.wikipedia.org/wiki/Weathering_with_You#/media/File:Weathering_with_You_Poster.jpg'}
            ],
            selectedMovie: null
        };
    }

    setSelectedMovie(newSelectedMovie) { // Simplifies changing selectedMovie state to display a movie or returning it to null in later code
        this.setState({
            selectedMovie: newSelectedMovie
        });
    }
    render() {
        const {movies, selectedMovie} =this.state; // render the local states 
       
        if (selectedMovie) return <MovieView movie={selectedMovie} onBackClick={newSelectedMovie=> {this.setSelectedMovie(newSelectedMovie);}}/> //User to bring up MovieView component and switch selectedMovie state back to null

        if (movies.length === 0) { return <div className='main-view'>The list is empty</div>;}  // checks if there is movie data in the movies object. If theres isnt returns a message letting the user know
       
        return (
                <div className='main-view'>
                  {movies.map(movie=> <MovieCard key={movie._id} movie={movie} onMovieClick={(movie)=> {this.setSelectedMovie(movie); }}/>)} 
                </div>
            ); // renders MovieCard component for each movie in the movies object, allows user to click a MovieCard component to switch to MovieView component
        }
}