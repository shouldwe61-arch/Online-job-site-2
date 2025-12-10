// إعداد أرقام التواصل - إذا غيرت الأرقام عدّلها هنا فقط
const WHATSAPP_NUMBER = '+201016518937'; // رقم واتساب بصيغة دولية
const PHONE_NUMBER = '+201080614329';

// تهيئة أزرار واتساب في الصفحة
function makeWhatsAppLink(number, text) {
  const base = 'https://wa.me/' + number.replace(/\D/g,'');
  const encoded = '?text=' + encodeURIComponent(text || '');
  return base + encoded;
}

// عناصر
const whatsappTop = document.getElementById('whatsappTop');
const whatsappHero = document.getElementById('whatsappHero');
const whatsappText = document.getElementById('whatsappText');
const yearEl = document.getElementById('year');

yearEl.textContent = new Date().getFullYear();

// ضبط روابط في الهيدر والهيرو
const defaultIntro = 'أود التقديم على وظيفة في مشروع محطة القطر السريع - وادي النطرون (Smart Power)';
if (whatsappTop) whatsappTop.href = makeWhatsAppLink(WHATSAPP_NUMBER, defaultIntro);
if (whatsappHero) whatsappHero.href = makeWhatsAppLink(WHATSAPP_NUMBER, defaultIntro);
if (whatsappText) whatsappText.href = makeWhatsAppLink(WHATSAPP_NUMBER, defaultIntro);

// نموذج التقديم: فتح واتساب برسالة مملوءة
const form = document.getElementById('applyForm');
if (form) {
  form.addEventListener('submit', function(e){
    e.preventDefault();
    const name = document.getElementById('name').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const position = document.getElementById('position').value.trim() || 'غير محدد';
    const message = document.getElementById('message').value.trim() || '';

    if (!name || !phone) {
      alert('من فضلك اكتب الاسم ورقم الهاتف.');
      return;
    }

    const text = `مرحبًا، أود التقديم على وظيفة في مشروع محطة القطر السريع.\n\nالاسم: ${name}\nالهاتف: ${phone}\nالوظيفة المطلوبة: ${position}\nملاحظة: ${message}`;
    const link = makeWhatsAppLink(WHATSAPP_NUMBER, text);

    // افتح واتساب في نافذة جديدة (أو نفس النافذة على الهاتف)
    window.open(link, '_blank');
  });
}
