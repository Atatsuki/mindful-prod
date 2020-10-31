import React from "react"
import ContentSection from "./ContentSection"
import Images from "./Images"

function Body() {
  return (
    <section className="login">
      <div className="login__grid">
        <Images />
        <ContentSection />
      </div>
    </section>
  )
}
export default Body
