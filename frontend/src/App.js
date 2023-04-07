import "./App.css";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AddContact from "./pages/AddContact";
import UpdateContact from "./pages/UpdateContact";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route exact path="/addContact" element={<AddContact/>} />
        <Route exact path="/updateContact/:contactId" element={<UpdateContact/>} />
      </Routes>
    </>
  );
}

export default App;
