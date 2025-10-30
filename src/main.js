import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import {Fancybox} from '@fancyapps/ui'
import '@fancyapps/ui/dist/fancybox/fancybox.css'


Fancybox.bind('[data-fancybox]', {
  Toolbar: {
    display: {
      left: ["infobar"],
      middle: [],
      right: ["close", "thumbs"]
    },
  },
  Slideshow: false,
  Thumbs: {
    autoStart: false,
  },
  Images: {
    zoom: true,
  },
  Carousel: {
    transition: "slide",
    preload: 2,
  },
  caption: {
    show: "click",
  },
});

createApp(App).use(router).mount('#app')