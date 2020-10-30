import React from "react"
import Shield from "../../assets/shield.svg"
import ContentSection from "./ContentSection"

function Body() {
  return (
    <section className="login">
      <div className="login__grid">
        <div className="login__img">
          <img src={Shield} alt="shield" />
        </div>

        <ContentSection />
      </div>
    </section>
  )
}
export default Body
