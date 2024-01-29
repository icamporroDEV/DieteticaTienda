import React from 'react'
import { Link } from 'react-router-dom'

const links =[{
    name:"Home",
    href:"/home"
},
{name:"Contact",
href:"/contact"}]
export const NavBar = () => {
  return (
    <div>{
        links.map(x=>(
        <Link to={x.href}>{x.name}</Link>))}</div>
  )
}
