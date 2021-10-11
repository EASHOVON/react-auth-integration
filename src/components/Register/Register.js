import React from 'react';
import { Link } from 'react-router-dom';

const Register = () =>
{
    return (
        <div>
            <h2>Please Register</h2>
            <form>
                <input type="email" placeholder="Enter Your E-mail" />
                <br />
                <input type="password" placeholder="Enter Your Password" />
                <br />
                <input type="submit" value="Submit" />
            </form>
            <Link to="/login">Already Registered?</Link>
        </div>
    );
};

export default Register;