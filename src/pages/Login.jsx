import React from 'react'

export const Login = () => {
    return (
        <div className="formContainer">
            <div className="formWrapper">
                <span className="logo">MaChat'</span>
                <h1 className="title">Veuillez vous connecter</h1>
                <form className="formRegister">
                    <input type="email" placeholder="Email" />
                    <input type="password" placeholder="Mot de passe" />
                    <button className='formButton'>C'est parti!</button>
                </form>
                <p>Vous n'avez pas de compte? Créer</p>
            </div>
        </div>
    )
}
