import React from 'react'
import SingleTour from "./SingleTour"
import styles from "../../css/items.module.css"

const Tour = ({ tours }) => {
  // access to tours from original page query
  console.log(tours) // an array of tour objects [{tour},{tour}]
  return (
    <section className={styles.tours}>
      These are our tours
      <div className={styles.center} >
        {tours.map(({ node }) => {
          // destructure node from tours array,
          return <SingleTour key={node.contentful_id} tour={node} />
        })}
      </div>
    </section>
  )
}

export default Tour
