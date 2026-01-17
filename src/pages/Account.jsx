import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Account({ user, setUser }) {
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [instagramUsername, setInstagramUsername] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    if (isLogin) {
      // Login
      if (!email || !password) {
        alert('يرجى ملء جميع الحقول');
        setLoading(false);
        return;
      }

      const newUser = {
        id: Math.random(),
        email,
        password, // In real app, don't store plain passwords
        instagramUsername,
        createdAt: new Date(),
      };

      // In real app, verify with backend
      const users = JSON.parse(localStorage.getItem('users') || '[]');
      const existingUser = users.find(u => u.email === email);

      if (existingUser && existingUser.password === password) {
        setUser(existingUser);
        localStorage.setItem('user', JSON.stringify(existingUser));
        alert('تم تسجيل الدخول بنجاح!');
        navigate('/');
      } else if (!existingUser) {
        // Create new account
        users.push(newUser);
        localStorage.setItem('users', JSON.stringify(users));
        setUser(newUser);
        localStorage.setItem('user', JSON.stringify(newUser));
        alert('تم إنشاء حساب جديد بنجاح!');
        navigate('/');
      } else {
        alert('كلمة المرور غير صحيحة');
      }
    } else {
      // Register
      if (!email || !password || !confirmPassword) {
        alert('يرجى ملء جميع الحقول');
        setLoading(false);
        return;
      }

      if (password !== confirmPassword) {
        alert('كلمات المرور غير متطابقة');
        setLoading(false);
        return;
      }

      const users = JSON.parse(localStorage.getItem('users') || '[]');
      const existingUser = users.find(u => u.email === email);

      if (existingUser) {
        alert('البريد الإلكتروني مستخدم بالفعل');
        setLoading(false);
        return;
      }

      const newUser = {
        id: Math.random(),
        email,
        password,
        instagramUsername,
        createdAt: new Date(),
      };

      users.push(newUser);
      localStorage.setItem('users', JSON.stringify(users));
      setUser(newUser);
      localStorage.setItem('user', JSON.stringify(newUser));
      alert('تم إنشاء حساب جديد بنجاح!');
      navigate('/');
    }

    setLoading(false);
  };

  if (user) {
    return (
      <div className="max-w-2xl mx-auto px-4 py-12">
        <div className="bg-card border border-border/50 rounded-lg p-8">
          <h1 className="text-3xl font-display font-bold mb-6">حسابي</h1>

          <div className="space-y-6">
            <div className="bg-primary/10 p-6 rounded-lg border border-primary/20">
              <p className="text-muted-foreground mb-2">البريد الإلكتروني:</p>
              <p className="text-xl font-bold">{user.email}</p>
            </div>

            {user.instagramUsername && (
              <div className="bg-primary/10 p-6 rounded-lg border border-primary/20">
                <p className="text-muted-foreground mb-2">حساب انستغرام:</p>
                <p className="text-xl font-bold">{user.instagramUsername}</p>
              </div>
            )}

            <div className="bg-primary/10 p-6 rounded-lg border border-primary/20">
              <p className="text-muted-foreground mb-2">تاريخ التسجيل:</p>
              <p className="text-xl font-bold">{new Date(user.createdAt).toLocaleDateString('ar-SA')}</p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <button 
                onClick={() => navigate('/orders')}
                className="bg-primary text-primary-foreground font-bold py-3 rounded-lg hover:opacity-90 transition"
              >
                طلباتي
              </button>
              <button 
                onClick={() => {
                  setUser(null);
                  localStorage.removeItem('user');
                  navigate('/');
                }}
                className="bg-destructive text-white font-bold py-3 rounded-lg hover:opacity-90 transition"
              >
                تسجيل الخروج
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-md mx-auto px-4 py-12">
      <div className="bg-card border border-border/50 rounded-lg p-8">
        <h1 className="text-3xl font-display font-bold text-center mb-8">
          {isLogin ? 'تسجيل الدخول' : 'إنشاء حساب'}
        </h1>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-bold mb-2">البريد الإلكتروني</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-background border border-input rounded-lg px-4 py-2 focus:ring-2 focus:ring-primary"
              placeholder="your@email.com"
            />
          </div>

          <div>
            <label className="block text-sm font-bold mb-2">كلمة المرور</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full bg-background border border-input rounded-lg px-4 py-2 focus:ring-2 focus:ring-primary"
              placeholder="••••••••"
            />
          </div>

          {!isLogin && (
            <div>
              <label className="block text-sm font-bold mb-2">تأكيد كلمة المرور</label>
              <input
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="w-full bg-background border border-input rounded-lg px-4 py-2 focus:ring-2 focus:ring-primary"
                placeholder="••••••••"
              />
            </div>
          )}

          <div>
            <label className="block text-sm font-bold mb-2">معرف انستغرام (اختياري)</label>
            <input
              type="text"
              value={instagramUsername}
              onChange={(e) => setInstagramUsername(e.target.value)}
              className="w-full bg-background border border-input rounded-lg px-4 py-2 focus:ring-2 focus:ring-primary"
              placeholder="@username"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-primary text-primary-foreground font-bold py-3 rounded-lg hover:opacity-90 transition disabled:opacity-50"
          >
            {loading ? 'جاري...' : (isLogin ? 'دخول' : 'إنشاء حساب')}
          </button>
        </form>

        <div className="mt-6 text-center">
          <p className="text-muted-foreground">
            {isLogin ? 'ليس لديك حساب؟' : 'هل لديك حساب؟'}
            <button
              onClick={() => {
                setIsLogin(!isLogin);
                setEmail('');
                setPassword('');
                setConfirmPassword('');
                setInstagramUsername('');
              }}
              className="text-primary hover:underline font-bold ml-2"
            >
              {isLogin ? 'إنشاء واحد الآن' : 'سجل دخول'}
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}
