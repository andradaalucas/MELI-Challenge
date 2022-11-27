import React, { useEffect } from "react";
import DetailsStyle from "./Details.module.css";
import { getProductDetails } from "../../redux/action";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import NavBar from "../navBar/NavBar";
import Categories from "../categories/Categories";

function Details() {
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    //Despacho la funcion getProductDetails con el id capturado
    dispatch(getProductDetails(id));
  }, [dispatch, id]);

  //Me guardo el estado productDetail en una variable
  const productUnique = useSelector((state) => state.productDetail);

  return (
    <>
      {productUnique ? (
        <div>
          {/* Renderizo componente nav */}
          <NavBar />
          <div className={DetailsStyle.renderCategory}>
            <Categories categories={productUnique.category} />
          </div>
          {/* Renderizo todos los detalles que se van a mostrar */}
          <div className={DetailsStyle.containerProduct}>
            <div>
              <img
                className={DetailsStyle.picture}
                src={productUnique.item?.picture[0]}
                alt="imagen del producto"
              />
            </div>
            <div>
              <h2 className={DetailsStyle.titleDetail}>
                {productUnique.item?.title}
              </h2>
              <span className={DetailsStyle.condition}>
                {productUnique.item?.condition === "new" ? "Nuevo" : false}
              </span>
              <h5 className={DetailsStyle.priceDetail}>
                ${productUnique.item?.price.amount}
              </h5>
              <div className={DetailsStyle.containerButtons}>
                <button className={DetailsStyle.buttonBuy}>Comprar</button>
                <button className={DetailsStyle.buttonSave}>
                  Agregar al carrito
                </button>
              </div>
            </div>
          </div>
          <div className={DetailsStyle.containerDescription}>
            <h3 className={DetailsStyle.description}>Descripción</h3>
            <p className={DetailsStyle.descriptionText}>
              {productUnique.item?.description}
            </p>
          </div>
        </div>
      ) : (
        // En caso de que no este disponible el estado productUnique se tendria que mostrar este mensaje
        <p>Espera...</p>
      )}
      ;
    </>
  );
}

export default Details;
