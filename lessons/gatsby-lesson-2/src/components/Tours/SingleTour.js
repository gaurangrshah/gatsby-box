import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import Image from 'gatsby-image';
import { FaMap } from 'react-icons/fa'
import styles from "../../css/tour.module.css"

const SingleTour = ({ tour }) => {
  // console.log(tour) // recieves each individual {tour}
  const { name, price, days, country, slug, images } = tour;
  const mainImage = images[0].fluid

  return (
    <article className={styles.tour}>
      {name}
      <div className={styles.imgContainer}>
        <Image fluid={mainImage} className={styles.img} alt={name} />
        <Link className={styles.link} to={`/tours/${slug}`}>
          details
        </Link>
      </div>
      <div className={styles.footer}>
        <h3>{name}</h3>
        <div className={styles.info}>
          <h4 className={styles.country}>
            <FaMap className={styles.icon} />
            {country}
          </h4>
          <div className={styles.details}>
            <h6>{days} days</h6>
            <h6>from {price} days</h6>
          </div>
        </div>
      </div>
    </article>
  )
}

export default SingleTour;

SingleTour.propTypes = {
  tour: PropTypes.shape({
    name: PropTypes.string.isRequired,
    country: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    days: PropTypes.number.isRequired,
    images: PropTypes.arrayOf(PropTypes.object).isRequired,
  }),
}
