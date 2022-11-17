import React,{useEffect} from 'react';
import DetailsStyle from './Details.module.css'
import {getProductDetails, clear} from "../../redux/action";
import {useDispatch, useSelector} from "react-redux";
import {useParams} from "react-router-dom"

function Details() {
  const {id} = useParams()
  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(getProductDetails(id))
    return () => {
      dispatch(clear())
    }
  },[dispatch,id])
  


  const productUnique = useSelector((state) => state.productDetail)

  return (
    <>
    {
      productUnique?
    
    (<div>
      <h2 className={DetailsStyle.titleDetail}>{productUnique.item?.title}</h2>
      <h5 className={DetailsStyle.priceDetail}>${productUnique.item?.price.amount}</h5>
      {/* <p>{productUnique.category?}</p> */}
      <h3 className={DetailsStyle.description}>Descripción</h3>
      <p className={DetailsStyle.descriptionText}>{productUnique.item?.description}</p>
    </div>)
      : (<h1>Cargando...</h1>)
  }
  </>
  )
}

export default Details