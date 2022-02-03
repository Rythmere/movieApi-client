import react, {useState} from "react"; //imports react {useState} hook
import propTypes from "prop-types"; //imports prop-types
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
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
        <Form> 
            <Form.Group controlId="formUsername">
                <Form.Label>Username</Form.Label>
                <Form.Control type="text" onChange={e => setUsername(e.target.value)}/>
            </Form.Group>
            <Form.Group controlId="formPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="text" onChange={e => setPassword(e.target.value)}/>
            </Form.Group>
            <Button variant="primary" type='submit' onClick={handleSubmit}>Submit</Button> 
            <Button variant="primary" type='submit' onClick={handleRegister}>Sign Up</Button>
        </Form>
    )
}

LoginView.propTypes = {
    onLoggedIn: propTypes.func.isRequired,
    onRegister: propTypes.func.isRequired
};