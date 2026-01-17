import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-card border-t-2 border-primary/20 mt-16 py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div>
            <h3 className="text-xl font-bold text-primary mb-4">🎮 InstaBoosters</h3>
            <p className="text-muted-foreground leading-relaxed">متجر احترافي لزيادة متابعي انستغرام بجودة عالية وأسعار منخفضة</p>
          </div>
          
          <div>
            <h4 className="font-bold mb-5 text-lg">الروابط السريعة</h4>
            <ul className="space-y-3 text-muted-foreground">
              <li><a href="/#/" className="hover:text-primary transition font-medium">الرئيسية</a></li>
              <li><a href="/#/products" className="hover:text-primary transition font-medium">المنتجات</a></li>
              <li><a href="/#/about" className="hover:text-primary transition font-medium">عن الموقع</a></li>
              <li><a href="/#/terms" className="hover:text-primary transition font-medium">الشروط</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-5 text-lg">الدعم والمساعدة</h4>
            <ul className="space-y-3 text-muted-foreground">
              <li>📧 <span className="font-medium">البريد:</span> mo7am5dyt@gmail.com</li>
              <li>📱 <span className="font-medium">الهاتف:</span> +212 XXX XXX XXX</li>
              <li>🕐 <span className="font-medium">الساعات:</span> 24/7</li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-5 text-lg">طرق الدفع</h4>
            <div className="space-y-3 text-muted-foreground">
              <div className="flex items-center gap-2">💳 <span>PayPal</span></div>
              <div className="flex items-center gap-2">🏦 <span>Attijariwafa Bank</span></div>
              <div className="flex items-center gap-2">💰 <span>طرق أخرى</span></div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-primary/20 pt-8 text-center text-muted-foreground">
          <p>© 2026 InstaBoosters. جميع الحقوق محفوظة</p>
          <p className="text-sm mt-2">تم تطويره بـ ❤️ لخدمتك</p>
        </div>
      </div>
    </footer>
  );
}
