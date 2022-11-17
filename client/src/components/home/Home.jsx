import React,{ useEffect, lazy, Suspense} from 'react';
import NavBar from '../navBar/NavBar';
// import Card from '../card/Card'
import Banner from '../banner/Banner';
import Categories from '../categories/Categories';
import {getProductsDefult, clearHome} from '../../redux/action';
import {useDispatch, useSelector} from 'react-redux';
import HomeStyle from './Home.module.css'
const Card = lazy (() => import("../card/Card"))




function Home() {
  const dispatch = useDispatch()
  const productsDefault = useSelector((state) => state.productsDefault)
  useEffect(() => {
    dispatch(getProductsDefult())
    // return () =>{
    //   dispatch(clearHome())
    // }
  }, [dispatch])
  

  

  return (
  <>{
    productsDefault?

    (<>
    <NavBar/>
    <Banner/>
    <Categories categories={productsDefault.categories}/>
    <Suspense fallback={<span className = {HomeStyle.loader}></span>}>
       <Card products={productsDefault.items}/>
    </Suspense>
    </>)
    :
    (<h1></h1>)
  }   
</>)
  
}

export default Home