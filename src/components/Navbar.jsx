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
    <nav className="bg-card border-b border-border/50 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-display font-bold text-primary gaming-gradient bg-clip-text text-transparent">
          🎮 InstaBoosters
        </Link>

        <div className="hidden md:flex gap-6 items-center">
          <Link to="/" className="hover:text-primary transition-colors">الرئيسية</Link>
          <Link to="/products" className="hover:text-primary transition-colors">المنتجات</Link>
          <Link to="/order" className="hover:text-primary transition-colors">طلب جديد</Link>
          <Link to="/about" className="hover:text-primary transition-colors">عن الموقع</Link>
          
          {user ? (
            <>
              {isAdmin && (
                <Link to="/admin" className="bg-secondary text-secondary-foreground px-4 py-2 rounded-lg hover:opacity-90 transition">
                  لوحة الإدارة
                </Link>
              )}
              <div className="relative">
                <button onClick={() => setShowMenu(!showMenu)} className="flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2 rounded-lg">
                  {user.username}
                </button>
                {showMenu && (
                  <div className="absolute right-0 mt-2 bg-card border border-border rounded-lg shadow-lg overflow-hidden">
                    <Link to="/orders" className="block px-4 py-2 hover:bg-muted">طلباتي</Link>
                    <Link to="/account" className="block px-4 py-2 hover:bg-muted">حسابي</Link>
                    <button onClick={handleLogout} className="w-full text-right px-4 py-2 hover:bg-destructive text-destructive flex items-center gap-2">
                      <LogOut size={16} /> تسجيل الخروج
                    </button>
                  </div>
                )}
              </div>
            </>
          ) : (
            <Link to="/account" className="bg-primary text-primary-foreground px-4 py-2 rounded-lg hover:opacity-90 transition">
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
