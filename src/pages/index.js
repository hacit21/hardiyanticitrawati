import * as React from "react"
import { Link } from "gatsby"

import Layout from "@components/layout"
import Seo from "@components/seo"
import Homepage from "@components/homepage"
import Hamburger from "@components/hamburger"

import "@scss/variable.scss"

const IndexPage = () => (
  <Layout>
    <Seo title="Hi dear" />
    <Hamburger />
    <Homepage />

  </Layout>
)

export default IndexPage
