<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();

const handleSubmit = () => {
  // Aquí puedes agregar la lógica para manejar la creación de la cuenta

  // Navegar a otra ruta después de crear la cuenta
  router.push('/OrderOwner');
};
</script>
<template>
  <div class="flex items-center m-2">
    <h1 class="titlecontainer">
      Explora nuestros planes<br />
      para ser propietario. Únete ahora!
    </h1>
  </div>

  <div class="plans">
    <div class="card-container-wrapper">
      <div class="card-container">
        <div class="card">
          <h2 class="cardtext">Plan 1</h2>
          <ul>
            <li>Plan RideStart</li>
            <li>S/. 0 por mes</li>
            <li>Alquila 3 vehículos</li>
            <li>Después, S/. 5 por cada alquiler</li>
          </ul>
          <div class="buttoncontainer">
            <pv-button class="btncontainer" @click="handleSubmit">Lo quiero</pv-button>
          </div>
        </div>

        <div class="card">
          <h2 class="cardtext">Plan 2</h2>
          <ul>
            <li>Plan RidePlus</li>
            <li>S/. 10 por mes</li>
            <li>Alquila 50 vehículos</li>
            <li>Después, S/. 5 por cada alquiler</li>

          </ul>
          <div class="buttoncontainer">
            <pv-button class="btncontainer" @click="handleSubmit">Lo quiero</pv-button>
          </div>
        </div>

        <div class="card">
          <h2 class="cardtext">Plan 3</h2>
          <ul>
            <li>Plan RidePro</li>
            <li>Precio: S/. 30/mes</li>
            <li>Beneficios: Sin comisiones.</li>
            <li>Alquila vehículos ilimitados.</li>
          </ul>

          <div class="buttoncontainer">
            <pv-button class="btncontainer" @click="handleSubmit">Lo quiero</pv-button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.titlecontainer {
  margin: 2rem;
  text-align: center;
  padding: 1rem;
  width: 100%;
}

.card-container-wrapper {
  display: flex;
  justify-content: center;
}

.card-container {
  display: flex;
  justify-content: center;
  flex-wrap: wrap; /* Flex wrap for responsive design */
}

.card {
  background-color: #ffffff;
  border: 1px solid #808080;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 1rem 2rem; /* Adjusted padding */
  transition: box-shadow 0.3s, transform 0.3s;
  margin: 1rem;
  flex: 1 1 300px; /* Flexible width for responsiveness */
  max-width: 400px; /* Maximum width */
  box-sizing: border-box;
}

.card:hover {
  box-shadow: 0 4px 5px rgba(0, 0, 0, 0.2);
  transform: scale(1.142);
}

.card:hover .btncontainer {
  background: linear-gradient(to top, #514d54, #0097b2);
}

h2 {
  font-size: 1.5rem;
  font-weight: bold;
  padding: 1rem;
  color: #0097b2;
}

.buttoncontainer {
  justify-content: center;
  display: flex;
}

ul {
  margin: 1rem;
}

.btncontainer {
  margin-top: 2rem;
  background-color: #0097b2;
  color: rgb(32, 26, 85);
  border-radius: 1rem;
  padding: 0.67rem;
  border: 0.1rem;
}

@media (max-width: 768px) {
  .card-container {
    flex-direction: column; /* Stack cards vertically on small screens */
    align-items: center;
  }

  .card {
    max-width: 90%; /* Adjust the max-width to fit smaller screens */
    padding: 1rem;
  }

  h2 {
    font-size: 1.25rem;
  }

  .btncontainer {
    margin-left: 0; /* Center button on small screens */
  }
}
</style>