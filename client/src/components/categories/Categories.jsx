import React from 'react';
import CategoriesStyle from './CategoriesStyle.module.css';

function Categories({categories  = []}) {
  return (
    <div className={CategoriesStyle.renderCategories}>
      {/* mapeo las categorias que me lleguen por props */}
        {categories.map((category, index) => (
              <div key={index} className={CategoriesStyle.containerCategory} >
                {/* devuelvo las categorias que mapeo en un elemento span*/}
                <span className={CategoriesStyle.category} >{category}</span>
              </div>
            ))
        }
    </div>
  )
}

export default Categories;