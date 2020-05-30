import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import PageHeader from "../components/pageHeader"

const Academia = () => (
  <Layout>
    <SEO title="Academic Background" />
    <PageHeader headerText="This is Rotem's Academic background" />
    <p>Here are all of Rotem's academic achievments</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default Academia
