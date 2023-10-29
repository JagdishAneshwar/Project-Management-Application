import React from 'react'
import "./_card.scss"

const Card = ({img, header, value}) => {
  return (
    <div className='card-wrapper d-flex flex-row'>
        <img className='card-img' src={img} alt="card-logo" />
        <div className='card-info'>
            <h5 className='card-header'>{header}</h5>
            <p className='card-value'>{value}</p>
        </div>
    </div>
  )
}

export default Card