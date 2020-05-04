export default {
  mode: "universal",
  /*
   ** Headers of the page
   */
  head: {
    title: process.env.npm_package_name || "",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: process.env.npm_package_description || ""
      }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: "#fff" },
  /*
   ** Global CSS
   */
  css: [
    "element-ui/lib/theme-chalk/index.css",
    "element-ui/lib/theme-chalk/display.css",
    "@/assets/style.css"
  ],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    { src: "@/plugins/element-ui", mode: "client" },
    { src: "@/plugins/vue-particles", mode: "client" },
    { src: "@/plugins/vue-typewriter", mode: "client" },
    { src: "@/plugins/vue-3d-carousel", mode: "client" }
  ],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [],
  /*
   ** Nuxt.js modules
   */
  modules: [
    [
      "nuxt-fontawesome",
      {
        imports: [
          {
            set: "@fortawesome/free-solid-svg-icons",
            icons: ["fas"]
          },
          {
            set: "@fortawesome/free-brands-svg-icons",
            icons: ["fab"]
          }
        ]
      }
    ]
  ],
  /*
   ** Build configuration
   */
  build: {
    transpile: ["element-ui", "vue-particles", "vue-typewriter"],
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  }
};
