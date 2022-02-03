import react, {useState} from "react"; //imports react {useState} hook
import propTypes from "prop-types"; //imports prop-types
import './login-view.scss';

export function LoginView(props) { //exports loginView function component for use outside of login-view.jsx
    const [ username, setUsername] = useState(''); //Creates username state setting default to an empty string
    const [ password, setPassword] = useState(''); //Creates password state setting default to an empty string
    const [register, setRegister] = useState(true); //Creates register state used to switch between login and register views. Default as True
    const toggleRegister = () => setRegister(value => !value); // Changes register state boolean between true and false
    const handleSubmit = (e) => { //submits user input to main view telling it a user as logged in and to switch to movieCard component.
        e.preventDefault(); //Prevents button type submit from reloading page
        console.log(username, password);
        props.onLoggedIn(username); //Sets user state in mainview to user input username

    };

    const handleRegister = (e) => {
        e.preventDefault();
        toggleRegister(); //Switching register state boolean to false or true depending on current value
        console.log(register);
        props.onRegister(register); //Sets register state in main view to new value. Switching between login and register views

    };
    return ( //Creates form for user input with buttons to submit login credentials or switch to registrationView for new user
        <form> 
            <label>
                Username:
                <input type='text' value={username} onChange={e => setUsername(e.target.value)} />
            </label>
            <label>
                Password:
                <input type='password' value={password} onChange={e=> setPassword(e.target.value)} />
            </label>
            <button type='submit' onClick={handleSubmit}>Submit</button> 
            <button type='submit' onClick={handleRegister}>Sign Up</button>
        </form>
    )
}

LoginView.propTypes = {
    onLoggedIn: propTypes.func.isRequired,
    onRegister: propTypes.func.isRequired
};