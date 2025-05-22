# 🖥️ ServerCraft - لوحة إدارة السيرفرات

مشروع بسيط باستخدام HTML + JavaScript + Supabase لعرض وإضافة معلومات السيرفرات بطريقة تفاعلية، دون الحاجة إلى سيرفر Backend.

---

## ✅ الميزات

- واجهة باللغة العربية بالكامل
- ربط مباشر مع قاعدة بيانات Supabase
- إضافة السيرفرات وتخزينها في قاعدة البيانات
- عرض جميع السيرفرات المضافة في صفحة واحدة
- استخدام مفاتيح API آمنة (anon)

---

## 🧩 الملفات

| الملف         | الوصف |
|---------------|-------|
| `index.html`  | الصفحة الرئيسية للموقع |
| `style.css`   | تنسيقات وتصميم الواجهة |
| `script.js`   | منطق إضافة وعرض السيرفرات |
| `supabase.js` | ملف الاتصال بـ Supabase باستخدام API Key و URL |

---

## ⚙️ كيفية الاستخدام

1. **أنشئ مشروع على [Supabase](https://supabase.com)**
2. **أضف جدول `servers`** بالحقول التالية:

| اسم العمود   | النوع     | الإعدادات                             |
|--------------|----------|--------------------------------------|
| id           | uuid     | Primary key + default: uuid_generate_v4() |
| name         | text     | اسم السيرفر                          |
| ram          | integer  | حجم الرام (جيجابايت)                 |
| cpu          | integer  | عدد الأنوية                          |
| gpu          | text     | نوع كرت الشاشة                       |
| storage      | integer  | سعة التخزين (جيجابايت)              |
| autoStart    | boolean  | تشغيل تلقائي (نعم أو لا)            |
| created_at   | timestamp| default: now()                       |

3. **انسخ رابط المشروع والمفتاح العام (anon key)**
4. **ضعهما داخل ملف `supabase.js`** بالشكل التالي:

```js
import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm'

const SUPABASE_URL = 'رابط المشروع';
const SUPABASE_KEY = 'المفتاح العام';

export const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);
