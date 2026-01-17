import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { CheckCircle, Clock, XCircle } from 'lucide-react';

export default function Orders({ user }) {
  const navigate = useNavigate();
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!user) {
      navigate('/account');
      return;
    }

    // Load orders from localStorage
    const allOrders = JSON.parse(localStorage.getItem('orders') || '[]');
    const userOrders = allOrders.filter(order => order.userId === user.id);
    setOrders(userOrders);
    setLoading(false);
  }, [user, navigate]);

  if (!user) return null;

  if (loading) {
    return (
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="text-center">جاري التحميل...</div>
      </div>
    );
  }

  const getStatusIcon = (status) => {
    switch (status) {
      case 'In Review':
        return <Clock className="text-yellow-500" size={24} />;
      case 'Redeem':
        return <CheckCircle className="text-green-500" size={24} />;
      case 'Rejected':
        return <XCircle className="text-red-500" size={24} />;
      default:
        return <Clock className="text-muted-foreground" size={24} />;
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'In Review':
        return 'bg-yellow-500/20 text-yellow-500 border-yellow-500/30';
      case 'Redeem':
        return 'bg-green-500/20 text-green-500 border-green-500/30';
      case 'Rejected':
        return 'bg-red-500/20 text-red-500 border-red-500/30';
      default:
        return 'bg-muted';
    }
  };

  const getStatusText = (status) => {
    switch (status) {
      case 'In Review':
        return 'قيد المراجعة';
      case 'Redeem':
        return 'تم الموافقة ✅';
      case 'Rejected':
        return 'تم الرفض ❌';
      default:
        return status;
    }
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <div className="mb-8">
        <h1 className="text-4xl font-display font-bold mb-2">طلباتي</h1>
        <p className="text-muted-foreground">إدارة جميع طلباتك وتتبع حالتها</p>
      </div>

      {orders.length === 0 ? (
        <div className="bg-card border border-border/50 rounded-lg p-12 text-center">
          <div className="text-6xl mb-4">📭</div>
          <h2 className="text-2xl font-bold mb-4">لا توجد طلبات</h2>
          <p className="text-muted-foreground mb-6">لم تقم بإنشاء أي طلبات حتى الآن</p>
          <button
            onClick={() => navigate('/order')}
            className="bg-primary text-primary-foreground font-bold px-6 py-3 rounded-lg hover:opacity-90 transition"
          >
            إنشاء طلب جديد 🚀
          </button>
        </div>
      ) : (
        <div className="space-y-4">
          {orders.map((order) => (
            <div key={order.id} className="bg-card border-2 border-border/50 hover:border-primary/50 rounded-lg p-6 transition">
              <div className="grid grid-cols-1 md:grid-cols-5 gap-4 items-center">
                {/* Status Icon */}
                <div className="flex justify-center">
                  {getStatusIcon(order.status)}
                </div>

                {/* Order Info */}
                <div>
                  <p className="text-sm text-muted-foreground">رقم الطلب</p>
                  <p className="font-bold font-mono">{order.id}</p>
                </div>

                {/* Username & Followers */}
                <div>
                  <p className="text-sm text-muted-foreground">معرف انستغرام / متابعون</p>
                  <p className="font-bold">{order.username}</p>
                  <p className="text-sm text-primary">{order.followers} متابع</p>
                </div>

                {/* Price & Payment */}
                <div>
                  <p className="text-sm text-muted-foreground">السعر / طريقة الدفع</p>
                  <p className="font-bold text-primary text-lg">{order.price} د.م</p>
                  <p className="text-sm">{order.paymentMethod === 'paypal' ? 'PayPal' : 'بنك'}</p>
                </div>

                {/* Status */}
                <div>
                  <div className={`inline-block px-4 py-2 rounded-lg font-bold text-sm border ${getStatusColor(order.status)}`}>
                    {getStatusText(order.status)}
                  </div>
                  <p className="text-xs text-muted-foreground mt-2">{order.createdAt}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Info Box */}
      <div className="mt-12 bg-card p-8 rounded-lg border border-border/50">
        <h2 className="text-2xl font-bold mb-6">حالات الطلب:</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="flex gap-4">
            <Clock className="text-yellow-500 flex-shrink-0" size={32} />
            <div>
              <h3 className="font-bold mb-2">قيد المراجعة</h3>
              <p className="text-muted-foreground text-sm">تم استقبال طلبك وقيد المراجعة</p>
            </div>
          </div>
          <div className="flex gap-4">
            <CheckCircle className="text-green-500 flex-shrink-0" size={32} />
            <div>
              <h3 className="font-bold mb-2">تم الموافقة</h3>
              <p className="text-muted-foreground text-sm">تم الموافقة والمتابعون قيد التسليم</p>
            </div>
          </div>
          <div className="flex gap-4">
            <XCircle className="text-red-500 flex-shrink-0" size={32} />
            <div>
              <h3 className="font-bold mb-2">تم الرفض</h3>
              <p className="text-muted-foreground text-sm">تم رفض الطلب (تواصل معنا للمزيد)</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
