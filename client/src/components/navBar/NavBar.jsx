import React, { useState } from "react";
import NavStyle from "./NavBar.module.css";
import { useDispatch } from "react-redux";
import { getProductsBySearch } from "../../redux/action";
import { useHistory } from "react-router-dom";
import bannerDisney from "../../assets/disneypmeli.webp";
import searchIcon from "../../assets/searchicon.png";
import logoMeli from "../../assets/logo__large_plus.png";

function NavBar() {
  const dispatch = useDispatch();
  const history = useHistory();

  //Me creo un estado local para guardar la info del input
  const [search, setSearch] = useState("");

  //Creo una funcion para capturar todo lo que este en el  input y seteo el estado
  function handleChange(e) {
    setSearch(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(getProductsBySearch(search));
    //Una vez submiteado ejecuto history .push y le especifico la ruta ("/") porque si no va a quedar en la ruta detalles
    history.push("/");
  }
  return (
    <div className={NavStyle.bodyNavBar}>
      <div className={NavStyle.containerNavBar}>
        <div className={NavStyle.containerLogo}>
          <a href="http://localhost:3000/">
            <img src={logoMeli} alt="Icono Mercado Libre" />
          </a>
        </div>
        <form className={NavStyle.form}>
          <input
            className={NavStyle.inputForm}
            placeholder="Buscar productos, marcas y más..."
            onChange={handleChange}
          ></input>
          <button
            onClick={(e) => handleSubmit(e)}
            className={NavStyle.buttonSubmit}
          >
            <img src={searchIcon} height="20px" width="20px" alt="prueba" />
          </button>
        </form>
        <a href="https://www.mercadolibre.com.ar/suscripciones/nivel-6#origin=banner-menu&me.content_id=bannermenu_n6_generico&me.component_id=banner_menu_web_ml&me.logic=campaigns&me.position=0&me.bu_line=36&me.flow=-1&me.bu=9&me.audience=all">
          <img
            src={bannerDisney}
            height="39px"
            width="340px"
            alt="DisneyPlus"
          />
        </a>
      </div>
    </div>
  );
}

export default NavBar;
