import React from "react"

function List({ ul, li_one, li_two, li_three, cta }) {
  return (
    <div className="body__list">
      <h2 className="body__list--title">{ul}</h2>

      <ul className="body__li">
        <li>{li_one}</li>
        <li> {li_two}</li>
        <li> {li_three}</li>
      </ul>
      <button className="body__cta">{cta}</button>
    </div>
  )
}

export default List
