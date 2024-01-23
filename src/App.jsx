import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from "./components/Header";
import SignInForm from './components/SignIn';
import './App.css';
import MainSide from './components/MainSide';


const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<MainSide />} />
        <Route path="/signin" element={<SignInForm />} />
      </Routes>
    </Router>
  );
}

export default App;
