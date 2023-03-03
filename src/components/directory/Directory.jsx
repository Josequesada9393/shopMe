import React from 'react'
import DirectoryItem from '../Directory-item/Directory-item.components'
import './Directory.style.scss'

function Directory({categories}) {
  return (
       <div className="directory-container">
      {categories.map((category) => (
        <DirectoryItem key={category.id} category={category} />
     ))}
    </div>
  )
}

export default Directory