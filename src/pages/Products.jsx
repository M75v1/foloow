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
      <div className="text-center mb-16">
        <h1 className="text-5xl md:text-6xl font-display font-bold mb-4">🎁 عروضنا الرائعة</h1>
        <p className="text-xl text-muted-foreground">اختر الحزمة المناسبة لك وابدأ الآن - أفضل أسعار مضمونة</p>
      </div>

      {/* Filters */}
      <div className="flex justify-center gap-4 mb-16 flex-wrap">
        <button 
          onClick={() => setSelectedFilter('all')}
          className={`px-8 py-3 rounded-xl transition font-bold transform hover:scale-105 ${selectedFilter === 'all' ? 'bg-primary text-primary-foreground shadow-lg neon-glow' : 'bg-card border-2 border-primary/20 hover:border-primary/60'}`}
        >
          جميع العروض
        </button>
        <button 
          onClick={() => setSelectedFilter('cheap')}
          className={`px-8 py-3 rounded-xl transition font-bold transform hover:scale-105 ${selectedFilter === 'cheap' ? 'bg-primary text-primary-foreground shadow-lg neon-glow' : 'bg-card border-2 border-primary/20 hover:border-primary/60'}`}
        >
          💰 الاقتصادية
        </button>
        <button 
          onClick={() => setSelectedFilter('premium')}
          className={`px-8 py-3 rounded-xl transition font-bold transform hover:scale-105 ${selectedFilter === 'premium' ? 'bg-primary text-primary-foreground shadow-lg neon-glow' : 'bg-card border-2 border-primary/20 hover:border-primary/60'}`}
        >
          ⭐ الممتازة
        </button>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {filteredPackages.map((pkg) => (
          <div 
            key={pkg.id} 
            className="bg-card border-2 border-primary/30 hover:border-primary/80 rounded-2xl p-8 text-center neon-glow transition transform hover:-translate-y-3 hover:shadow-2xl"
          >
            {/* Badge */}
            {pkg.followers >= 10000 && (
              <div className="inline-block bg-gradient-to-r from-secondary to-primary text-white text-xs px-4 py-2 rounded-full mb-6 font-bold">
                ⭐ عرض شهير
              </div>
            )}

            <div className="text-6xl font-bold text-primary mb-3 drop-shadow-lg">{pkg.followers.toLocaleString('ar-SA')}</div>
            <p className="text-muted-foreground mb-8 text-lg font-medium">متابع</p>

            <div className="bg-gradient-to-br from-primary/20 to-secondary/10 rounded-xl p-5 mb-8 border border-primary/20">
              <div className="text-5xl font-bold text-primary mb-2">{pkg.price}</div>
              <div className="text-muted-foreground text-sm">د.م</div>
            </div>

            <div className="text-sm text-muted-foreground mb-8 bg-card/50 p-3 rounded-lg border border-primary/10">
              ⏱️ <span className="font-medium">التسليم خلال</span> {pkg.durationDays} يوم
            </div>

            <div className="space-y-2 mb-8 text-sm text-right bg-card/50 p-4 rounded-lg border border-primary/10">
              <div className="flex items-center gap-2 text-primary font-medium">✅ متابعين حقيقيين</div>
              <div className="flex items-center gap-2 text-primary font-medium">✅ آمن 100%</div>
              <div className="flex items-center gap-2 text-primary font-medium">✅ بدون كلمة مرور</div>
              <div className="flex items-center gap-2 text-primary font-medium">✅ ضمان استرجاع</div>
            </div>

            <button className="w-full bg-gradient-to-r from-primary to-secondary text-primary-foreground font-bold py-4 rounded-xl hover:shadow-lg transform hover:scale-105 transition neon-border">
              اطلب الآن 🚀
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
