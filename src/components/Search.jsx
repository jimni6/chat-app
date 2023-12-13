import React from 'react'

const Search = () => {
  return (
    <div className="search">
      <div className="searchForm">
        <input type="text" placeholder='Cherche ton ami ici...'/>
      </div>
      <div className="userChat">
        <img src="https://images.pexels.com/photos/15977932/pexels-photo-15977932/free-photo-of-noir-et-blanc-femme-foret-manteau.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load" alt="" />
        <div className="userChatInfo">
          <span>Jane</span>
        </div>
      </div>
    </div>
  )
}

export default Search