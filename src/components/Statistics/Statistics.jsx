import React from 'react'
import css from  "./Statistics.module.css"
const Statistics = ({stats, title}) => {
  return (
    <>
      <section className={css.statistics}>
      {title.length > 0 && <h2 className={css.title}>{title}</h2>}
  
      <ul className={css.statList}>
 
        {stats.map(item => {
          return <li className={css.item} key={item.id}>
            
            <span className={css.label}>{item.label}</span>
            <span className={css.percentage}>{item.percentage}%</span>
    </li>
            })}
        
  </ul>
    </section>
    </>
  )
}

export { Statistics };