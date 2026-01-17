import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Products from './pages/Products';
import Order from './pages/Order';
import Account from './pages/Account';
import Orders from './pages/Orders';
import Admin from './pages/Admin';
import Terms from './pages/Terms';
import About from './pages/About';
import Footer from './components/Footer';

function App() {
  const [isAdmin, setIsAdmin] = useState(false);
  const [user, setUser] = useState(null);

  return (
    <Router>
      <div className="min-h-screen bg-background text-foreground flex flex-col">
        <Navbar user={user} setUser={setUser} isAdmin={isAdmin} setIsAdmin={setIsAdmin} />
        
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/order" element={<Order user={user} />} />
            <Route path="/account" element={<Account user={user} setUser={setUser} />} />
            <Route path="/orders" element={<Orders user={user} />} />
            <Route path="/admin" element={<Admin isAdmin={isAdmin} user={user} />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </main>
        
        <Footer />
      </div>
    </Router>
  );
}

export default App;
