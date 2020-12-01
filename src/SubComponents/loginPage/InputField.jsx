import React, { useState } from "react"
import Check from "../../assets/check.svg"

function InputField({
  icon,
  iconAlt,
  inputType,
  placeholder,
  inputStyle,
  title,
}) {
  const [input, setInput] = useState("")
  const [display, setDisplay] = useState(false)

  function handleInput(e) {
    const val = e.target.value
    setInput(val)

    if (val !== "") {
      setDisplay(true)
    } else if (val === "") {
      setDisplay(false)
    }
  }

  return (
    <div className="login__input--flex">
      <div className="login__input--icon">
        <img src={icon} alt={iconAlt} />
      </div>
      <div className="login__input--field">
        <p className="login__input--field-p">{title}</p>
        <input
          value={input}
          onChange={handleInput}
          style={inputStyle}
          type={inputType}
          placeholder={placeholder}
        />
      </div>
      <div className="login__input--validation">
        <img
          style={{ visibility: display && "visible" }}
          src={Check}
          alt="check"
        />
      </div>
    </div>
  )
}

export default InputField
