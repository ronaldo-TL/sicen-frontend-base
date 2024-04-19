import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from './App.vue';
import { router } from './router';
import PerfectScrollbar from 'vue3-perfect-scrollbar';
import VueApexCharts from 'vue3-apexcharts';
import VueTablerIcons from 'vue-tabler-icons';
// import { fakeBackend } from '@/utils/helpers/fake-backend';
import 'vue3-carousel/dist/carousel.css';
//Mock Api data
// import './_mockApis';
// import VueDragscroll from "vue-dragscroll";

import Maska from 'maska';


import Vue3EasyDataTable from 'vue3-easy-data-table';
import 'vue3-easy-data-table/dist/style.css';
//i18
import { createI18n } from 'vue-i18n';
import VueScrollTo from 'vue-scrollto';
//LightBox
import VueEasyLightbox from 'vue-easy-lightbox';



const i18n = createI18n({
    locale: 'en',
    silentTranslationWarn: true,
    silentFallbackWarn: true
});

const app = createApp(App);
// fakeBackend();
app.use(router);
app.component('EasyDataTable', Vue3EasyDataTable);
app.use(PerfectScrollbar);
// app.use(VueDragscroll);
app.use(createPinia());

app.use(VueTablerIcons);

app.use(i18n);
app.use(Maska);
app.use(VueApexCharts);
app.mount('#app');

//ScrollTop Use
// app.use(VueScrollTo);
app.use(VueScrollTo, {
    duration: 1000,
    easing: "ease"
});

//Lightbox
app.use(VueEasyLightbox)

