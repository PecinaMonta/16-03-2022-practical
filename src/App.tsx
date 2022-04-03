import React from 'react';
import logo from './logo.svg';
import './App.css';
import GlobalStyle from './globalStyles.jsx';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Nav from './components/Nav/Nav';
import HomePage from './components/HomePage/HomePage';
import CategoryMeals from './components/CategoryMeals/CategoryMeals';
import FoodFood from './components/FoodFood/FoodFood';


const App: React.FC = () => {
  return (
    <>
      <GlobalStyle/>
      <BrowserRouter>
      <Nav/>
        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/category/:categoryName" element={<CategoryMeals/>} />
          <Route path="/category/:foodId" element={<FoodFood/>} />
          <Route path="*" element={<div>404</div>} />
        </Routes> 
      </BrowserRouter>
    </>
  );
}

export default App;
