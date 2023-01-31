import Header from "./components/Header"
import Home from "./components/Home"
import Contact from "./components/Contact"
import NotFound from "./components/NotFound"

import { Routes, Route } from "react-router-dom"

const App = () => {
  return (
    <div className="d-flex flex-column justify-content-between align-items-center vh-100">
      <Header></Header>
      <Routes>
        <Route
        path="/Contacto"
        element={<Contact></Contact>}
        ></Route>
        <Route
        path="/"
        element={<Home></Home>}
        ></Route>
        <Route
        path="*"
        element={<NotFound></NotFound>}
        ></Route>
      </Routes>
      <Header></Header>
    </div>
  )
}

export default App