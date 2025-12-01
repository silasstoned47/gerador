export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: false },

  // Future compatibility options
  future: {
    compatibilityVersion: 4,
    typescriptBundlerResolution: true
  },

  // SEO Configuration
  app: {
    head: {
      htmlAttrs: {
        dir: 'ltr'
      },
      title: 'Geradores e Validadores de Documentos',
      titleTemplate: '%s',
      meta: [
        { 'http-equiv': 'content-language', content: 'pt-br' },
        { name: 'language', content: 'Portuguese' },
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Plataforma completa de ferramentas online para gerar e validar CPF, CNPJ, celular e outros documentos brasileiros. Dados fictícios para testes e desenvolvimento.' },
        { name: 'keywords', content: 'gerador cpf, validador cpf, gerador cnpj, gerador celular, Gerador II' },
        { name: 'author', content: 'Gerador II' },
        { property: 'og:type', content: 'website' },
        { property: 'og:site_name', content: 'Gerador II' },
        { property: 'og:locale', content: 'pt_BR' },
        { property: 'og:title', content: 'Geradores e Validadores de Documentos | Gerador II' },
        { property: 'og:description', content: 'Plataforma completa de ferramentas online para gerar e validar CPF, CNPJ, celular e outros documentos brasileiros.' }
      ],
      link: [
        { rel: 'canonical', href: 'https://geradorii.com' }
      ],
      script: [
        {
          src: `https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${process.env.NUXT_PUBLIC_ADSENSE_CLIENT || 'ca-pub-3743088030638764'}`,
          async: true,
          crossorigin: 'anonymous'
        }
      ]
    }
  },

  // Runtime Config
  runtimeConfig: {
    public: {
      adSenseClient: process.env.NUXT_PUBLIC_ADSENSE_CLIENT || 'ca-pub-3743088030638764'
    }
  },

  // CSS Framework
  css: ['~/assets/css/main.css'],

  // Modules for SEO and performance
  modules: ['@nuxtjs/tailwindcss', '@nuxtjs/seo', '@nuxtjs/sitemap'],

  // Site configuration (required for sitemap)
  site: {
    url: 'https://geradorii.com',
    name: 'Geradores e Validadores de Documentos',
  },

  // Sitemap configuration
  sitemap: {
    exclude: ['/dev', '/gerador', '/validadores'],
    urls: [
      '/',
      '/sobre',
      '/contato',
      '/politica-privacidade',
      '/categorias/contatos',
      '/categorias/documentos-pessoais',
      '/categorias/veiculos',
      '/gerador/celular',
      '/gerador/telefone',
      '/gerador/cnpj',
      '/gerador/cnpj-alfanumerico',
      '/gerador/cpf',
      '/gerador/qr-code',
      '/imprimir/cartela-bingo',
      '/validadores/celular',
      '/validadores/cnpj',
      '/validadores/cpf'
    ],
    defaults: {
      changefreq: 'weekly',
      priority: 0.8,
      lastmod: new Date().toISOString()
    }
  },

  // SSR Configuration for SEO
  ssr: true,
  experimental: {
    payloadExtraction: true,
    renderJsonPayloads: true
  },
  nitro: {
    prerender: {
      routes: [
        '/',
        '/gerador',
        '/gerador/cpf',
        '/gerador/celular',
        '/gerador/telefone',
        '/gerador/cnpj',
        '/gerador/cnpj-alfanumerico',
        '/gerador/qr-code',
        '/validadores',
        '/validadores/cpf',
        '/validadores/celular',
        '/validadores/cnpj',
        '/contato',
        '/politica-privacidade',
        '/imprimir/cartela-bingo'
      ],
      crawlLinks: true
    },
    routeRules: {
      '/**': { prerender: true }
    }
  },

  // SEO Module Configuration
  seo: {
    redirectToCanonicalSiteUrl: false
  }
})