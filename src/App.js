import React from 'react';
import './App.css';
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Guild from "./pages/Guild";
import Rules from "./pages/Rules";
import Board from "./pages/Board";
import Office from "./pages/Office";
import Contact from "./pages/Contact";
import ErrorPage from "./pages/ErrorPage";
import Company from "./pages/Company";
import Member from "./pages/Member";





export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="kilta" element={<Guild />} />
          <Route path="saannot" element={<Rules />} />
          <Route path="hallitus" element={<Board />} />
          <Route path="toimisto" element={<Office />} />
          <Route path="yrityksille" element={<Company />} />
          <Route path="yhteystiedot" element={<Contact />} />
          <Route path="jasen" element={<Member />} />
          <Route path="*" element={<ErrorPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));



