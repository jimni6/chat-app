import React from 'react'
import { useState } from 'react';
import Add from '../assets/addImg.svg'
import { auth, storage, db } from "../firebase";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { doc, setDoc } from "firebase/firestore";

export const Register = () => {
    const [err, setErr] = useState(false);
    const handleSubmit = async (e) => {
        e.preventDefault();
        const displayName = e.target[0].value;
        const email = e.target[1].value;
        const password = e.target[2].value;
        const file = e.target[3].files[0];

        try {
            const res = await createUserWithEmailAndPassword(auth, email, password);
            const storageRef = ref(storage, displayName);
            await uploadBytesResumable(storageRef, file).then(() => {
                getDownloadURL(storageRef).then( async(downloadURL) => {
                    try {
                        await updateProfile(res.user, {
                            displayName,
                            photoUrl: downloadURL,
                        });
                        await setDoc(doc(db, "users", res.user.uid), {
                            uid: res.user.uid,
                            displayName,
                            email,
                            photoUrl: downloadURL,
                        });
                    } catch (err) {
                        setErr(true);
                    }
                });
            });   
        } catch (err) {
            setErr(true)
        }
    }
    return (
        <div className="formContainer">
            <div className="formWrapper">
                <span className="logo">MaChat'</span>
                <h1 className="title">Création d'un nouveau compte</h1>
                <form onSubmit={handleSubmit}className="formRegister">
                    <input type="text" placeholder="Nom d'utilisateur" />
                    <input type="email" placeholder="Email" />
                    <input type="password" placeholder="Mot de passe" />
                    <input style={{display: "none"}}type="file" id="file"/>
                    <label className="addAvatarContainer" htmlFor="file">
                        <img className="addImg" src={Add} alt=''/>
                        <span className="spanAvatar" >Ajouter une image</span>
                    </label>
                    <button className='formButton'>C'est parti!</button>
                    {err && <span> Quelque chose n'a pas fonctionné</span>}
                </form>
                <p>Vous avez déjà un compte? S'identifier</p>
            </div>
        </div>
    )
}
