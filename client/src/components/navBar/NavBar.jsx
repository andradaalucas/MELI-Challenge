import React from 'react';
import NavStyle from './NavBar.module.css';

function NavBar() {
  return (
    <div className={NavStyle.body}>
      <div className={NavStyle.container}>
      <div className={NavStyle.containerLogo}>
        <img src={"https://http2.mlstatic.com/frontend-assets/ml-web-navigation/ui-navigation/5.21.3/mercadolibre/logo__large_plus.png"} alt="Icono Mercado Libre" />
      </div>
        <form className={NavStyle.form}>
        <input className={NavStyle.inputForm} placeholder ="Buscar productos, marcas y más..."></input>
        <button>
          <img src="https://cdn-icons-png.flaticon.com/512/2811/2811806.png" height="20px" width="20px" alt="prueba" />
        </button>
        </form>
      <img src={"https://http2.mlstatic.com/D_NQ_705864-MLA51389335798_092022-OO.webp"} height="39px" width="340px"  alt="DisneyPlus" />
      </div>
    </div>
  )
}

export default NavBar