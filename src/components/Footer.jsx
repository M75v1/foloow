import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-card border-t border-border/50 mt-12 py-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-lg font-bold text-primary mb-4">InstaBoosters</h3>
            <p className="text-muted-foreground">متجر احترافي لزيادة متابعي انستغرام بجودة عالية</p>
          </div>
          
          <div>
            <h4 className="font-bold mb-4">الروابط</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li><a href="/" className="hover:text-primary transition">الرئيسية</a></li>
              <li><a href="/products" className="hover:text-primary transition">المنتجات</a></li>
              <li><a href="/about" className="hover:text-primary transition">عن الموقع</a></li>
              <li><a href="/terms" className="hover:text-primary transition">الشروط</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-4">الدعم</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li>البريد: support@insta.com</li>
              <li>الهاتف: +212 XXX XXX XXX</li>
              <li>الساعات: 24/7</li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-4">الدفع</h4>
            <div className="space-y-2 text-muted-foreground">
              <div className="flex items-center gap-2">💳 PayPal</div>
              <div className="flex items-center gap-2">🏦 Attijariwafa Bank</div>
              <div className="flex items-center gap-2">💳 بطاقات أخرى</div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-border/50 pt-8 text-center text-muted-foreground">
          <p>&copy; 2026 InstaBoosters. جميع الحقوق محفوظة</p>
        </div>
      </div>
    </footer>
  );
}
