import React from "react"
import Logo from "../assets/logo-c.svg"
import Brain from "../assets/brain.svg"

function Nav() {
  return (
    <nav>
      <div className="header__logos">
        <div className="flex">
          <img className="header__logos--one" src={Logo} alt="app logo" />
          <img className="header__logos--two" src={Brain} alt="app logo" />
          <p>indful</p>
        </div>
      </div>
    </nav>
  )
}

export default Nav
