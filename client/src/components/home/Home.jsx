import React,{useState, useEffect} from 'react';
import HomeStyle from './Home.module.css';
import NavBar from '../navBar/NavBar';
import Card from '../card/Card'
import axios from "axios";
import Banner from '../banner/Banner';





const initialUrl = 'http://localhost:3001/api/items'



function Home() {
  const[products, setProducts] = useState([]);


  const allProducts = async (initialUrl) => {
    await axios.get(initialUrl)
    .then(response => response.data.items)
    .then(data =>setProducts(data))
    .catch(error => console.log(error))
  }

  useEffect(() => {
    allProducts(initialUrl)
  }, [])
  



  return (
  <>
    <NavBar/>
    <Banner/>
    <Card products={products}/>
  </>)
  
}

export default Home