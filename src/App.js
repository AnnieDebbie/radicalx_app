import logo from './logo.svg';
import './App.css';
import SideBar from './components/side_bar/SideBar';
import Header from './components/header/Header';
import React from 'react';
import HomePage from './pages/HomePage';

function App() {
  return (
    <React.Fragment>
      <HomePage/>
    </React.Fragment>
  );
}

export default App;
