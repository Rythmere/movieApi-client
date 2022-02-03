import react from 'react'; //Imports react
import axios from 'axios'; //Imports axios
import './main-view.scss';
import { LoginView } from '../login-view/login-view'; //Imports LoginView component
import { RegistraionView } from '../registration-view/registration-view'; //imports registrationView component
import { MovieCard } from '../movieCard/movieCard'; // Imports MovieCard component
import { MovieView } from '../movieView/movieView'; // Imports MovieView component


export class MainView extends react.Component { // Exports MainView component for use outside of main-view.jsx

    constructor(){ // sets up main view state with a movie object containing a array of movie data and sets selectedMovie state to null, sets register state to false
        super();
        this.state = {
            movies: [],
            selectedMovie: null,
            user: null,
            register: false
        };
    }

    componentDidMount(){ // Pull movie data from database and fills in movie[] state
        axios.get('https://myflixbdg.herokuapp.com/movies')
        .then(response => {
            this.setState({
                movies: response.data
            });
        }).catch(error => {
            console.log(error);
        });
    }

    setSelectedMovie(newSelectedMovie) { // Simplifies changing selectedMovie state to display a movie or returning it to null in later code
        this.setState({
            selectedMovie: newSelectedMovie
        });
    }

    onLoggedIn(user) { //Sets user state
        this.setState({
            user
        });
    }


    onRegister(register) { //Sets register state
        this.setState({
            register
        })
    }
    render() {
        const {movies, selectedMovie, user, register} =this.state; // render the local states 

        if (register === true) return <RegistraionView onRegister={register => this.onRegister(register)} />; //Tells main view to render registrationView is register is true

        if (!user) return <LoginView onLoggedIn={user => this.onLoggedIn(user)} onRegister={register => this.onRegister(register)} />; //Tells mainview to render loginVIew if user state is null and allows loginView to change user state and register state.

        if (movies.length === 0) { return <div className='main-view'/>;}  // checks if there is movie data in the movies object.
       
        return (
                <div className='main-view'>
                    {selectedMovie
                        ? <MovieView movie={selectedMovie} onBackClick={newSelectedMovie=> {this.setSelectedMovie(newSelectedMovie);}}/>
                        : movies.map(movie=> <MovieCard key={movie._id} movie={movie} onMovieClick={(movie)=> {this.setSelectedMovie(movie); }}/>)} 
                </div>
            ); // renders MovieCard component for each movie in the movies object, allows user to click a MovieCard component to switch to MovieView component
        }
}