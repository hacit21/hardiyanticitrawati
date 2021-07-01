import * as React from "react"

import "@scss/hamburger.scss"

const Hamburger = () => {
  return (
    <label>
      <input type="checkbox" />
      <span className="menu">
        <span className="hamburger" />
      </span>
      <ul>
        <li>asd</li>
        <li>zxc</li>
      </ul>
    </label>
  )
}

export default Hamburger