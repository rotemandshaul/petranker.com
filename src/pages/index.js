import React from "react"
// import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div>
      <h1>Rotem Petranker</h1>
      <p>
        Clinical psychology PhD student, Associate Director, Center for
        Psychedelic Studies at the University of Toronto
      </p>
      <div style={{ maxWidth: `250px`, marginBottom: `1.45rem` }}>
        <Image />
      </div>
    </div>
  </Layout>
)

export default IndexPage
