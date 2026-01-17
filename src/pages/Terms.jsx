import React from 'react';
import { Link } from 'react-router-dom';

export default function Terms() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <div className="bg-card border border-border/50 rounded-lg p-8 space-y-8">
        <div>
          <h1 className="text-4xl font-display font-bold mb-2">📋 شروط الاستخدام</h1>
          <p className="text-muted-foreground">آخر تحديث: يناير 2026</p>
        </div>

        <div className="border-t border-border/50 pt-8">
          <h2 className="text-2xl font-bold mb-4">1. المقدمة</h2>
          <p className="text-muted-foreground leading-relaxed">
            موقع InstaBoosters هو متجر متخصص في زيادة متابعي انستغرام. بالاستخدام الخاص بك للموقع، فإنك توافق على الالتزام بهذه الشروط والأحكام.
          </p>
        </div>

        <div className="border-t border-border/50 pt-8">
          <h2 className="text-2xl font-bold mb-4">2. خدماتنا</h2>
          <ul className="space-y-3 text-muted-foreground">
            <li>• نوفر خدمة زيادة متابعي انستغرام بطريقة آمنة وموثوقة</li>
            <li>• المتابعون المقدمون حقيقيون وليسوا بوتات</li>
            <li>• لا نطلب كلمة مرور حسابك</li>
            <li>• الخدمة مدعومة بضمان استرجاع الأموال</li>
          </ul>
        </div>

        <div className="border-t border-border/50 pt-8">
          <h2 className="text-2xl font-bold mb-4">3. التزامات المستخدم</h2>
          <ul className="space-y-3 text-muted-foreground">
            <li>• يجب أن يكون حسابك على انستغرام عاماً (Public)</li>
            <li>• لا تقم بإضافة حسابات وهمية أو مزيفة</li>
            <li>• لا تقم بانتهاك قوانين انستغرام</li>
            <li>• تأكد من أن البيانات المدخلة صحيحة</li>
          </ul>
        </div>

        <div className="border-t border-border/50 pt-8">
          <h2 className="text-2xl font-bold mb-4">4. سياسة الدفع</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            نقبل طرق الدفع التالية:
          </p>
          <ul className="space-y-3 text-muted-foreground">
            <li>• PayPal: mohamedaitlhaj302@gmail.com</li>
            <li>• بطاقة بنكية (Attijariwafa): 5417554000635989</li>
          </ul>
        </div>

        <div className="border-t border-border/50 pt-8">
          <h2 className="text-2xl font-bold mb-4">5. ضمان الخدمة</h2>
          <ul className="space-y-3 text-muted-foreground">
            <li>• في حالة عدم تسليم أي متابعين، نرد أموالك بالكامل</li>
            <li>• الخدمة مضمونة 100% ضد انخفاض عدد المتابعين</li>
            <li>• في حالة حدوث أي مشكلة، تواصل معنا على مدار 24/7</li>
          </ul>
        </div>

        <div className="border-t border-border/50 pt-8">
          <h2 className="text-2xl font-bold mb-4">6. سياسة الخصوصية</h2>
          <ul className="space-y-3 text-muted-foreground">
            <li>• نحن نحترم خصوصيتك ولا نشارك بيانات معك مع أي طرف ثالث</li>
            <li>• بيانات الحساب محفوظة بأعلى مستويات الأمان</li>
            <li>• لا نختزن كلمات المرور</li>
          </ul>
        </div>

        <div className="border-t border-border/50 pt-8">
          <h2 className="text-2xl font-bold mb-4">7. عدم المسؤولية</h2>
          <p className="text-muted-foreground leading-relaxed">
            لا نتحمل مسؤولية أي أضرار قد تنجم عن سوء استخدام الخدمة أو انتهاك قوانين انستغرام. المستخدم يتحمل المسؤولية الكاملة عن استخدامه للخدمة.
          </p>
        </div>

        <div className="border-t border-border/50 pt-8">
          <h2 className="text-2xl font-bold mb-4">8. تعديلات الشروط</h2>
          <p className="text-muted-foreground leading-relaxed">
            نحتفظ بحق تعديل هذه الشروط في أي وقت. التعديلات تصبح سارية المفعول عند النشر.
          </p>
        </div>

        <div className="border-t border-border/50 pt-8">
          <h2 className="text-2xl font-bold mb-4">9. الدعم والتواصل</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            للدعم أو الاستفسارات، يرجى التواصل معنا:
          </p>
          <ul className="space-y-3 text-muted-foreground">
            <li>📧 البريد: support@insta.com</li>
            <li>📱 الهاتف: +212 XXX XXX XXX</li>
            <li>🕐 الساعات: 24/7</li>
          </ul>
        </div>

        <div className="bg-primary/10 border-l-4 border-primary p-6 rounded">
          <p className="font-bold text-primary mb-2">ملاحظة هامة:</p>
          <p className="text-muted-foreground">
            بالاستخدام المتابع للموقع، فإنك تقر بأنك قد قرأت وفهمت واتفقت على جميع الشروط والأحكام المذكورة أعلاه.
          </p>
        </div>

        <div className="text-center">
          <Link 
            to="/"
            className="inline-block bg-primary text-primary-foreground font-bold px-6 py-3 rounded-lg hover:opacity-90 transition"
          >
            العودة للرئيسية
          </Link>
        </div>
      </div>
    </div>
  );
}
