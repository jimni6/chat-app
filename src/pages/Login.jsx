import React from 'react'
import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../firebase';


export const Login = () => {

    const [err, setErr] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const email = e.target[0].value;
        const password = e.target[1].value;

        try {
            await signInWithEmailAndPassword(auth, email, password)
            navigate("/");
        } catch (err) {
            setErr(true)
        }
    }

    return (
        <div className="formContainer">
            <div className="formWrapper">
                <span className="logo">MaChat'</span>
                <h1 className="title">Veuillez vous connecter</h1>
                <form onSubmit={handleSubmit} className="formRegister">
                    <input type="email" placeholder="Email" />
                    <input type="password" placeholder="Mot de passe" />
                    <button className='formButton'>C'est parti!</button>
                    {err && <span> Quelque chose n'a pas fonctionné</span>}
                </form>
                <p>Vous n'avez pas de compte? <Link to="/register">Créer</Link></p>
            </div>
        </div>
    )
}
