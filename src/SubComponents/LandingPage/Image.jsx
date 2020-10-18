import React from "react"
//images
import BgImg from "../../assets/bg-vector.svg"
import BlueImg from "../../assets/blue-vector-svg.svg"

function Image({ src }) {
  return (
    <div className="body__img">
      <div className="body__img--layer">
        <img src={BgImg} alt="bg-template" className="body__img--grey-temp" />
        <img
          src={BlueImg}
          alt="blue-template"
          className="body__img--blue-temp"
        />
        <img
          src={src}
          alt="people-template"
          className="body__img--people-img"
        />
      </div>
    </div>
  )
}

export default Image
