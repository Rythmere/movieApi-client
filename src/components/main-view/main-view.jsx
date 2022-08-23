import React from 'react'; //Imports react
import axios from 'axios'; //Imports axios
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import { setMovies, setUser, setUserData, setToken } from '../../actions/actions';
import  Container  from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import MoviesList from '../Movies-List/Movies-List';
import FavouriteList from '../../Favourites-list/favourites-list';
import { NavBarView } from '../navbar/navbar-view';
import { LoginView } from '../login-view/login-view'; //Imports LoginView component
import  MovieView  from '../movieView/movieView'; // Imports MovieView component
import { RegistrationView } from '../registration-view/registration-view'; //imports registrationView component
import { DirectorView } from '../director-view/director-view';
import { GenreView } from '../genre-view/genre-view';
import { ProfileView } from '../profile-view/profile-view'
import {UserUpdate} from '../profile-view/user-update';
import './main-view.scss';



 class MainView extends React.Component { // Exports MainView component for use outside of main-view.jsx

    constructor(){ // sets up main view state with a movie object containing a array of movie data and sets selectedMovie state to null, sets register state to false
        super();
        
    }

    componentDidMount(){ // Pull movie data from database and fills in movie[] state
        let accessToken = localStorage.getItem('token');
        let userName = localStorage.getItem('user');
        if (accessToken !== null) {
            this.props.setUser(userName);
            this.props.setToken(accessToken);
            this.getMovies(accessToken);
            this.getUserData(accessToken, userName);
        }
    }
    

    getMovies(token) {
        axios.get('https://myflixbdg.herokuapp.com/movies', {    
            headers: {Authorization: `Bearer ${token}`}
        })
        .then(response => {
          this.props.setMovies(response.data);
        }).catch(error => {
            console.log(error);
        });
        
        
    }

    getUserData(token, userName) {
        axios.get(`https://myflixbdg.herokuapp.com/users/${userName}`, {
            headers: {Authorization: `Bearer ${token}`}
        })
        .then(response => {
            this.props.setUserData(response.data);
        }).catch(error => {
            console.log(error);
        });
        
    }

    onLoggedIn(authData) { //Sets user state
        this.props.setUser(authData.user.Username);
        this.props.setToken(authData.token);
        localStorage.setItem('token', authData.token);
        localStorage.setItem('user', authData.user.Username);
        this.getMovies(authData.token);
        this.getUserData(authData.token, authData.user.Username);
    }
    
    update = () => {
        let accessToken = localStorage.getItem('token');
        let userName = localStorage.getItem('user');
        this.getUserData(accessToken, userName);
    }
    
    

    render() {
        const {movies, user,  userData, token} = this.props;
            
        return (
                <Router>
                
                <Container>
                <NavBarView user={user}/>
                <Row className='main-view justify-content-md-center'>
                    <Route exact path='/' render={() => {
                        if (!user)  return (
                        <Col>
                    <LoginView  onLoggedIn={user => this.onLoggedIn(user)} />
                    </Col> )
                    if (movies.length === 0)  return (<div className='main-view'/>); // checks if there is movie data in the movies object.
                        return <MoviesList movies={movies}/>; 
                        
                    }} />
                    <Route path='/register' render={() => {
                        if (user) return <Redirect to='/'/>
                        return <Col lg={8} md={8}>
                            <RegistrationView />
                        </Col>
                    }}/>
                    <Route path='/movies/:movieId' render={({match, history}) =>{
                        return <Col md={6}>
                            <MovieView movie={movies.find(movie => movie._id === match.params.movieId)} user={user} update={this.update} onBackClick={() => history.goBack()} />
                        </Col>
                    }} />
                    <Route path='/movies-director/:name' render={({match, history}) =>{
                        return <Col>
                            <DirectorView  Director={movies.find(movie => movie.Director.Name === match.params.name).Director} onBackClick={() => history.goBack()} />
                        </Col>
                    }} />
                    <Route path='/movies-genre/:name' render={({match, history}) =>{
                        return <Col>
                            <GenreView Genre={movies.find(movie => movie.Genre.Name === match.params.name).Genre} onBackClick={() => history.goBack()} />
                        </Col>
                    }} />
                    <Route path={`/users/${user}`} render={({ history}) =>{
                        if (!userData) return <Redirect to='/'/>
                        return ( <> <Col md={12}>
                            <ProfileView movies={movies} userData={userData} token={token} onBackClick={()=> history.goBack()}/>
                            </Col>
                                <FavouriteList movies={movies} userData={userData} /> 
                       </>);
                        
                    }}/>
                    <Route path={`/user-update/${user}`} render={({ history}) => {
                        if (!user) return <Redirect to='/'/>
                        return <Col>
                        <UserUpdate user={user} token={token} onLoggedIn={user => this.onLoggedIn(user)}  onBackClick={() => history.goBack()}/>
                        </Col>
                    }}/>     
                </Row>
                </Container>
                </Router>
            ); 
        }
}

let mapStateToProps = state => {
    return { movies: state.movies,
             user: state.user,
            userData: state.userData,
            token: state.token}
}

export default connect(mapStateToProps, {setMovies, setUser, setUserData, setToken})(MainView);