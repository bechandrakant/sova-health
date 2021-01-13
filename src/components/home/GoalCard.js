import React from 'react'

const GoalCard = ({ imgUrl, title, description }) => {
  return (
    <div className="goals-card-container">
      <img src={imgUrl} alt={title} />
      <h5>{title.toUpperCase()}</h5>
      <p>{description}</p>
    </div>
  )
}

export default GoalCard
