<script>
import { obtenerVehiculos } from '@/shared/services/http-common.js';
import ButtonSelect from '@/Components/Button.vue';

export default {
  data() {
    return {
      vehicles: []
    };
  },
  async created() {
    // Cargar vehículos desde el servicio
    this.vehicles = await obtenerVehiculos();
  },
  components: {
    ButtonSelect
  },
  methods: {
    handleButtonClick() {
      this.$router.push('/RentVehicle'); // Navegación
    }
  }
};
</script>

<template>
  <div class="container">
    <h1>Vehículos</h1>

    <div class="cards">
      <!-- Iterar sobre los vehículos obtenidos de la API -->
      <div class="card" v-for="vehicle in vehicles" :key="vehicle.id">
        <!-- Imagen opcional si tu backend tiene un campo de imagen -->
        <img :src="vehicle.image || 'default-image.png'" :alt="vehicle.vehicleName" />

        <h2>{{ vehicle.vehicleName }}</h2>
        <p><strong>Descripción:</strong> {{ vehicle.description }}</p>
        <p><strong>Categoría:</strong> {{ vehicle.category.name }}</p>
        <p><strong>Estado:</strong> {{ vehicle.status }}</p>

        <!-- Botón de acción -->
        <ButtonSelect @click="handleButtonClick" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  padding: 20px;
  margin: 0 auto;
}

h1 {
  text-align: center;
  color: #0097b2;
  margin-bottom: 20px;
  font-size: 2.2rem;
}

.cards {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.card {
  width: calc(33% - 20px);
  border: 3px solid #ccc;
  margin-bottom: 20px;
  padding: 15px;
  border-radius: 20px;
}

.card img {
  width: 100%;
  border-radius: 20px;
  object-fit: cover;
}

.card h2 {
  margin: 10px 0;
}

.card p {
  margin-bottom: 0;
}

/* Media query para pantallas pequeñas */
@media (max-width: 768px) {
  .card {
    width: calc(50% - 20px);
  }
}
</style>
