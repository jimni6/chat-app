import React from 'react'
import Add from '../assets/add.svg'
import MenuDots from '../assets/menu-dots.svg'
import Videocamera from '../assets/videocamera.svg'
import Messages from './Messages'
import Input from './Input'

const Chat = () => {
  return (
    <div className="chat">
      <div className="chatInfo">
        <span>Jane</span>
        <div className="chatIcons">
          <img src={Add} alt="Icon for adding something" />
          <img src={Videocamera} alt="Icon for start a visio" />
          <img src={MenuDots} alt="Icon for extrasettings" />
        </div>
      </div>
      <Messages />
      <Input />
    </div>
  )
}

export default Chat
