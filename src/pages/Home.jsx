import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Zap, Shield, Rocket } from 'lucide-react';

export default function Home() {
  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-primary via-secondary to-primary text-white py-24 px-4 rounded-2xl overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="neon-glow absolute top-10 left-10 w-32 h-32 rounded-full blur-3xl"></div>
          <div className="neon-glow absolute bottom-10 right-10 w-40 h-40 rounded-full blur-3xl"></div>
        </div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h1 className="text-6xl md:text-7xl font-display font-bold mb-6 drop-shadow-lg">🚀 ارفع متابعيك الآن!</h1>
          <p className="text-xl md:text-2xl mb-10 opacity-95 drop-shadow-md">
            أسهل وأسرع طريقة لزيادة متابعي انستغرام بجودة عالية وأسعار منخفضة
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link 
              to="/order" 
              className="bg-white text-primary font-bold px-10 py-4 rounded-xl hover:opacity-90 transition transform hover:scale-105 flex items-center gap-2 neon-border shadow-lg"
            >
              اطلب الآن <ArrowRight />
            </Link>
            <Link 
              to="/products" 
              className="border-2 border-white px-10 py-4 rounded-xl hover:bg-white/10 transition transform hover:scale-105 font-bold"
            >
              عرض المنتجات
            </Link>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="max-w-6xl mx-auto px-4">
        <h2 className="text-5xl font-display font-bold text-center mb-16">لماذا نحن؟</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-card p-8 rounded-xl border-2 border-primary/30 neon-glow hover:border-primary/60 transition transform hover:-translate-y-2">
            <Zap className="text-primary mb-4" size={40} />
            <h3 className="text-2xl font-bold mb-3">سريع جداً</h3>
            <p className="text-muted-foreground text-lg">تسليم فوري للمتابعين بدون انتظار طويل</p>
          </div>

          <div className="bg-card p-8 rounded-xl border-2 border-secondary/30 neon-glow hover:border-secondary/60 transition transform hover:-translate-y-2">
            <Shield className="text-secondary mb-4" size={40} />
            <h3 className="text-2xl font-bold mb-3">آمن 100%</h3>
            <p className="text-muted-foreground text-lg">حسابك آمن معنا، لا تقلق من الحظر</p>
          </div>

          <div className="bg-card p-8 rounded-xl border-2 border-primary/30 neon-glow hover:border-primary/60 transition transform hover:-translate-y-2">
            <Rocket className="text-primary mb-4" size={40} />
            <h3 className="text-2xl font-bold mb-3">أسعار منخفضة</h3>
            <p className="text-muted-foreground text-lg">أفضل الأسعار في السوق المصرية والخليجية</p>
          </div>
        </div>
      </section>

      {/* Pricing Preview */}
      <section className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-display font-bold text-center mb-12">تسعيرة سريعة</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {[
            { followers: 100, price: 3 },
            { followers: 500, price: 14 },
            { followers: 1000, price: 27 },
            { followers: 5000, price: 130 },
          ].map((item, idx) => (
            <div key={idx} className="bg-card p-6 rounded-lg border border-primary/20 hover:border-primary/50 transition text-center neon-glow">
              <div className="text-3xl font-bold text-primary mb-2">{item.followers}</div>
              <div className="text-sm text-muted-foreground mb-4">متابع</div>
              <div className="text-2xl font-bold mb-2">{item.price} د.م</div>
              <button className="w-full bg-primary text-primary-foreground py-2 rounded-lg hover:opacity-90 transition">
                اطلب الآن
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-4xl mx-auto px-4 bg-card p-8 rounded-lg border-2 border-primary/30 text-center">
        <h2 className="text-3xl font-display font-bold mb-4">هل أنت مستعد؟</h2>
        <p className="text-lg text-muted-foreground mb-6">
          انضم لآلاف العملاء الراضين والذين زادوا متابعهم بنجاح
        </p>
        <Link 
          to="/order" 
          className="inline-block bg-primary text-primary-foreground font-bold px-8 py-4 rounded-lg hover:opacity-90 transition neon-glow"
        >
          ابدأ الآن 🚀
        </Link>
      </section>
    </div>
  );
}
