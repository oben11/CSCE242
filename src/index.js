import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Route, Routes} from "react-router-dom"; // for github pages
import './index.css';
import Layout from './Layout';
import Home from './pages/Home';
import About from "./pages/About";
import Menu from "./pages/Menu";
import Rewards from "./pages/Rewards";
import Merchandise from "./pages/Merchandise";


const App = () => {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="menu" element={<Menu />} />
          <Route path="rewards" element={<Rewards />} />
          <Route path="merchandise" element={<Merchandise />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);



