import React, {useState} from "react"; //imports React {useState} hook
import axios from "axios";
import propTypes from "prop-types"; //imports prop-types
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import './registration-view.scss';

export function RegistrationView(props) { //Exports RegistrationView for use outside of registration-view.jsx
    const [ username, setUsername] = useState('');
    const [ password, setPassword] = useState('');
    const [ email, setEmail] = useState('');
    const [usernameErr, setUsernameErr] = useState('');
    const [passwordErr, setPasswordErr] = useState('');
    const [emailErr, setEmailErr] = useState('');
    const [birthday, setBirthday] = useState(''); //Sets up states for user input
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
        } else if(password.length < 5) {
            setPasswordErr('Password must be atleast 5 characters long');
            isReq=false;
        }
        if(email.indexOf('@') === -1) {
            setEmailErr('Must be a valid email');
            isReq=false;
        }
        return isReq;
    } 

    const handleSubmit = (e) => {
        e.preventDefault();
        const isReq = validate();
        if(isReq) {
        axios.post('https://myflixbdg.herokuapp.com/users', {
            Username: username,
            Password: password,
            Email: email,
            Birthday: birthday
        }).then(response => {
            const data = response.data;
            window.open('/' , '_self');
        }).catch(e => {
            console.log('Error registering user')
        });
        }
    };

    return ( //Creates for for user to input registration information and creates a button to register and switch to loginView. Button currently only switches between views, does not register user
        <Form>
            <Form.Group controlId="formUsername">
                <Form.Label>Username</Form.Label>
                <Form.Control type="text" placeholder='Enter Username' value={username} onChange={e => setUsername(e.target.value)}/>
                {usernameErr && <p>{usernameErr}</p>}
            </Form.Group>
            <Form.Group controlId="formPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder='Enter Password' value={password} onChange={e => setPassword(e.target.value)}/>
                {passwordErr && <p>{passwordErr}</p>}
            </Form.Group>
            <Form.Group controlId="Email">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder='Enter Email' value={email} onChange={e => setEmail(e.target.value)}/>
                {emailErr && <p>{emailErr}</p>}
            </Form.Group>
            <Form.Group controlId="formDate">
                <Form.Label>Birthday</Form.Label>
                <Form.Control type="date" onChange={e => setBirthday(e.target.value)}/>
            </Form.Group>
            <Button className="Btn-bg m-2" variant="primary" type='submit' onClick={handleSubmit}>Submit</Button>
        </Form>
    )
}

