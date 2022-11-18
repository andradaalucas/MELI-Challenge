import React from 'react'
import CardStyle from './Card.module.css'
import {Link} from 'react-router-dom'


function Card({products = []}) {
  // Utilizo el metodo slice simplemente para no mostrar 50 cartas y mostrar solo 20
  return (
    <div>
      {/* Mapeo para obtener las propiedades del arreglo */}
      {products.map((item ,index) => (
        <div className={CardStyle.container} key={index}>
            <Link to={`/details/${item.id}`} className={CardStyle.link}>
          <div className={CardStyle.card} >
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

export default Card;