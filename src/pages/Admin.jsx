import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Admin({ isAdmin, user }) {
  const navigate = useNavigate();
  const [orders, setOrders] = useState([]);
  const [users, setUsers] = useState([]);
  const [activeTab, setActiveTab] = useState('orders');
  const [stats, setStats] = useState({ totalOrders: 0, totalRevenue: 0, approvedOrders: 0, pendingOrders: 0 });

  useEffect(() => {
    // Check if user is admin
    if (!user || user.email !== 'M75@gmail.com') {
      navigate('/');
      return;
    }

    // Load data
    const allOrders = JSON.parse(localStorage.getItem('orders') || '[]');
    const allUsers = JSON.parse(localStorage.getItem('users') || '[]');
    
    setOrders(allOrders);
    setUsers(allUsers);

    // Calculate stats
    const totalRevenue = allOrders.reduce((sum, order) => sum + order.price, 0);
    const approvedOrders = allOrders.filter(o => o.status === 'Redeem').length;
    const pendingOrders = allOrders.filter(o => o.status === 'In Review').length;

    setStats({
      totalOrders: allOrders.length,
      totalRevenue,
      approvedOrders,
      pendingOrders,
    });
  }, [user, navigate]);

  const updateOrderStatus = (orderId, newStatus) => {
    const updatedOrders = orders.map(order => 
      order.id === orderId ? { ...order, status: newStatus } : order
    );
    setOrders(updatedOrders);
    localStorage.setItem('orders', JSON.stringify(updatedOrders));
    alert(`تم تحديث حالة الطلب إلى: ${newStatus === 'Redeem' ? 'موافق' : 'مرفوض'}`);
  };

  if (!user || user.email !== 'M75@gmail.com') {
    return (
      <div className="max-w-4xl mx-auto px-4 py-12 text-center">
        <div className="text-4xl mb-4">🚫</div>
        <h1 className="text-2xl font-bold mb-4">غير مصرح لك</h1>
        <p className="text-muted-foreground">يجب أن تكون مشرفاً للوصول لهذه الصفحة</p>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="mb-8">
        <h1 className="text-4xl font-display font-bold mb-2">🛡️ لوحة التحكم الإدارية</h1>
        <p className="text-muted-foreground">إدارة الطلبات والمستخدمين والإحصائيات</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-12">
        <div className="bg-card border-l-4 border-primary rounded-lg p-6">
          <p className="text-muted-foreground mb-2">إجمالي الطلبات</p>
          <p className="text-4xl font-bold text-primary">{stats.totalOrders}</p>
        </div>
        <div className="bg-card border-l-4 border-green-500 rounded-lg p-6">
          <p className="text-muted-foreground mb-2">الطلبات الموافق عليها</p>
          <p className="text-4xl font-bold text-green-500">{stats.approvedOrders}</p>
        </div>
        <div className="bg-card border-l-4 border-yellow-500 rounded-lg p-6">
          <p className="text-muted-foreground mb-2">الطلبات المعلقة</p>
          <p className="text-4xl font-bold text-yellow-500">{stats.pendingOrders}</p>
        </div>
        <div className="bg-card border-l-4 border-blue-500 rounded-lg p-6">
          <p className="text-muted-foreground mb-2">إجمالي الإيرادات</p>
          <p className="text-4xl font-bold text-blue-500">{stats.totalRevenue} د.م</p>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex gap-4 mb-8 border-b border-border">
        <button
          onClick={() => setActiveTab('orders')}
          className={`px-6 py-3 font-bold border-b-2 transition ${
            activeTab === 'orders'
              ? 'border-primary text-primary'
              : 'border-transparent text-muted-foreground hover:text-foreground'
          }`}
        >
          الطلبات ({orders.length})
        </button>
        <button
          onClick={() => setActiveTab('users')}
          className={`px-6 py-3 font-bold border-b-2 transition ${
            activeTab === 'users'
              ? 'border-primary text-primary'
              : 'border-transparent text-muted-foreground hover:text-foreground'
          }`}
        >
          المستخدمون ({users.length})
        </button>
      </div>

      {/* Orders Tab */}
      {activeTab === 'orders' && (
        <div className="space-y-4">
          {orders.length === 0 ? (
            <div className="bg-card p-12 text-center rounded-lg">لا توجد طلبات</div>
          ) : (
            orders.map(order => (
              <div key={order.id} className="bg-card border border-border/50 rounded-lg overflow-hidden">
                <div className="grid grid-cols-1 md:grid-cols-6 gap-4 p-6 items-center">
                  <div>
                    <p className="text-xs text-muted-foreground">رقم الطلب</p>
                    <p className="font-mono font-bold text-sm">{order.id}</p>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">المستخدم</p>
                    <p className="font-bold">{order.username}</p>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">المتابعون</p>
                    <p className="font-bold">{order.followers}</p>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">السعر</p>
                    <p className="font-bold text-primary">{order.price} د.م</p>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">التاريخ</p>
                    <p className="text-sm">{order.createdAt}</p>
                  </div>
                  <div className="flex gap-2">
                    {order.status === 'In Review' && (
                      <>
                        <button
                          onClick={() => updateOrderStatus(order.id, 'Redeem')}
                          className="flex-1 bg-green-500 text-white text-sm font-bold py-2 rounded hover:opacity-90 transition"
                        >
                          موافق ✓
                        </button>
                        <button
                          onClick={() => updateOrderStatus(order.id, 'Rejected')}
                          className="flex-1 bg-red-500 text-white text-sm font-bold py-2 rounded hover:opacity-90 transition"
                        >
                          رفض ✗
                        </button>
                      </>
                    )}
                    <div className={`flex-1 text-center py-2 rounded font-bold text-sm ${
                      order.status === 'Redeem' ? 'bg-green-500/20 text-green-500' :
                      order.status === 'Rejected' ? 'bg-red-500/20 text-red-500' :
                      'bg-yellow-500/20 text-yellow-500'
                    }`}>
                      {order.status === 'Redeem' ? 'موافق' : order.status === 'Rejected' ? 'مرفوض' : 'قيد المراجعة'}
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      )}

      {/* Users Tab */}
      {activeTab === 'users' && (
        <div className="space-y-4">
          {users.length === 0 ? (
            <div className="bg-card p-12 text-center rounded-lg">لا يوجد مستخدمون</div>
          ) : (
            users.map(user => (
              <div key={user.id} className="bg-card border border-border/50 rounded-lg p-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <p className="text-xs text-muted-foreground">البريد الإلكتروني</p>
                    <p className="font-bold">{user.email}</p>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">معرف انستغرام</p>
                    <p className="font-bold">{user.instagramUsername || '-'}</p>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">تاريخ التسجيل</p>
                    <p className="font-bold">{new Date(user.createdAt).toLocaleDateString('ar-SA')}</p>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      )}
    </div>
  );
}
