import React from 'react'
import style from './upcomingexams.module.css';
import { exams } from '../../data/exam-data';
const UpcomingExams = () => {
  return (
    <div className={style.container}>
    <div className={style.grid}>
      <div className={style.left}>
        <h2 className={style.heading}>
          Upcoming<br />Examinations
        </h2>
        <p className={style.subtext}>
          Enquire about the examination &<br />register for the exams
        </p>
      </div>

      <div className={style.right}>
        {exams?.map((exam, idx) => (
          <div key={idx} className={style.card}>
            <div className={style.date}>
               📅 
              <span>{exam?.date}</span>
            </div>
            <div className={style.title}>{exam?.title}</div>
            {exam.subtitle1 && <div className={style.subtitle}>{exam?.subtitle1}</div>}
            {exam.subtitle2 && <div className={style.subtitle}>{exam?.subtitle2}</div>}
          </div>
        ))}
      </div>
    </div>
  </div>
  )
}

export default UpcomingExams
