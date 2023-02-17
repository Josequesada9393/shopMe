import React from 'react'
import CategoryItem from '../component-item/category-item.components'
import './Directory.style.scss'

function Directory({categories}) {
  return (
       <div className="directory-container">
      {categories.map((category) => (
        <CategoryItem key={category.id} category={category} />
     ))}
    </div>
  )
}

export default Directory