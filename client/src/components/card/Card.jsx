import React from 'react'
import CardStyle from './Card.module.css'
import {Link} from 'react-router-dom'


function Card({products = []}) {
  const productsSlice = products.slice(0, 20)
  return (
    <div>
      {productsSlice.map((item ,index) => (
        <div className={CardStyle.container}>
            <Link to={`/details/${item.id}`} className={CardStyle.link}>
          <div className={CardStyle.card} key={index}>
            <div className={CardStyle.img}>
              <img className ={CardStyle.picture}src={item.picture} alt="imagen no disponible"/>
            </div>
            <div className={CardStyle.containerItems}>
              <h2 className={CardStyle.titleCard}>{item.title}</h2>
    
                <span className={CardStyle.priceCard}>${item.price.amount}</span>
                <span className={CardStyle.condition}>{item.condition === "new" ? "Nuevo" : false }</span>
            </div>
          </div>
            </Link>
        </div>
      ))
      }
    </div>
  )
}

export default Card