import React from 'react';
import NavStyle from './NavBar.module.css';
import {Link} from 'react-router-dom'

function NavBar() {
  return (
    <div className={NavStyle.body}>
      <div className={NavStyle.container}>
      <div className={NavStyle.containerLogo}>
        <a href="http://localhost:3000/home">
         <img src={"https://http2.mlstatic.com/frontend-assets/ml-web-navigation/ui-navigation/5.21.3/mercadolibre/logo__large_plus.png"} alt="Icono Mercado Libre" />
        </a>
      </div>
        <form className={NavStyle.form}>
        <input className={NavStyle.inputForm} placeholder ="Buscar productos, marcas y más..."></input>
        <button>
          <img src="https://cdn-icons-png.flaticon.com/512/2811/2811806.png" height="20px" width="20px" alt="prueba" />
        </button>
        </form>
        <a href="https://www.mercadolibre.com.ar/suscripciones/nivel-6#origin=banner-menu&me.content_id=bannermenu_n6_generico&me.component_id=banner_menu_web_ml&me.logic=campaigns&me.position=0&me.bu_line=36&me.flow=-1&me.bu=9&me.audience=all" target="_blank">
          <img src={"https://http2.mlstatic.com/D_NQ_705864-MLA51389335798_092022-OO.webp"} height="39px" width="340px"  alt="DisneyPlus" />
        </a>
      </div>
    </div>
  )
}

export default NavBar