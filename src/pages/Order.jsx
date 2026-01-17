import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const PACKAGES = [
  { id: 1, followers: 100, price: 3 },
  { id: 2, followers: 500, price: 14 },
  { id: 3, followers: 1000, price: 27 },
  { id: 4, followers: 2500, price: 65 },
  { id: 5, followers: 5000, price: 130 },
  { id: 6, followers: 10000, price: 250 },
  { id: 7, followers: 25000, price: 600 },
  { id: 8, followers: 50000, price: 1100 },
];

export default function Order({ user }) {
  const navigate = useNavigate();
  const [selectedPackage, setSelectedPackage] = useState(1);
  const [username, setUsername] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('paypal');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [agreed, setAgreed] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (user) {
      setEmail(user.email);
      setUsername(user.instagramUsername || '');
    }
  }, [user]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!user) {
      alert('يجب تسجيل الدخول أولاً');
      navigate('/account');
      return;
    }

    if (!username.startsWith('@')) {
      alert('يجب إدخال معرف انستغرام صحيح (مثل @username)');
      return;
    }

    if (!agreed) {
      alert('يجب الموافقة على الشروط');
      return;
    }

    setLoading(true);

    const pkg = PACKAGES.find(p => p.id === selectedPackage);
    const order = {
      id: Date.now(),
      userId: user.id,
      username: username,
      followers: pkg.followers,
      price: pkg.price,
      status: 'In Review',
      paymentMethod: paymentMethod,
      phone: phone,
      createdAt: new Date().toLocaleString('ar-SA'),
    };

    // Save to localStorage
    const orders = JSON.parse(localStorage.getItem('orders') || '[]');
    orders.push(order);
    localStorage.setItem('orders', JSON.stringify(orders));

    // In real app, send email here
    console.log('Sending order email to:', 'mo7am5dyt@gmail.com');
    console.log('Order details:', order);

    alert('تم إنشاء الطلب بنجاح! سيتم الاتصال بك قريباً للتأكيد والدفع');
    navigate('/orders');
    setLoading(false);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-display font-bold text-center mb-8">إنشاء طلب جديد</h1>

      {!user && (
        <div className="bg-destructive/10 border border-destructive text-destructive p-4 rounded-lg mb-8">
          <p className="font-bold">⚠️ يجب تسجيل الدخول أولاً</p>
          <button 
            onClick={() => navigate('/account')}
            className="mt-2 bg-destructive text-white px-4 py-2 rounded-lg hover:opacity-90"
          >
            اذهب للتسجيل
          </button>
        </div>
      )}

      <form onSubmit={handleSubmit} className="bg-card border border-border/50 rounded-lg p-8 space-y-8">
        {/* Package Selection */}
        <div>
          <label className="block text-lg font-bold mb-4">اختر الحزمة المناسبة:</label>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {PACKAGES.map(pkg => (
              <button
                key={pkg.id}
                type="button"
                onClick={() => setSelectedPackage(pkg.id)}
                className={`p-4 rounded-lg border-2 transition ${
                  selectedPackage === pkg.id
                    ? 'border-primary bg-primary/10'
                    : 'border-border/50 bg-card hover:border-primary/50'
                }`}
              >
                <div className="text-2xl font-bold text-primary">{pkg.followers}</div>
                <div className="text-sm text-muted-foreground">{pkg.price} د.م</div>
              </button>
            ))}
          </div>
        </div>

        {/* Instagram Username */}
        <div>
          <label className="block text-lg font-bold mb-2">معرف انستغرام:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="@username"
            className="w-full bg-background border border-input rounded-lg px-4 py-2 focus:ring-2 focus:ring-primary focus:border-transparent"
            required
          />
          <p className="text-sm text-muted-foreground mt-2">تأكد أن حسابك عام (Public)</p>
        </div>

        {/* Email */}
        <div>
          <label className="block text-lg font-bold mb-2">البريد الإلكتروني:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full bg-background border border-input rounded-lg px-4 py-2"
            readOnly
          />
        </div>

        {/* Phone */}
        <div>
          <label className="block text-lg font-bold mb-2">رقم الهاتف:</label>
          <input
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="+212 XXX XXX XXX"
            className="w-full bg-background border border-input rounded-lg px-4 py-2 focus:ring-2 focus:ring-primary focus:border-transparent"
            required
          />
        </div>

        {/* Payment Method */}
        <div>
          <label className="block text-lg font-bold mb-4">طريقة الدفع:</label>
          <div className="space-y-3">
            <label className="flex items-center gap-3 cursor-pointer">
              <input
                type="radio"
                name="payment"
                value="paypal"
                checked={paymentMethod === 'paypal'}
                onChange={(e) => setPaymentMethod(e.target.value)}
                className="w-4 h-4"
              />
              <span>PayPal: mohamedaitlhaj302@gmail.com</span>
            </label>
            <label className="flex items-center gap-3 cursor-pointer">
              <input
                type="radio"
                name="payment"
                value="bank"
                checked={paymentMethod === 'bank'}
                onChange={(e) => setPaymentMethod(e.target.value)}
                className="w-4 h-4"
              />
              <span>بطاقة بنك (Attijariwafa): 5417554000635989</span>
            </label>
          </div>
        </div>

        {/* Order Summary */}
        <div className="bg-primary/10 border border-primary/20 rounded-lg p-6">
          <h3 className="text-lg font-bold mb-4">ملخص الطلب:</h3>
          <div className="space-y-2">
            <div className="flex justify-between">
              <span>المتابعون:</span>
              <span className="font-bold">{PACKAGES.find(p => p.id === selectedPackage)?.followers}</span>
            </div>
            <div className="flex justify-between">
              <span>السعر:</span>
              <span className="font-bold text-primary text-lg">{PACKAGES.find(p => p.id === selectedPackage)?.price} د.م</span>
            </div>
            <div className="border-t border-primary/20 pt-2 flex justify-between">
              <span className="font-bold">الإجمالي:</span>
              <span className="font-bold text-primary text-xl">{PACKAGES.find(p => p.id === selectedPackage)?.price} د.م</span>
            </div>
          </div>
        </div>

        {/* Terms Checkbox */}
        <label className="flex items-start gap-3 cursor-pointer">
          <input
            type="checkbox"
            checked={agreed}
            onChange={(e) => setAgreed(e.target.checked)}
            className="w-5 h-5 mt-1"
          />
          <span>أوافق على <a href="/terms" className="text-primary hover:underline">شروط الاستخدام</a> وأؤكد أن الحساب عام</span>
        </label>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={loading || !user}
          className={`w-full py-3 rounded-lg font-bold transition text-lg ${
            loading || !user
              ? 'bg-muted text-muted-foreground cursor-not-allowed'
              : 'bg-primary text-primary-foreground hover:opacity-90 neon-glow'
          }`}
        >
          {loading ? 'جاري المعالجة...' : 'إنشاء الطلب 🚀'}
        </button>
      </form>
    </div>
  );
}
