import { useState } from 'react';
import { Link } from 'react-router-dom';
import './SignUIp.css';
const SignUp = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const[error, setError] = useState('');

    const handleEmailBlur = evn =>{
        setEmail(evn.target.value);
    }
    const handlePasswordBlur = evn =>{
        setPassword(evn.target.value);
    }
    const handleConfirmPasswordBlur = evn =>{
        setConfirmPassword(evn.target.value);
    }
    const handleCreateUser = event =>{
        event.preventDefault();
        if(password !== confirmPassword) {
            setError('Your password did not matched')
            return;
        }
    }
    return (
        <div className='form-container'>
            <div>
                <h2 className='form-title'>Sign up</h2>
                <form onSubmit={handleCreateUser}>
                    <div className="input-group">
                        <label htmlFor="email">Email</label>
                        <input onBlur={handleEmailBlur} type="email" name="email" id="" required/>
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">Password</label>
                        <input onBlur={handlePasswordBlur} type="password" name="password" id="" required/>
                    </div>
                    <div className="input-group">
                        <label htmlFor="confirm-password">confirm Password</label>
                        <input onBlur={handleConfirmPasswordBlur} type="password" name="confirm-password" id="" required/>
                    </div>
                    <p style={{color:"red"}}>{error}</p>
                    <input className='form-submit' type="submit" value="SignUp" />
                </form>
                <p>
                    Al ready have an account ? <Link className='form-link' to="/login"> (Login)</Link>
                </p>
            </div>
        </div>
    );
};

export default SignUp;