import React from "react"
import Menu from "./Menu";


const MenuList = (props) => (
  <div>
    {props.menus.map((m) => (
      <Menu key={m.id} {...m}/>
    ))}
  </div>
)

export default MenuList;