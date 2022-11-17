import React from 'react'
import CategoriesStyle from './CategoriesStyle.module.css'

function Categories({categories  = []}) {
  return (
    <div className={CategoriesStyle.renderCategories}>
        {categories.map((category, index) => (
              <div key={index} className={CategoriesStyle.containerCategory} >
                {/* <p>{category}</p> */}
                <span className={CategoriesStyle.category} >{category}</span>
              </div>
            ))
        }
    </div>
  )
}

export default Categories