<template>
  <div class="container">
    <h1 class="titlecontainer">Lo más destacado</h1>
  </div>

  <div class="card">
    <Galleria :value="vehicles" :responsiveOptions="responsiveOptions" :numVisible="4"
              :showItemNavigators="true" :showThumbnails="false" :showIndicators="true"
              containerStyle="max-width: 400px; margin: auto;">
      <template #item="slotProps">
        <div class="vehicle-item">
          <img :src="slotProps.item.image" :alt="slotProps.item.modelo" style="width: 100%" />
          <div class="vehicle-details">
            <h3>{{ slotProps.item.marca }} - {{ slotProps.item.modelo }}</h3>
            <p>{{ slotProps.item.caracteristicas }}</p>
            <button @click="handleButtonClick(slotProps.item.id)" class="btncontainer">Ver más</button>
          </div>
        </div>
      </template>
    </Galleria>

  </div>
</template>

<script>
import Galleria from 'primevue/galleria';
import { obtenerVehiculos } from '@/shared/services/http-common.js';
import { useRouter } from 'vue-router';

export default {
  data() {
    return {
      vehicles: [],
      responsiveOptions: [
        {
          breakpoint: '1024px',
          numVisible: 4
        },
        {
          breakpoint: '768px',
          numVisible: 3
        },
        {
          breakpoint: '560px',
          numVisible: 1
        }
      ]
    };
  },
  async created() {
    this.vehicles = await obtenerVehiculos();
  },
  components: {
    Galleria
  },
  methods: {
    /**
     * This method is called when the "Ver más" button is clicked.
     * It navigates to the 'RentVehicle' route, passing the id of the clicked vehicle as a route parameter.
     * @param {Number} id - The id of the clicked vehicle.
     */
    handleButtonClick(id) {
      this.$router.push({ name: 'RentVehicle', params: { id: id } });
    }
  },
  setup() {
    const router = useRouter();
    return { router };
  }
}
</script>

<style scoped>
.container {
  width: 100%;
  justify-content: space-between;
}

.titlecontainer {
  text-align: center;
  margin-bottom: 20px;
  font-size: 2rem;
}

.card {
  width: 80%;
  max-width: 640px;
  margin: auto;
  margin-bottom: 100px;
  border: 1px solid white;
  padding: 30px;
  background-color: white;
  cursor: pointer;
}

.vehicle-item {
  position: relative;
}

.vehicle-details {
  position: absolute;
  bottom: 10px;
  left: 10px;
  background: rgba(0, 0, 0, 0.5);
  color: white;
  padding: 10px;
  border-radius: 5px;
}

.p-galleria-item-nav {
  color: black;
  top: 50%;
  transform: translateY(-50%);
  z-index: 999;
}

.p-galleria {
  background-color: #cccccc;
  border-radius: 1rem;
}

.btncontainer {
  margin-top: 1rem;
  margin-right: 1rem;
  background: #0097b2;
  border: none;
  padding: 8px 8px;
  border-radius: 5px;
  width: 80px;
  cursor: pointer;
}

.buttoncontainer {
  text-align: center;
}

.btncontainer:hover {
  transform: scale(1.1);
}
</style>
