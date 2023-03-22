import logo from './logo.svg';
import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';
import Gallery from './components/canvas/Gallery';
import { OrbitControls } from '@react-three/drei'
import Header from './components/dom/Header';
// import { Switch, Route } from "react-router-dom";
import World from './pages/World';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div id="root">
      
      {/* <Header></Header> */}
      <BrowserRouter>
      <Header />
      <Routes>
          <Route path="/" exact={true} element={<World/>} />
          <Route path="/login" exact={true} element={<Login/>} />
          <Route path="/sign-up" exact={true} element={<SignUp/>} />
      </Routes>
      </BrowserRouter>

      


      
    </div>
  );
}

export default App;
