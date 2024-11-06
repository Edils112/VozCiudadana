<template>
  <div id="app">
    <!-- Mostrar el login si el usuario no está autenticado -->
    <Login v-if="!isAuthenticated" @authenticated="handleAuthentication" />

    <!-- Mostrar PropuestasPersonas si el usuario está autenticado -->
    <PropuestasPersonas v-if="isAuthenticated" />
  </div>
</template>

<script>
import Login from './components/Login.vue';
import PropuestasPersonas from './components/PropuestasPersonas.vue';

export default {
  components: {
    Login,
    PropuestasPersonas,
  },
  data() {
    return {
      isAuthenticated: false, // Inicialmente, el usuario no está autenticado
    };
  },
  methods: {
    handleAuthentication(isAuth) {
      // Cambia el estado de autenticación cuando se llame esta función
      this.isAuthenticated = isAuth;
    },
  },
};
</script>
