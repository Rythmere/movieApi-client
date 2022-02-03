import react, {useState} from "react"; //imports React {useState} hook
import propTypes from "prop-types"; //imports prop-types
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
        <form>
            <label>
                Username:
                <input type='text' value={username} onChange={e => setUsername(e.target.value)} />
            </label>
            <label>
                Password:
                <input type='password' value={password} onChange={e=> setPassword(e.target.value)} />
            </label>
            <label>
                Email:
                <input type='email' value={password} onChange={e=> setEmail(e.target.value)} />
            </label>
            <label>
                Birthday:
                <input type='date' value={password} onChange={e=> setBirthday(e.target.value)} />
            </label>
            <button type='submit' onClick={handleSubmit}>Submit</button>
        </form>
    )
}

RegistraionView.propTypes = {
    onRegister: propTypes.func.isRequired
};