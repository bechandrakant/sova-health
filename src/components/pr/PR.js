import React from 'react'
import Title from '../title/Title';

const PR = ({ title, images }) => {
  return (
    <div className="container center" style={{ marginBottom: 40 }}>
      <Title title={title} />
      <div className="img-container">
        {
          images.map(image => {
            return <img key={image} src={image} alt="logo" />
          })
        }
      </div>
    </div>
  )
}

export default PR
