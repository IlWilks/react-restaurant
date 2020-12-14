const { Header, Button } = require("semantic-ui-react")

const Menu = ({id, name, deleteMenu}) => {
  return (
    <div style={styles.flex}>
      <div style={styles.flex}>
        <Header>{name}</Header>
      </div>
      <Button onClick={() => deleteMenu(id)}>Delete</Button>
    </div>
  )

}

export default Menu;

const styles = {
  flex: {
    display: "flex",
    alignItems: "center",
  },
}