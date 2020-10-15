import React from "react"
import Footer from "../components/Footer"
import Header from "../components/Header"
import "../styles/app.scss"

function DefaultLayout({ children }) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  )
}

export default DefaultLayout
