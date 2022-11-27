import React from "react";
import CategoriesStyle from "./CategoriesStyle.module.css";
import { useDispatch } from "react-redux";
import { getProductsBySearch } from "../../redux/action";
import { useHistory } from "react-router-dom";

function Categories({ categories = [] }) {
  const dispatch = useDispatch();
  const history = useHistory();

  function handleButtons(e) {
    dispatch(getProductsBySearch(e.target.value));
    history.push("/");
  }

  return (
    <>
      {categories ? (
        <div className={CategoriesStyle.renderCategories}>
          {/* mapeo las categorias que me lleguen por props */}
          {categories.map((category, index) => (
            <div key={index} className={CategoriesStyle.containerCategory}>
              {/* devuelvo las categorias que mapeo en un elemento span*/}
              <button
                onClick={handleButtons}
                value={category}
                className={CategoriesStyle.category}
              >
                {category}
              </button>
            </div>
          ))}
        </div>
      ) : (
        <p>Espera...</p>
      )}
    </>
  );
}

export default Categories;
