import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { LogOut } from 'lucide-react';

export default function Navbar({ user, setUser, isAdmin, setIsAdmin }) {
  const [showMenu, setShowMenu] = useState(false);

  const handleLogout = () => {
    setUser(null);
    setIsAdmin(false);
    localStorage.removeItem('user');
    localStorage.removeItem('isAdmin');
  };

  return (
    <nav className="bg-card border-b-2 border-primary/20 sticky top-0 z-50 backdrop-blur-sm bg-opacity-95">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/#/" className="text-3xl font-display font-bold text-primary gaming-gradient bg-clip-text text-transparent hover:scale-110 transition">
          🎮 InstaBoosters
        </Link>

        <div className="hidden md:flex gap-8 items-center">
          <Link to="/#/" className="hover:text-primary transition-colors font-medium hover:underline">الرئيسية</Link>
          <Link to="/#/products" className="hover:text-primary transition-colors font-medium hover:underline">المنتجات</Link>
          <Link to="/#/order" className="hover:text-primary transition-colors font-medium hover:underline">طلب جديد</Link>
          <Link to="/#/about" className="hover:text-primary transition-colors font-medium hover:underline">عن الموقع</Link>
          
          {user ? (
            <>
              {isAdmin && (
                <Link to="/admin" className="bg-secondary text-secondary-foreground px-4 py-2 rounded-lg hover:opacity-90 transition">
                  لوحة الإدارة
                </Link>
              )}
              <div className="relative">
                <button onClick={() => setShowMenu(!showMenu)} className="flex items-center gap-2 bg-primary text-primary-foreground px-6 py-2 rounded-lg hover:opacity-90 transition transform hover:scale-105 font-bold">
                  {user.email?.split('@')[0]}
                </button>
                {showMenu && (
                  <div className="absolute right-0 mt-3 bg-card border-2 border-primary/30 rounded-lg shadow-2xl overflow-hidden backdrop-blur-sm">
                    <Link to="/#/orders" className="block px-5 py-3 hover:bg-primary/10 transition font-medium">طلباتي</Link>
                    <Link to="/#/account" className="block px-5 py-3 hover:bg-primary/10 transition font-medium">حسابي</Link>
                    <button onClick={handleLogout} className="w-full text-right px-5 py-3 hover:bg-destructive/20 text-destructive flex items-center gap-2 transition font-medium">
                      <LogOut size={16} /> تسجيل الخروج
                    </button>
                  </div>
                )}
              </div>
            </>
          ) : (
            <Link to="/#/account" className="bg-primary text-primary-foreground px-6 py-2 rounded-lg hover:opacity-90 transition transform hover:scale-105 font-bold">
              دخول / تسجيل
            </Link>
          )}
        </div>

        <button className="md:hidden text-primary" onClick={() => setShowMenu(!showMenu)}>
          ☰
        </button>
      </div>
    </nav>
  );
}
