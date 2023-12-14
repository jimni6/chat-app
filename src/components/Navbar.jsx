import React from 'react'
import { signOut } from 'firebase/auth'
import { auth } from '../firebase'

const Navbar = () => {
  return (
      <div className="navbar">
        <span className="logo">MaChat'</span>
        <div className="user">
          <img src="https://images.pexels.com/photos/16947685/pexels-photo-16947685/free-photo-of-noir-et-blanc-homme-couple-femme.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load" alt="" />
          <span>John</span>
          <button onClick={()=>signOut(auth)} >Logout</button>
        </div>
      </div>
    )
}

export default Navbar