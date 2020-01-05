import React from "react"
import Layout from "../components/Layout"
import styles from '../components/blog.module.css'

export default () => (
  <Layout>
    <div className={styles.blog}>
      <h1 className={styles.title}>Blog.</h1>
      <h2>TEST HEADING.</h2>
    </div>
  </Layout>
)

