import React from 'react'

const Header = (props) => {
  return (
    <header className="Header">
      <div className="Header__container">
        <div className="Header__container-bg">
          <img src={props.image} alt="Header background"></img>
        </div>

        <div className="Header__content">
          <h2>{props.title}</h2>
          <p>{props.children}</p>
        </div>
      </div>
    </header>
  )
}

export default Header;