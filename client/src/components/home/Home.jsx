import React,{ useEffect} from 'react';
import NavBar from '../navBar/NavBar';
import Card from '../card/Card'
import Banner from '../banner/Banner';
import Categories from '../categories/Categories';
import {getProductsDefult, clearHome} from '../../redux/action';
import {useDispatch, useSelector} from 'react-redux';
import HomeStyle from './Home.module.css'





function Home() {
  const dispatch = useDispatch()
  const productsDefault = useSelector((state) => state.productsDefault)
  useEffect(() => {
    dispatch(getProductsDefult())
    return () =>{
      dispatch(clearHome())
    }
  }, [dispatch])
  

  

  return (
  <>{
    productsDefault?

    (<>
    <NavBar/>
    <Banner/>
    <Categories categories={productsDefault.categories}/>
    <Card products={productsDefault.items}/>
    </>)
    :
    (<p>cargando</p>)
  }   
</>)
  
}

export default Home