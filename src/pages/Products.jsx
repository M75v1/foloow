import React, { useState } from 'react';

const PACKAGES = [
  { id: 1, followers: 100, price: 3, durationDays: 3 },
  { id: 2, followers: 500, price: 14, durationDays: 7 },
  { id: 3, followers: 1000, price: 27, durationDays: 10 },
  { id: 4, followers: 2500, price: 65, durationDays: 15 },
  { id: 5, followers: 5000, price: 130, durationDays: 20 },
  { id: 6, followers: 10000, price: 250, durationDays: 30 },
  { id: 7, followers: 25000, price: 600, durationDays: 45 },
  { id: 8, followers: 50000, price: 1100, durationDays: 60 },
];

export default function Products() {
  const [selectedFilter, setSelectedFilter] = useState('all');

  const filteredPackages = selectedFilter === 'all' 
    ? PACKAGES 
    : selectedFilter === 'cheap' 
    ? PACKAGES.slice(0, 3)
    : PACKAGES.slice(5);

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">🎁 عروضنا الرائعة</h1>
        <p className="text-lg text-muted-foreground">اختر الحزمة المناسبة لك وابدأ الآن</p>
      </div>

      {/* Filters */}
      <div className="flex justify-center gap-4 mb-12 flex-wrap">
        <button 
          onClick={() => setSelectedFilter('all')}
          className={`px-6 py-2 rounded-lg transition ${selectedFilter === 'all' ? 'bg-primary text-primary-foreground' : 'bg-card border border-border/50 hover:border-primary/50'}`}
        >
          جميع العروض
        </button>
        <button 
          onClick={() => setSelectedFilter('cheap')}
          className={`px-6 py-2 rounded-lg transition ${selectedFilter === 'cheap' ? 'bg-primary text-primary-foreground' : 'bg-card border border-border/50 hover:border-primary/50'}`}
        >
          العروض الاقتصادية
        </button>
        <button 
          onClick={() => setSelectedFilter('premium')}
          className={`px-6 py-2 rounded-lg transition ${selectedFilter === 'premium' ? 'bg-primary text-primary-foreground' : 'bg-card border border-border/50 hover:border-primary/50'}`}
        >
          العروض الممتازة
        </button>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {filteredPackages.map((pkg) => (
          <div 
            key={pkg.id} 
            className="bg-card border-2 border-border/50 hover:border-primary/50 rounded-lg p-6 text-center neon-glow transition hover:shadow-primary/30 hover:shadow-lg"
          >
            {/* Badge */}
            {pkg.followers >= 10000 && (
              <div className="inline-block bg-secondary text-secondary-foreground text-xs px-3 py-1 rounded-full mb-4">
                ⭐ عرض شهير
              </div>
            )}

            <div className="text-5xl font-bold text-primary mb-2">{pkg.followers.toLocaleString('ar-SA')}</div>
            <p className="text-muted-foreground mb-6">متابع</p>

            <div className="bg-primary/10 rounded-lg p-4 mb-6">
              <div className="text-4xl font-bold text-primary mb-1">{pkg.price} د.م</div>
              <div className="text-sm text-muted-foreground">السعر الكلي</div>
            </div>

            <div className="text-sm text-muted-foreground mb-6">
              📅 التسليم خلال {pkg.durationDays} يوم
            </div>

            <div className="space-y-2 mb-6 text-sm text-left">
              <div className="flex items-center gap-2">✅ متابعين حقيقيين</div>
              <div className="flex items-center gap-2">✅ آمن 100%</div>
              <div className="flex items-center gap-2">✅ بدون كلمة مرور</div>
              <div className="flex items-center gap-2">✅ ضمان استرجاع</div>
            </div>

            <button className="w-full bg-primary text-primary-foreground font-bold py-3 rounded-lg hover:opacity-90 transition neon-border">
              اطلب الآن
            </button>
          </div>
        ))}
      </div>

      {/* Info Section */}
      <div className="mt-16 bg-card p-8 rounded-lg border border-border/50">
        <h2 className="text-2xl font-bold mb-6">ℹ️ معلومات مهمة</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="font-bold text-primary mb-3">كيفية الحصول على الخدمة:</h3>
            <ol className="space-y-2 text-muted-foreground list-decimal list-inside">
              <li>اختر الحزمة المناسبة</li>
              <li>أدخل معرفك @ في انستغرام</li>
              <li>اختر طريقة الدفع</li>
              <li>أنهِ عملية الدفع</li>
              <li>ابدأ تلقي المتابعين!</li>
            </ol>
          </div>
          <div>
            <h3 className="font-bold text-primary mb-3">شروط الخدمة:</h3>
            <ul className="space-y-2 text-muted-foreground list-disc list-inside">
              <li>حسابك يجب أن يكون عام (Public)</li>
              <li>لا نطلب كلمة المرور</li>
              <li>المتابعين حقيقيون وآمنين</li>
              <li>لا تخفيض للمتابعين (ضمان)</li>
              <li>دعم 24/7</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
