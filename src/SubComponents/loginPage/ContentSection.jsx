import React, { useState } from "react"
import InputField from "./InputField"
import Email from "../../assets/email.svg"
import Lock from "../../assets/lock.svg"

import { Link } from "gatsby"
import styled from "styled-components"

function ContentSection() {
  const [check, setCheck] = useState(false)

  function handleCheck() {
    setCheck(!check)
  }

  const colorOne = {
    background: "#B4C0D6",
  }

  const shapeOne = {
    borderRadius: "22px 22px 0px 0px",
    background: "rgba(34, 69, 135, 0.34)",
  }

  const colorTwo = {
    background: "#97A7C7",
  }

  const shapeTwo = {
    borderRadius: "0px 0px 22px 22px",
    background: "rgba(34, 69, 135, 0.47)",
  }

  const StyledLink = styled(props => <Link {...props} />)`
    color: #3c73c6;
    text-decoration: none;
  `

  return (
    <div className="login__content">
      {" "}
      <h1 className="login__content--heading">Welcome Back</h1>{" "}
      <p className="login__content--note">
        {" "}
        To stay connected Please login with your personal information by email
        address and password{" "}
      </p>{" "}
      <div className="login__input" style={shapeOne}>
        {" "}
        <InputField
          title="Email Address"
          inputStyle={colorOne}
          icon={Email}
          iconAlt="Email"
          type="email"
          placeholder="Johndoe@gmail.com"
        />{" "}
      </div>{" "}
      <div className="login__input" style={shapeTwo}>
        {" "}
        <InputField
          title="Password"
          inputStyle={colorTwo}
          icon={Lock}
          iconAlt="Lock"
          type="password"
          placeholder="000000"
        />{" "}
      </div>{" "}
      <div className="login__flex">
        {" "}
        <div
          className="login__flex--checkbox"
          style={{
            color: check && "#224587",
          }}
        >
          {" "}
          <input
            onClick={handleCheck}
            type="checkbox"
            id="rememberMe"
            name="rememberMe"
          />{" "}
          <label className="login__flex--checkbox--label" for="rememberMe">
            {" "}
            Remember Me{" "}
          </label>{" "}
        </div>{" "}
        <p className="login__flex--forgotPassword">Forgot Password ?</p>{" "}
      </div>{" "}
      <div className="login__flex--btn">
        {" "}
        <button className="login__flex--btn-login" type="submit">
          {" "}
          Login{" "}
        </button>{" "}
        <button className="login__flex--btn-register">
          {" "}
          <StyledLink to="/register">Create Account</StyledLink>{" "}
        </button>{" "}
      </div>{" "}
    </div>
  )
}

export default ContentSection
