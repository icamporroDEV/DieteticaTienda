import React from 'react'
import hero from "../img/hero.jpg"
import { InfoBar } from './homeStyled'
export const Home = () => {
  return (
    <div> 
    <img src={hero}
    alt="Descripción de la imagen"
    width="100%"
    height="100%"/>
    <InfoBar disableGutters>

    </InfoBar>
    </div>
  )
}
