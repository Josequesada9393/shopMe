import React from 'react'
import {FC, ButtonHTMLAttributes} from 'react'

import {
  ButtonSpinner, InvertedButton, GoogleSignInButton, BaseButton
} from "./Button.styles";



  export enum BUTTON_TYPES_CLASSES {
  google = 'google-sign-in',
  inverted = 'inverted',
  base = 'base'
  }

    const getButton = (buttonType = BUTTON_TYPES_CLASSES.base):typeof BaseButton =>
  ({
    [BUTTON_TYPES_CLASSES.base]: BaseButton,
    [BUTTON_TYPES_CLASSES.google]: GoogleSignInButton,
    [BUTTON_TYPES_CLASSES.inverted]: InvertedButton,
    }[buttonType]);

export type ButtonProps = {
  buttonType?: BUTTON_TYPES_CLASSES;
  isLoading?: boolean;
} & ButtonHTMLAttributes<HTMLButtonElement>

const Button:FC<ButtonProps> = ({ children, buttonType, isLoading = false, ...otherProps }) => {

  const CustomButton = getButton(buttonType);

  return (

   <CustomButton disabled={isLoading} {...otherProps}>
      {isLoading ? <ButtonSpinner /> : children}
    </CustomButton>

  )
}

export default Button;