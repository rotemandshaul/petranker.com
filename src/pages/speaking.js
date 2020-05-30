import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Speaking = () => (
  <Layout>
    <SEO title="Speaking" />

    <h1>This is the Speaking page</h1>
    <p>Here are all of Rotem's speeches</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default Speaking
