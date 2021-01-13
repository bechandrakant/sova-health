import React from 'react'

const PromiseCard = ({ imgUrl, title, description}) => {
  return (
    <div className="promise-card">
      <img src={imgUrl} alt={title} />
      <h3>{title.split(" ")[0]}</h3>
      <h3>{title.split(" ")[1]}</h3>
      <p>{description}</p>
    </div>
  )
}

export default PromiseCard