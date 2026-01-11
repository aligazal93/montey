export default ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET'),
  },

  apiToken: {
    salt: env('API_TOKEN_SALT'),
  },

  transfer: {
    token: {
      salt: env('TRANSFER_TOKEN_SALT'),
    },
  },

  secrets: {
    encryptionKey: env('ENCRYPTION_KEY'),
  },

  flags: {
    nps: env.bool('FLAG_NPS', true),
    promoteEE: env.bool('FLAG_PROMOTE_EE', true),
  },

  // 👇 التعديل الخاص بالترحيب تحت اللوجو
  translations: {
    en: {
      'Auth.form.welcome.title': 'Welcome to Montey',
      'Auth.form.welcome.subtitle': 'Dashboard Management',
    },
    ar: {
      'Auth.form.welcome.title': 'مرحباً بك',
      'Auth.form.welcome.subtitle': 'لوحة تحكم Montey',
    },
  },
});
