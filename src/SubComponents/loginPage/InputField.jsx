import React from "react"
import Check from "../../assets/check.svg"

function InputField({ icon, iconAlt, inputType, placeholder, inputStyle }) {
  return (
    <div className="login__input--flex">
      <div className="login__input--icon">
        <img src={icon} alt={iconAlt} />
      </div>
      <div className="login__input--field">
        <input style={inputStyle} type={inputType} placeholder={placeholder} />
      </div>
      <div className="login__input--validation">
        <img src={Check} alt="check" />
      </div>
    </div>
  )
}

export default InputField
