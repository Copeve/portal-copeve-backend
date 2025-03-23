export default [
  'strapi::logger',
  'strapi::errors',
  'strapi::security',
  'strapi::cors',
  'strapi::poweredBy',
  'strapi::query',
  {
    name: 'strapi::body',
    config: {
        formLimit: "100mb", // Aumenta o limite para formulários
        jsonLimit: "100mb", // Aumenta o limite para JSON
        textLimit: "100mb", // Aumenta o limite para texto
        formidable: {
            maxFileSize: 100 * 1024 * 1024 * 10, // 100MB
        },
    },
  },
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
];
