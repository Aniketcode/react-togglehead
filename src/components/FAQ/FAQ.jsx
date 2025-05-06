import React,{useState} from 'react'
import style from './faq.module.css';
import {faqData} from '../../data/faq-data';
const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(index === openIndex ? null : index);
  };
  return (
    <section className={style.faqContainer}>
      <h2 className={style.faqHeading}>FAQ</h2>
      {faqData?.map((faq, index) => (
        <div className={style.faqItem} key={index}>
          <div className={style.question} onClick={() => toggleFAQ(index)}>
            <span>{faq.question}</span>
            <span className={style.icon}>{openIndex === index ? '−' : '+'}</span>
          </div>
          {openIndex === index && (
            <div className={style.answer}>
              {faq?.answer}
            </div>
          )}
        </div>
      ))}
    </section>
  )
}

export default FAQ
