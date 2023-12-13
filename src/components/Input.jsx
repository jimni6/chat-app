import React from 'react'
import Paperclip from '../assets/paperclip.svg'
import AddImgGreen from '../assets/addImgGreen.svg'

const Input = () => {
  return (
    <div className="inputChat">
      <img src={Paperclip} alt="" />
      <input type="file" style={{ display: "none" }} id="file" />
      <label htmlFor="file">
        <img src={AddImgGreen} alt="" />
      </label>
      <input type="text" placeholder="Votre message ici..."/>
      <button className="sendMessageButton"type="submit">Envoyer</button>
    </div>
  )
}

export default Input