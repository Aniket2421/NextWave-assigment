import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header.jsx";
import ProductList from "./components/ProductList.jsx";
import Footer from "./components/Footer.jsx";
import Login from "./components/Login.jsx";
import { AuthProvider } from "./context/AuthContext.jsx";

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<ProductList />} />
              <Route path="/shop" element={<ProductList />} />
              <Route path="/login" element={<Login />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </AuthProvider>
  );
};

export default App;
