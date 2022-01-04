import * as React from "react"

import About from "../components/about"
import Contact from "../components/contact"
import Layout from "../components/layout"
import Projects from "../components/projects"
import Seo from "../components/seo"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <About />
    <Projects />
    <Contact />
  </Layout>
)

export default IndexPage
