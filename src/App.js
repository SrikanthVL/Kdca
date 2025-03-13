import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Header from "./components/header";
import Footer from "./components/footer";
import Login from './components/login';
import NewRegister from "./components/newRegister";
import DashBoard from "./components/Dashboard";
import PlayersList from "./components/playersList";

function App() {
  return (
    <div className='App'>
		<BrowserRouter>
		<Header></Header>

		   <Routes>
			  <Route path='/' element={<Login/>} />
			  <Route path='/newRegister' element={<NewRegister/>}></Route>
			  <Route path='/playersList' element={<PlayersList/>}></Route>
			  <Route path='/dashboard' element={<DashBoard/>}></Route>
		  </Routes>
		</BrowserRouter>
		<Footer></Footer>
    </div>
  );
}

export default App;
