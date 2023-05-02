import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

import PrimeVue from 'primevue/config'  // import PrimeVue

// import CSS resources
import 'primevue/resources/primevue.min.css'            // core 
import 'primevue/resources/themes/saga-blue/theme.css'  // theme
import 'primeicons/primeicons.css'                      // icons
import '/node_modules/primeflex/primeflex.css'          // PrimeFlex
import Calendar from 'primevue/calendar';

import Button from 'primevue/button' 
import InputText from 'primevue/inputtext';
import MultiSelect from "primevue/multiselect";
import MultiSelectFilter from "primevue/multiselect";
import DataTable from 'primevue/datatable';
import Column from 'primevue/datatable';

 // import Button component

const app = createApp(App)  // create new Vue app

app.use(PrimeVue)  // register PrimeVue

app.component('Button', Button)  // register Button component
app.component('InputText', InputText)  // register Button component
app.component('Calendar', Calendar)  // register Button component
app.component('MultiSelect', MultiSelect)  // register Button component
app.component('MultiSelectFilter', MultiSelectFilter)  // register Button component
app.component('DataTable', DataTable)  // register Button component
app.component('Column', Column)  // register Button component

app.mount('#app')  // mount the app
