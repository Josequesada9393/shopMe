import React from 'react'
import {
  ButtonSpinner, InvertedButton, GoogleSignInButton, BaseButton
} from "./Button.styles";

import './Button.styles.jsx'

  const BUTTON_TYPES_CLASSES = {
  google: 'google-sign-in',
  inverted: 'inverted',
  base: 'base'
  }

    const getButton = (buttonType = BUTTON_TYPES_CLASSES.base) =>
  ({
    [BUTTON_TYPES_CLASSES.base]: BaseButton,
    [BUTTON_TYPES_CLASSES.google]: GoogleSignInButton,
    [BUTTON_TYPES_CLASSES.inverted]: InvertedButton,
    }[buttonType]);


function Button({ children, buttonType, isLoading = false, ...otherProps }) {

  const CustomButton = getButton(buttonType);

  return (
    <div>
   <CustomButton disabled={isLoading} {...otherProps}>
      {isLoading ? <ButtonSpinner /> : children}
    </CustomButton>
    </div>
  )
}

export default Button;