import React from "react"
import Circle from "../assets/logo-c.svg"
import Brain from "../assets/brain.svg"

function Logo() {
  return (
    <div className="header__logos">
      <div className="flex">
        <img className="header__logos--one" src={Circle} alt="app logo" />
        <img className="header__logos--two" src={Brain} alt="app logo" />
        <p>indful</p>
      </div>
    </div>
  )
}

export default Logo
