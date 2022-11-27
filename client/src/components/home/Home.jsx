import React, { useEffect, lazy, Suspense } from "react";
import NavBar from "../navBar/NavBar";
import Banner from "../banner/Banner";
import Categories from "../categories/Categories";
import { getProductsDefult } from "../../redux/action";
import { useDispatch, useSelector } from "react-redux";
import HomeStyle from "./Home.module.css";

//Hago una importancion diferida porque va tardar en renderizarse
const Card = lazy(() => import("../card/Card"));

function Home() {
  const dispatch = useDispatch();
  //Guardo el estado en una variable para despues pasar el estado por props a los componentes
  const productsDefault = useSelector((state) => state.productsDefault);

  //Cuando se monta el componente despacho la funcion para traerme los productos
  useEffect(() => {
    dispatch(getProductsDefult());
  }, [dispatch]);

  return (
    <>
      {productsDefault ? (
        <>
          <NavBar />
          <Banner />
          <Categories categories={productsDefault.categories} />
          <Suspense fallback={<span className={HomeStyle.loader}></span>}>
            <Card products={productsDefault.items} />
          </Suspense>
        </>
      ) : (
        <p>Espera...</p>
      )}
    </>
  );
}

export default Home;
