import { createI18n } from 'vue-i18n';

// Импорт файлов с переводами
import en from '@/locales/en.json';
import ru from '@/locales/ru.json';

const i18n = createI18n({
  locale: 'en',
  fallbackLocale: 'en',
  messages: {
    en,
    ru,
  },
});

export default i18n;
