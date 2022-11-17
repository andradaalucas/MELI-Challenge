import React,{useEffect} from 'react';
import DetailsStyle from './Details.module.css'
import {getProductDetails} from "../../redux/action";
import {useDispatch, useSelector} from "react-redux";
import {useParams} from "react-router-dom";
import NavBar from '../navBar/NavBar';

function Details() {
  const {id} = useParams()
  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(getProductDetails(id))
    // return () => {
    //   dispatch(clear())
    // }
  },[dispatch,id])


  const productUnique = useSelector((state) => state.productDetail)

  return (
    <>
    {
      productUnique?
    
    (<div>
      <NavBar/>
      <div className={DetailsStyle.renderCategory}>
        {
          productUnique.category?.map( (category, index) => (
            <div key={index} className={DetailsStyle.containerCategory}>
              <span className={DetailsStyle.category}>{category}</span>
            </div>
          ) )
        }
      </div>
      <div className={DetailsStyle.container}>
        <div>
          <img src={productUnique.item?.picture[0]} alt="imagen del producto" />
        </div>
        <div>
          <h2 className={DetailsStyle.titleDetail}>{productUnique.item?.title}</h2>
          <h5 className={DetailsStyle.priceDetail}>${productUnique.item?.price.amount}</h5>
          <div className={DetailsStyle.containerButtons}>
          <button className={DetailsStyle.buttonBuy}>Comprar</button>
          <button className={DetailsStyle.buttonSave}>Agregar al carrito</button>
        </div>
      </div>
      </div>
        <div className={DetailsStyle.containerDescription}>
        <h3 className={DetailsStyle.description}>Descripción</h3>
        <p  className={DetailsStyle.descriptionText}>{productUnique.item?.description}</p>
        </div>
    </div>)
      : (<h1>Cargando...</h1>)
  }
  </>
  )
}

export default Details