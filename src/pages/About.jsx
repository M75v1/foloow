import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, Shield, Zap } from 'lucide-react';

export default function About() {
  return (
    <div className="space-y-20">
      {/* Hero */}
      <section className="max-w-6xl mx-auto px-4">
        <div className="bg-gradient-to-r from-primary/30 to-secondary/30 border-l-4 border-primary p-12 rounded-2xl neon-glow">
          <h1 className="text-6xl font-display font-bold mb-6">🎯 عن InstaBoosters</h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            🌟 نحن متخصصون في توفير خدمات احترافية وآمنة لزيادة متابعي انستغرام. منذ التأسيس، خدمنا آلاف العملاء الراضين حول العالم بجودة عالية وأسعار منخفضة.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-card p-10 rounded-2xl border-l-4 border-primary neon-glow">
            <h2 className="text-3xl font-bold mb-6">🎯 رسالتنا</h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              تقديم خدمات عالية الجودة وموثوقة لمساعدة الأفراد والعلامات التجارية على تطوير وجودهم على انستغرام بطريقة آمنة وقانونية وشفافة.
            </p>
          </div>
          
          <div className="bg-card p-10 rounded-2xl border-l-4 border-secondary neon-glow">
            <h2 className="text-3xl font-bold mb-6">🚀 رؤيتنا</h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              أن نصبح الخيار الأول والأموثق للعملاء في تحقيق نموهم على وسائل التواصل الاجتماعي من خلال الخدمات المبتكرة والدعم الاستثنائي 24/7.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-display font-bold text-center mb-12">لماذا تختار InstaBoosters؟</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-card p-8 rounded-lg border border-border/50 neon-glow hover:border-primary/50 transition">
            <Shield className="text-primary mb-4" size={40} />
            <h3 className="text-xl font-bold mb-3">آمن 100%</h3>
            <p className="text-muted-foreground">
              خدماتنا آمنة تماماً ولا تسبب أي ضرر لحسابك. لا نطلب كلمة المرور أبداً.
            </p>
          </div>

          <div className="bg-card p-8 rounded-lg border border-border/50 neon-glow hover:border-primary/50 transition">
            <Zap className="text-primary mb-4" size={40} />
            <h3 className="text-xl font-bold mb-3">سريع جداً</h3>
            <p className="text-muted-foreground">
              التسليم يتم في فترة وجيزة. معظم الطلبات تُسلَّم خلال 48 ساعة.
            </p>
          </div>

          <div className="bg-card p-8 rounded-lg border border-border/50 neon-glow hover:border-primary/50 transition">
            <CheckCircle className="text-primary mb-4" size={40} />
            <h3 className="text-xl font-bold mb-3">مضمون 100%</h3>
            <p className="text-muted-foreground">
              خدمتنا مدعومة بضمان كامل. إذا لم نف بالوعد، نرد أموالك.
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="bg-primary/10 p-8 rounded-lg text-center border-l-4 border-primary">
            <div className="text-4xl font-bold text-primary mb-2">10K+</div>
            <p className="text-muted-foreground">عميل سعيد</p>
          </div>
          
          <div className="bg-secondary/10 p-8 rounded-lg text-center border-l-4 border-secondary">
            <div className="text-4xl font-bold text-secondary mb-2">5M+</div>
            <p className="text-muted-foreground">متابع تم تسليمه</p>
          </div>
          
          <div className="bg-green-500/10 p-8 rounded-lg text-center border-l-4 border-green-500">
            <div className="text-4xl font-bold text-green-500 mb-2">99.9%</div>
            <p className="text-muted-foreground">معدل الرضا</p>
          </div>
          
          <div className="bg-blue-500/10 p-8 rounded-lg text-center border-l-4 border-blue-500">
            <div className="text-4xl font-bold text-blue-500 mb-2">24/7</div>
            <p className="text-muted-foreground">دعم متواصل</p>
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-display font-bold text-center mb-12">كيف تعمل خدماتنا؟</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {[
            { step: 1, title: 'اختر الحزمة', desc: 'اختر عدد المتابعين المناسب لك' },
            { step: 2, title: 'أدخل البيانات', desc: 'أدخل معرف انستغرام الخاص بك' },
            { step: 3, title: 'ادفع', desc: 'اختر طريقة الدفع المفضلة لديك' },
            { step: 4, title: 'استقبل', desc: 'ابدأ بتلقي المتابعين الحقيقيين' },
          ].map((item, idx) => (
            <div key={idx} className="relative">
              <div className="bg-card p-6 rounded-lg border-2 border-primary/30 hover:border-primary/50 transition text-center">
                <div className="absolute -top-4 left-6 bg-primary text-primary-foreground rounded-full w-10 h-10 flex items-center justify-center font-bold">
                  {item.step}
                </div>
                <h3 className="font-bold text-lg mt-6 mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
              {idx < 3 && <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 translate-x-full text-primary text-2xl">→</div>}
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-4xl mx-auto px-4">
        <div className="bg-gradient-to-r from-primary to-secondary p-12 rounded-lg text-center">
          <h2 className="text-3xl font-display font-bold text-white mb-4">هل أنت مستعد للبدء؟</h2>
          <p className="text-white/80 text-lg mb-8">انضم لآلاف العملاء الراضين وزد متابعيك اليوم!</p>
          <Link 
            to="/order"
            className="inline-block bg-white text-primary font-bold px-8 py-4 rounded-lg hover:opacity-90 transition"
          >
            ابدأ الآن 🚀
          </Link>
        </div>
      </section>

      {/* Contact */}
      <section className="max-w-6xl mx-auto px-4">
        <div className="bg-card border border-border/50 p-8 rounded-lg">
          <h2 className="text-2xl font-bold mb-8">تواصل معنا</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-bold text-primary mb-2">📧 البريد الإلكتروني</h3>
              <p className="text-muted-foreground">mo7am5dyt@gmail.com</p>
              <p className="text-sm text-muted-foreground mt-2">الرد خلال ساعة واحدة</p>
            </div>
            <div>
              <h3 className="font-bold text-primary mb-2">📱 الهاتف</h3>
              <p className="text-muted-foreground">+212 XXX XXX XXX</p>
              <p className="text-sm text-muted-foreground mt-2">يومياً من 9 صباحاً إلى 6 مساءً</p>
            </div>
            <div>
              <h3 className="font-bold text-primary mb-2">🕐 الدعم</h3>
              <p className="text-muted-foreground">24/7 متاح</p>
              <p className="text-sm text-muted-foreground mt-2">نحن هنا دائماً لمساعدتك</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
