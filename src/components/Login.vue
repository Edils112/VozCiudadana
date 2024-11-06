<!-- eslint-disable vue/multi-word-component-names -->

<template>
  <div class="auth-background">
    <div class="container mt-5">
      <div class="row justify-content-center">
        <div class="col-md-6">
          <!-- Título principal en color blanco -->
          <h1 class="text-center text-white mb-4">Voz Ciudadana</h1>
          
          <div class="card p-4 shadow">
            <!-- Selector de Login / Register -->
            <div class="form-switch mb-3 text-center">
              <button @click="switchForm('login')" class="btn btn-outline-primary me-2" :class="{ active: isLogin }">Login</button>
              <button @click="switchForm('register')" class="btn btn-outline-primary" :class="{ active: !isLogin }">Register</button>
            </div>

            <!-- Formulario de Login -->
            <div v-if="isLogin">
              <h2 class="text-center mb-4">Login</h2>
              <form @submit.prevent="submitLogin">
                <div class="mb-3">
                  <label for="email" class="form-label">Email</label>
                  <input type="email" v-model="email" class="form-control" required />
                </div>

                <div class="mb-3">
                  <label for="password" class="form-label">Password</label>
                  <input type="password" v-model="password" class="form-control" required />
                </div>

                <button type="submit" class="btn btn-primary w-100">Login</button>
              </form>

              <div v-if="errorMessage" class="alert alert-danger mt-3">
                {{ errorMessage }}
              </div>
            </div>

            <!-- Formulario de Registro -->
            <div v-if="!isLogin">
              <h2 class="text-center mb-4">Register</h2>
              <form @submit.prevent="submitRegister">
                <div class="mb-3">
                  <label for="email" class="form-label">Email</label>
                  <input type="email" v-model="email" class="form-control" required />
                </div>

                <div class="mb-3">
                  <label for="password" class="form-label">Password</label>
                  <input type="password" v-model="password" class="form-control" required />
                </div>

                <button type="submit" class="btn btn-primary w-100">Register</button>
              </form>

              <div v-if="errorMessage" class="alert alert-danger mt-3">
                {{ errorMessage }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: '',
      password: '',
      isLogin: true,
      errorMessage: '',
      users: [] // Simular una base de datos local de usuarios
    };
  },
  methods: {
    switchForm(form) {
      this.isLogin = form === 'login';
      this.errorMessage = '';
    },
    submitLogin() {
      // Busca al usuario en la lista
      const user = this.users.find(u => u.email === this.email && u.password === this.password);

      if (user) {
        // Emitir evento de autenticación y redirigir
        this.$emit('authenticated', true);
        this.$router.push('/propuestas-personas');
      } else {
        this.errorMessage = 'Credenciales inválidas';
      }
    },
    submitRegister() {
      const existingUser = this.users.find(u => u.email === this.email);
      if (existingUser) {
        this.errorMessage = 'El usuario ya existe';
      } else {
        this.users.push({
          email: this.email,
          password: this.password
        });
        alert('Registro exitoso');
        this.switchForm('login');
      }
    }
  }
};
</script>

<style scoped>
/* Imagen de fondo aplicada al contenedor principal */
.auth-background {
  background-image: url('@/assets/fondo.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  min-height: 100vh; /* Asegura que cubra toda la altura de la página */
  display: flex;
  align-items: center;
  justify-content: center;
}

h1 {
  font-size: 2.5rem; /* Tamaño del título */
  color: white; /* Asegúrate de que el color sea blanco */
}

.form-switch button {
  width: 100px;
}

button.active {
  font-weight: bold;
}

.card {
  border-radius: 10px;
  background-color: #f9f9f9;
}

.card h2 {
  color: #333;
}

.btn {
  transition: background-color 0.3s ease;
}

.btn-primary:hover {
  background-color: #0056b3; /* Cambia el color en hover */
}

.alert {
  margin-top: 15px;
}
</style>
