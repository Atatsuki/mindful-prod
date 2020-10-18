import React from "react"
import DefaultLayout from "../layouts/DefaultLayout"
import Body from "../SubComponents/LandingPage/Body"
//import { Link } from "gatsby"

function index() {
  return (
    <DefaultLayout>
      <div>
        <Body />
      </div>
    </DefaultLayout>
  )
}
export default index
