import React from 'react'
import s from './index.module.css'
import number from '../../images/number.png'
import cactus from '../../images/cactus.png'
import Footer from '../../components/Footer'
import { Link } from 'react-router-dom'

export default function NotFoundPage() {
  
  return (
    <div className={s.section}>
      <div className={s.container}>
        <div>
          <img src={number} alt="number" />
          <img src={cactus} alt="cactus" />
          <img src={number} alt="number" />
        </div>

        <div className={s.error_message}>
          <h2>Page Not Found</h2>
          <p>
            We're sorry, the page you requested could not be found.
            <br />
            Please go back to the homepage.
          </p>
       
          <Link to='/'>Go Home</Link>
                 
        </div>

      </div>

      <Footer />
    </div>

  )
}
