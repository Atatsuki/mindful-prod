import React from "react"

import Shield from "../../assets/shield.svg"
import Star from "../../assets/star.svg"
import Circle from "../../assets/circle.svg"
import Mark from "../../assets/mark.svg"
import Cross from "../../assets/cross.svg"
import OrangeCircle from "../../assets/orange-circle.svg"
import WhiteCircle from "../../assets/white-circle.svg"

function Images() {
  return (
    <div className="login__img">
      <img src={Cross} alt="Cross" />
      <img
        className="login__img--orange-circle-two"
        src={OrangeCircle}
        alt="Orange-circle"
      />
      <img
        className="login__img--white-circle"
        src={WhiteCircle}
        alt="white-circle"
      />
      <img className="login__img--last-star" src={Star} alt="Star" />
      <img className="login__img--first-star" src={Star} alt="Star" />
      <img className="login__img--circle" src={Circle} alt="Circle" />
      <img src={Shield} alt="shield" />
      <img className="login__img--mark" src={Mark} alt="Mark" />
      <img className="login__img--second-star" src={Star} alt="Star" />
      <img src={Cross} alt="Cross" />
      <img className="login__img--second-cross" src={Cross} alt="Cross" />
      <img className="login__img--third-cross" src={Cross} alt="Cross" />
      <img className="login__img--third-star" src={Star} alt="Star" />
      <img
        className="login__img--orange-circle"
        src={OrangeCircle}
        alt="Orange-circle"
      />
    </div>
  )
}

export default Images
