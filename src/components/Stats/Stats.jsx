import React from 'react'
import style from './stats.module.css';
import { statsData } from '../../data/stats-data';
const Stats = () => {
  return (
    <section className={style.container}>
      <div className={style.grid}>
        {statsData?.map((item, index) => (
          <div key={index} className={style.card}>
            <p className={style.title}>{item?.title}</p>
            <h2 className={style.value}>{item?.value}</h2>
            <p className={style.subtitle}>{item?.subtitle}</p>
            <p className={style.description}>{item?.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Stats
