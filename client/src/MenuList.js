import React from "react"
import Menu from "./Menu";


const MenuList = (props) => (
  <ul>
    {props.menus.map((m) => (
      <Menu 
        deleteMenu = {props.deleteMenu}
        key={m.id} {...m}/>
    ))}
  </ul>
)

export default MenuList;