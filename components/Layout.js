import React, { Component } from "react"
import { initGA, logPageView } from "./googleAnalytics.js"
import Head from 'next/head'

export default class Layout extends Component {
  componentDidMount() {
    if (!window.GA_INITIALIZED) {
      initGA()
      window.GA_INITIALIZED = true
    }
    logPageView()
  }

  render() {
    return (
      <div>
        <Head>
          <link href="/styles/main/styles.css" rel="stylesheet" />
        </Head>
        <div>
          {this.props.children}
        </div>
      </div>
    )
  }
}