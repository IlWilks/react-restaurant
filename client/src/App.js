import './App.css';
import { useState, useEffect } from "react"
import axios from "axios";
import { Container, Header } from "semantic-ui-react";
import MenuList from './MenuList';
import MenuForm from './components/MenuForm';


function App() {
  const [menus, setMenus] = useState([])
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    getMenus();
  }, [])

  const getMenus = async () => {
    try{
      let res = await axios.get("/api/menus")
      setMenus(res.data)
    } catch (err) {
      setError(true);
      console.log(err)
    } finally {
      setLoading(false)
    }
  }

  const addMenu = async (menu) =>{
    try{
      let res = await axios.post(`/api/menus`, menu)
      setMenus([...menus, res.data])
    }catch (err) {
      console.log(err);
    }

  }

  const deleteMenu = async (id) => {
    try{

      let res = await axios.delete(`/api/menus/${id}`)
      let newMenus = menus.filter((m) => m.id !== id);
      setMenus(newMenus);
    }catch (err){
      console.log(err)
    }
  }
 

  if (loading) return <p>loading</p>;
  if (error) return <p>error</p>;

  return (
    <Container>
      <Header>React Restaurant</Header>
      <>
      <MenuForm addMenu = {addMenu}/>
      <MenuList 
        deleteMenu = {deleteMenu}
        menus = {menus}/>
      </>
    </Container>
  );
}

export default App;
