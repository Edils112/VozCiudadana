import 'bootstrap/dist/css/bootstrap.min.css';
import { createApp } from 'vue';
import App from './App.vue';
import router from './router'; // Asegúrate de importar el router

const app = createApp(App);

app.use(router); // Usa el router en la instancia de Vue
app.mount('#app');
