import React, { useState } from "react"
import MenuIcon from "@material-ui/icons/Menu"
import CloseIcon from "@material-ui/icons/Close"

import Nav from "../SubComponents/Nav"

function Header() {
  const [state, setState] = useState(false)

  function handleClick() {
    setState(!state)
  }

  return (
    <header>
      <div className="header">
        <Nav />
        <div className="header__links">
          <ul
            className="header__links--ul"
            style={{ transform: state && "translateX(0)" }}
          >
            <li className="header__links--li">Home</li>
            <li className="header__links--li">FAQS</li>
            <li className="header__links--li">About</li>
            <li className="header__links--li">Login</li>
          </ul>
        </div>
        <div onClick={handleClick} role="menuitem" className="header__icon">
          {state ? <CloseIcon /> : <MenuIcon />}
        </div>
      </div>
    </header>
  )
}

export default Header
