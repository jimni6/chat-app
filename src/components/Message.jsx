import React from 'react'

const Message = () => {
  return (
    <div className="message owner">
      <div className="messageInfo">
        <img src="https://images.pexels.com/photos/17976478/pexels-photo-17976478/free-photo-of-aube-soleil-couchant-femme-detente.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load" 
          alt=""
        />
        <span>Just now</span>
      </div>
      <div className="messageContent">
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione dolorem fugit blanditiis cupiditate architecto explicabo?</p>
        <img src="https://images.pexels.com/photos/18747169/pexels-photo-18747169/free-photo-of-blond-chemise-debout-portrait.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load" 
          alt=""
        />
      </div>
    </div>
  )
}

export default Message