import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Media = () => (
  <Layout>
    <SEO title="Media" />

    <h1>This is the Media page</h1>
    <p>Here are all of Rotem's media appearences</p>
    <div>
      <a href="https://www.youtube.com/watch?v=RPabDletUmw">Video</a>
    </div>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default Media
