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
      <div className="header__container">
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
              <li className="header__links--li">
                <a href="/login">Login</a>
              </li>
            </ul>
          </div>
          <div
            onClick={handleClick}
            onKeyDown={handleClick}
            role="menuitem"
            tabIndex={0}
            className="header__icon"
          >
            {state ? <CloseIcon /> : <MenuIcon />}
          </div>
        </div>
        <div className="header__content">
          <h1 className="header__content--title">We Care</h1>
          <p className="header__content--desc">
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
            mercitation
          </p>
          <button className="header__content--cta">Register</button>
        </div>
      </div>
    </header>
  )
}

export default Header
