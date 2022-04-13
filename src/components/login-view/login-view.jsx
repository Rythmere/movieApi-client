import React, {useState} from "react"; //imports react {useState} hook
import axios from "axios";
import propTypes from "prop-types"; //imports prop-types
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import './login-view.scss';

export function LoginView(props) { //exports loginView function component for use outside of login-view.jsx
    const [ username, setUsername] = useState(''); //Creates username state setting default to an empty string
    const [ password, setPassword] = useState(''); //Creates password state setting default to an empty string
    const [usernameErr, setUsernameErr] = useState('');
    const [passwordErr, setPasswordErr] = useState('');
    const validate = () => {
        let isReq = true;
        const isAlphaNumeric = /^([0-9]|[a-z])+([0-9a-z]+)$/i;
        if(!username) {
            setUsernameErr('Username Required');
            isReq = false;
        }else if(username.length < 5){
            setUsernameErr('Username must be atleast 5 characters long');
            isReq = false;
        }else if(isAlphaNumeric.test(username) === false) {
            setUsernameErr('Must contain only letters and numbers');
            isReq =false;
        }
        if(!password) {
            setPasswordErr('Password Required');
            isReq=false;
        }
        return isReq;
    } 

    const handleSubmit = (e) => { //submits user input to main view telling it a user as logged in and to switch to movieCard component.
        e.preventDefault(); //Prevents button type submit from reloading page
        const isReq = validate();
        if(isReq) {
        axios.post('https://myflixbdg.herokuapp.com/login', {
            Username: username,
            Password: password
        }).then(response => {
            const data = response.data;
            props.onLoggedIn(data);
        }).catch(e => {
            console.log('No such user')
        });
    }
        };

    
    return ( //Creates form for user input with buttons to submit login credentials or switch to registrationView for new user
        <Form> 
            <Form.Group controlId="formUsername">
                <Form.Label>Username</Form.Label>
                <Form.Control type="text" placeholder='Enter Username' value={username} onChange={e => setUsername(e.target.value)}/>
                {usernameErr && <p>{usernameErr}</p>}
            </Form.Group>
            <Form.Group controlId="formPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="text" placeholder='Enter Password' value={password} onChange={e => setPassword(e.target.value)}/>
                {passwordErr && <p>{passwordErr}</p>}
            </Form.Group>
            <Button className="Btn-bg m-2" variant="primary" type='submit' onClick={handleSubmit}>Submit</Button> 
            
            
        </Form>
    )
}

LoginView.propTypes = {
    onLoggedIn: propTypes.func.isRequired,
    
};