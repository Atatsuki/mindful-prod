import React from "react"
import List from "./List"
import Image from "./Image"
import Data from "../../data/LandingPageData"
// image
import PeopleImg from "../../assets/people-vector.svg"
import PeopleTwo from "../../assets/people-two.svg"

const data = Data

function Body() {
  return (
    <section className="body">
      <h1 className="body__title">"Lorem ipsum dolo</h1>
      <div className="body__flex">
        <List
          ul={data[0].ul}
          li_one={data[0].li_one}
          li_two={data[0].li_two}
          li_three={data[0].li_three}
          cta={data[0].cta}
        />
        <Image src={PeopleImg} />
      </div>
      <div className="body__flex">
        <Image src={PeopleTwo} />
        <List
          ul={data[1].ul}
          li_one={data[1].li_one}
          li_two={data[1].li_two}
          li_three={data[1].li_three}
          cta={data[1].cta}
        />
      </div>
    </section>
  )
}

export default Body
