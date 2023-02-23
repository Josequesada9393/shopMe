import React from 'react'
import '../button/Button.scss'

//default


//inverted




//google sign in

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