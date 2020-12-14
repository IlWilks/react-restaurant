const { Header } = require("semantic-ui-react")

const Menu = ({id, name}) => {
  return (
    <div>
      <Header>{name}</Header>
    </div>
  )

}

export default Menu;