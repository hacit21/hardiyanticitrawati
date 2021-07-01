import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"

import "@scss/homepage.scss"

const Homepage = () => {
  return (
    <div className="homepage">
      <p className="name">Hardiyanti Citrawati</p>
      <div className="hello">Hello dear! I am Frontend Engineer.</div>
      <StaticImage
        src="../../public/images/profile.jpg"
        width={200}
        height={300}
        quality={95}
        alt="It's me"
        style={{
          display: "flex",
          marginTop: "-80px",
          marginLeft: "40%",
          alignItems: "center",
          borderRadius: "6px",
          zIndex: "-1",
          height: "200px",
          width: "150px",
        }}
      />
      <div className="based-on">Based on</div>
      <div className="based-on">Jakarta / Indonesia</div>
      <div className="based-on">Jakarta / Indonesia</div>
      <div className="based-on">Jakarta / Indonesia</div>
      <div className="based-on">Jakarta / Indonesia</div>

    </div>
  )
}

export default Homepage