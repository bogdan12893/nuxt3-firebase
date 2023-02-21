// https://nuxt.com/docs/api/configuration/nuxt-config
import eslintPlugin from 'vite-plugin-eslint';

export default defineNuxtConfig({
  app: {
    head: {
      title: 'nuxt3-firebase',
      meta: [
        {
          name: 'viewport',
          content: 'width=device-width, initial-scale=1.0, height=device-height, minimum-scale=1.0, user-scalable=0',
        },
        {
          hid: 'description',
          name: 'description',
          content: 'nuxt3-firebase',
        },
        {
          hid: 'keywords',
          name: 'keywords',
          content: 'nuxt3-firebase',
        },
      ],
    },
  },

  components: true,

  css: ['~/assets/css/main.scss'],

  vite: {
    plugins: [eslintPlugin()],
  },

  modules: ['@nuxtjs/tailwindcss'],

  runtimeConfig: {
    public: {
      FIREBASE_API_KEY: process.env.FIREBASE_API_KEY,
    },
    private: {
      FIREBASE_API_KEY: process.env.FIREBASE_API_KEY,
    },
  },
});
