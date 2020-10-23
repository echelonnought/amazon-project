import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { auth } from './firebase';
import './Login.css';

function Login() {
    const history = useHistory()
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    
    const login = event => {
        event.preventDefault()

        auth
        .signInWithEmailAndPassword(email, password)
        .then((auth) => {
           // Logged In, redirect to home page...
            history.push('/');
         })
        .catch(event => alert(event.message));
    }

    const register = event => {
        event.preventDefault();
        auth.createUserWithEmailAndPassword(email, password)
        .then((auth) => {
            // Created a user and logged in, redirect to home page...
            if(auth) {
                history.push('/');
            }
            console.log(auth)
        })
        .catch(event => alert(event.message));
    }

    return (
        <div className="login">
            <Link to="/">
                <img
                className="login_logo" 
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png" 
                alt="amazon logo" />
            </Link>

            <div className="login_container">
                    <h1>S'identifier</h1>
                    <form>
                        <h5 >Email</h5>
                        <input value={email} onChange={ event => setEmail(event.target.value)} type="email" />
                        <h5> Mot de passe</h5>
                        <input value={password} onChange={ event => setPassword(event.target.value) } type="password" />
                        <button onClick={login} type="submit" className="login_signInButton">Connecter</button>
                    </form>
                    <p>
                    En vous connectant, vous acceptez les conditions d'utilisation et de vente des Clones d'Amazon.
                        Veuillez consulter notre avis de confidentialité, notre avis sur les cookies et notre avis sur les publicités sur Internet
                    </p>
                    <button onClick={register} className="login_registerButton" >Créez votre compte Amazon</button>
                </div>
        </div>
    )
}

export default Login
