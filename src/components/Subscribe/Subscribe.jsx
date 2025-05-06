import React from 'react'
import style from './subscribe.module.css';
const Subscribe = () => {
  return (
    <div className={style.subscribeContainer}>
    <div className={style.leftSection}>
      <h2 className={style.heading}>Subscribe</h2>
      <p className={style.description}>
        Lorem ipsum dolor sit amet, consectetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna
      </p>
      <div className={style.form}>
        <input type="email" placeholder="Enter your Email Address" className={style.input} />
        <button className={style.button}>Subscribe Now ▶</button>
      </div>
    </div>
    <div className={style.rightSection}>
      <img src='/images/sms.jpg' alt="Subscribe Illustration" className={style.image} />
    </div>
  </div>
  )
}

export default Subscribe
