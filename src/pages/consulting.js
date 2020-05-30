import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Consulting = () => (
  <Layout>
    <SEO title="Consulting" />
    <h1>This is the Consulting page</h1>
    <p>Here are all of Rotem's partners</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default Consulting
