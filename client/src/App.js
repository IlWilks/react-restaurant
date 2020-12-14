import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from "react"
import axios from "axios";
import { Container, Header } from "semantic-ui-react";
import MenuList from './MenuList';
import MenuForm from './components/MenuForm';

const dummyData = [
  { id: 1, name: "tood1", complete: true },
  { id: 2, name: "todo2", complete: false },
];


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
      console.log(res.data)
    } catch (err) {
      // setError(true);
      console.log(dummyData)
      console.log(err)
    } finally {
      setLoading(false)
    }
  }

 


  if (loading) return <p>loading</p>;
  if (error) return <p>error</p>;

  return (
    <Container>
      <Header>React Restaurant</Header>
      <>
      <MenuForm/>
      <MenuList menus = {menus}/>
      </>
    </Container>
  );
}

export default App;
