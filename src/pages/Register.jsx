import React from 'react'
import Add from '../assets/addImg.svg'

export const Register = () => {
    return (
        <div className="formContainer">
            <div className="formWrapper">
                <span className="logo">MaChat'</span>
                <h1 className="title">Création d'un nouveau compte</h1>
                <form className="formRegister">
                    <input type="text" placeholder="Nom d'utilisateur" />
                    <input type="email" placeholder="Email" />
                    <input type="password" placeholder="Mot de passe" />
                    <input style={{display: "none"}}type="file" id="file"/>
                    <label className="addAvatarContainer" htmlFor="file">
                        <img className="addImg" src={Add} alt=''/>
                        <span className="spanAvatar" >Ajouter une image</span>
                    </label>
                    <button className='formButton'>C'est parti!</button>
                </form>
                <p>Vous avez déjà un compte? S'identifier</p>
            </div>
        </div>
    )
}
