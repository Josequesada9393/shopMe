import React from 'react'
import './Button.styles.jsx'


function Button({ children, buttonType, ...otherProps }) {
  const BUTTON_TYPES_CLASSES = {
  google: 'google-sign-in',
  inverted: 'inverted',
}

  return (
    <div>
      <button
      className={`button-container ${BUTTON_TYPES_CLASSES[buttonType]}`}
        {...otherProps}
      >
        {children}
      </button>
    </div>
  )
}

export default Button;