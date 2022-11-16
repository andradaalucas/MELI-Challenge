import React from 'react'
import CardStyle from './Card.module.css'


function Card({products = []}) {
  return (
    <div>
      {products.map((item ,index) => (
        <div key={index}>
          <div>
            <img src={item.picture} alt="imagen no disponible"/>
            <h4>{item.title}</h4>
            <h4>${item.price.amount}</h4>
          </div>
        </div>
      ))
        
      }
    </div>
  )
}

export default Card