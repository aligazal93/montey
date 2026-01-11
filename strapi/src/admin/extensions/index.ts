import './styles/global.css';
import arTranslations from './translations/ar.json';

export default {
  bootstrap(app:any) {
    // تسجيل الترجمة العربية
    app.registerTranslation('ar', arTranslations);
    // جعل العربية اللغة الافتراضية
     app.setDefaultLocale('ar');
  },
};
