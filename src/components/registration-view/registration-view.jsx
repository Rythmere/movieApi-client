import react, {useState} from "react"; //imports React {useState} hook
import propTypes from "prop-types"; //imports prop-types
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import './registration-view.scss';

export function RegistraionView(props) { //Exports RegistrationView for use outside of registration-view.jsx
    const [ username, setUsername] = useState('');
    const [ password, setPassword] = useState('');
    const [ email, setEmail] = useState('');
    const [birthday, setBirthday] = useState(''); //Sets up states for user input
    const [register, setRegister] = useState(false); //Sets up register state boolean to switch back to loginView once user registers
    const toggleRegister = () => setRegister(value => !value); //Switch register value to switch between loginView and registrationView

    const handleSubmit = (e) => {
        e.preventDefault();
        toggleRegister(); //Switch register value
        console.log(register);
        props.onRegister(register); //sets register state value in main view to switch back to loginView

    };

    return ( //Creates for for user to input registration information and creates a button to register and switch to loginView. Button currently only switches between views, does not register user
        <Form>
            <Form.Group controlId="formUsername">
                <Form.Label>Username</Form.Label>
                <Form.Control type="text" onChange={e => setUsername(e.target.value)}/>
            </Form.Group>
            <Form.Group controlId="formPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="text" onChange={e => setPassword(e.target.value)}/>
            </Form.Group>
            <Form.Group controlId="Email">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" onChange={e => setEmail(e.target.value)}/>
            </Form.Group>
            <Form.Group controlId="formDate">
                <Form.Label>Birthday</Form.Label>
                <Form.Control type="date" onChange={e => setBirthday(e.target.value)}/>
            </Form.Group>
            <Button className="Btn-bg m-2" variant="primary" type='submit' onClick={handleSubmit}>Submit</Button>
        </Form>
    )
}

RegistraionView.propTypes = {
    onRegister: propTypes.func.isRequired
};