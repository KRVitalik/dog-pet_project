import React from 'react'
import { RotatingLines } from 'react-loader-spinner'
import SpinnerStyled from './Spinner.styled'

const Spinner = () => {
  return <SpinnerStyled>
    <RotatingLines
  strokeColor="#FBE0DC"
  strokeWidth="5"
  animationDuration="0.75"
  width="96"
    visible={true}
/>
  </SpinnerStyled>
}

export default Spinner
