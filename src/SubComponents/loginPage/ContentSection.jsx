import React from "react"
import { Checkbox } from "@material-ui/core"
import InputField from "./InputField"
import Email from "../../assets/email.svg"
import Lock from "../../assets/lock.svg"

function ContentSection() {
  const colorOne = {
    background: "rgba(34, 69, 135, 0.34)",
  }

  const colorTwo = {
    background: "rgba(34, 69, 135, 0.47)",
  }

  return (
    <div className="login__content">
      <h1 className="login__content--heading">Welcome Back</h1>
      <p className="login__content--note">
        To stay connected Please login with your personal information by email
        address and password
      </p>

      <div className="login__input" style={colorOne}>
        <InputField
          inputStyle={colorOne}
          icon={Email}
          iconAlt="Email"
          type="email"
          placeholder="Email Address"
        />
      </div>
      <div className="login__input" style={colorTwo}>
        Password
        <InputField
          inputStyle={colorTwo}
          icon={Lock}
          iconAlt="Lock"
          type="password"
          placeholder="0000"
        />
      </div>

      <div className="login__flex">
        <Checkbox>Remember me</Checkbox>
        <p>Forgot Password ?</p>
      </div>

      <div className="login__flex--btn">
        <button>Login</button>
        <button>Create Account</button>
      </div>
    </div>
  )
}

export default ContentSection
