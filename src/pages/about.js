import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
// import SEO from "../components/seo"

const About = () => (
  <Layout>
    {/* <SEO title="About" /> */}

    <h1>This is the About page</h1>
    <p>Here is everything Rotem wants you to know about him</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default About
