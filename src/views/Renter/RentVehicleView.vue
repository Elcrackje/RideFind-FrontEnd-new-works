<script>
import profileImage from "@/assets/img/vehicleimage.png";
//import { obtenerVehiculos } from "@/shared/services/http-common.js";

export default {
  props: ['id'],
  name: "RentVehicleView",
  data() {
    return {
      vehicles: null,
      checked: false,
      profileImage
    };
  },
  async created() {
    /**
     * This lifecycle hook is called when the component is created.
     * It fetches the list of vehicles and finds the one with the id that matches the prop.
     * The details of this vehicle are then stored in the 'vehicles' data property.
     */
    /*const vehicles = await obtenerVehiculos();
    this.vehicles = vehicles.find((vehicle) => vehicle.id === parseInt(this.id));
    this.loading = true;*/
  },
  methods: {
    /**
     * This method is called when the "Contactar" button is clicked.
     * It opens a new tab with the WhatsApp chat of the vehicle owner.
     */
    handleButtonClick() {
      window.open("https://wa.me/990606385", "_blank");
    },
  },
}
</script>

<template>
  <pv-card class="card">
    <template #content>
      <div class="container">
        <div class="profileImage">
          <pv-image class="profileImage" :src="profileImage" alt="profile Image" width="350" preview />
        </div>
        <div class="rentdescription">
          <div class="titleinformation">
            <h1>Alquilar vehículo </h1>
          </div>
          <div class="containersinformation">
            <div class="container1information">
              <div class="categories">
                <p>Propietario(a):</p>
                <p>Tipo:</p>
                <p>Marca:</p>
                <p>Placa:</p>
                <p>Color:</p>
              </div>
            </div>
          </div>
          <div class="button-container">
            <button @click="handleButtonClick" class="buttonwpp">
              <p>Contactar</p>
              <img class="whatsappicon" src="/src/assets/img/whatsappicon.png" alt="WhatsApp" />
            </button>
          </div>
        </div>
      </div>
    </template>
  </pv-card>
</template>
<style scoped>
.card {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  width: 100%;
  max-width: 1500px;
  margin: auto;
}

.container {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  width: 100%;
  flex-direction: row; /* Cambia la dirección a fila para que la imagen y la descripción estén lado a lado */
}

.button-container {
  display: flex;
  justify-content: center;
  width: 100%;
}

.rentdescription {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
}

.buttonwpp {
  background-color: #0097b2;
  color: black;
  border-radius: 1rem;
  border: 0.1rem;
  padding: 0.5rem 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 200px;
}

.profileImage {
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
  width: 100%;
}
.rentdescription {
  flex: 1; /* Esto hace que la imagen y la descripción tengan el mismo ancho */
}

.whatsappicon {
  width: 20px;
  height: 20px;
  margin-left: 0.5rem;
}

/* Media queries para hacer el diseño responsive */
@media (max-width: 768px) {
  .card {
    padding: 0.5rem;
  }

  .container {
    flex-direction: column; /* Cambia la dirección a columna para que la imagen y la descripción estén una encima de la otra en pantallas pequeñas */
  }

  .buttonwpp {
    padding: 0.25rem 0.5rem;
  }

  .whatsappicon {
    width: 15px;
    height: 15px;
  }
}
</style>