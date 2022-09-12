import "./App.css"
import Hero from "./Components/Hero"
import Menu from "./Components/Menu"
import NavBar from "./Components/NavBar"
import UseReducer from "./Components/UseReducer"
import UsersData from "./Components/UsersData"
import UseStateForm from "./Components/UseStateForm"

function App() {
  return (
    <div className="App">
      <NavBar user="sreehari" brand="Cafe Dot" />
      <Hero />
      <Menu />
      {/* <UseReducer /> */}
      <UseStateForm />
      <UsersData />
    </div>
  )
}

export default App
