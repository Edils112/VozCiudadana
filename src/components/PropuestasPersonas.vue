<template>
  <div class="propuestas-container">
    <h2 class="text-center text-white mb-4">Propuestas de la Comunidad</h2>
    
    <!-- Formulario para añadir propuesta -->
    <div class="card form-card p-4 shadow">
      <h3 class="text-center">Añadir una nueva propuesta</h3>
      <form @submit.prevent="agregarPropuesta">
        <div class="mb-3">
          <label for="titulo" class="form-label">Título</label>
          <input type="text" v-model="nuevaPropuesta.titulo" class="form-control" required />
        </div>

        <div class="mb-3">
          <label for="descripcion" class="form-label">Descripción</label>
          <textarea v-model="nuevaPropuesta.descripcion" class="form-control" rows="3" required></textarea>
        </div>

        <div class="mb-3">
          <label for="categoria" class="form-label">Categoría</label>
          <select v-model="nuevaPropuesta.categoria" class="form-select" required>
            <option disabled value="">Selecciona una categoría</option>
            <option value="Medio Ambiente">Medio Ambiente</option>
            <option value="Movilidad">Movilidad</option>
            <option value="Salud Pública">Salud Pública</option>
            <option value="Educación">Educación</option>
          </select>
        </div>

        <button type="submit" class="btn btn-primary w-100">Publicar Propuesta</button>
      </form>
    </div>

    <!-- Listado de propuestas -->
    <div v-if="propuestas.length" class="propuestas-list mt-5">
      <h3 class="text-center text-white">Propuestas Publicadas</h3>
      <div v-for="(propuesta, index) in propuestas" :key="index" class="card propuesta-card mt-3 p-3 shadow">
        <h4 class="text-primary">{{ propuesta.titulo }}</h4>
        <p><strong>Categoría:</strong> {{ propuesta.categoria }}</p>
        <p><strong>Descripción:</strong> {{ propuesta.descripcion }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      nuevaPropuesta: {
        titulo: '',
        descripcion: '',
        categoria: ''
      },
      propuestas: []
    };
  },
  methods: {
    agregarPropuesta() {
      if (this.nuevaPropuesta.titulo && this.nuevaPropuesta.descripcion && this.nuevaPropuesta.categoria) {
        this.propuestas.push({ ...this.nuevaPropuesta });
        this.nuevaPropuesta = { titulo: '', descripcion: '', categoria: '' };
      }
    }
  }
};
</script>

<style scoped>
.propuestas-container {
  background-image: url('@/assets/fondo.jpg');
  background-size: cover;
  background-position: center;
  min-height: 100vh;
  padding: 20px;
}

.text-white {
  color: #ffffff;
}

.form-card {
  max-width: 600px;
  margin: 0 auto;
  border-radius: 10px;
  background-color: rgba(255, 255, 255, 0.9);
}

.propuesta-card {
  background-color: rgba(255, 255, 255, 0.9);
  border-radius: 8px;
}
</style>
