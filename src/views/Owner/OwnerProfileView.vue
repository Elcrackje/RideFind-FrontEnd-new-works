<script>
import profileImage from "@/assets/img/propietario.png";
import { obtenerUsuarios } from "@/shared/services/http-common.js";

export default {
  name: "RentVehicleView",
  data() {
    return {
      usuarios: [],
      checked: false,
      profileImage      
    };
  },
  async created() {
    this.usuarios = await obtenerUsuarios();
  }
};
</script>

<template>
  <div class="Rent">
    <pv-card class="card">
      <template #content>
        <div class="containerent">
          <div class="profileImage" v-if="usuarios.length > 0">
            <pv-image :src="profileImage" alt="profile Image" width="350" preview />
          </div>

          <div class="rentdescription">
            <div class="titleinformation">
              <h1>Mi Perfil</h1>
            </div>
            <div class="containersinformation">
              <div class="container1information" v-if="usuarios.length > 0">
                <div class="categories">
                  <p>Nombre: {{ usuarios[2].nombre }}</p>
                  <p>Vehículos: {{ usuarios[2].Vehículos }}</p>
                  <p>Ubicación: {{ usuarios[2].ubicación }}</p>
                  <p>Teléfono: {{ usuarios[2].telefono }}</p>
                </div>
              </div>
            </div>
            <pv-button class="buttonwpp" label="Contactar"><p>Ver más</p></pv-button>
          </div>
        </div>
      </template>
    </pv-card>
  </div>
</template>
<style scoped>
.Rent {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 10%;
  margin-bottom: 5%;
}

.containerent {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  color: black;
  max-width: 100%;
}

.profileImage {
  margin: 1rem;
}

.rentdescription {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin: 1rem;
}

.titleinformation h1 {
  margin: 2rem;
  text-align: center;
}

.containersinformation {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 1rem;
}

.container1information {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 1rem;
  border: solid;
  border-radius: 1rem;
  margin: 0.5rem;
  width: 100%;
  max-width: 500px;
}

.buttonwpp {
  margin: 1rem;
  background-color: #0097b2;
  color: black;
  border-radius: 1rem;
  border: 0.1rem;
  padding: 0.5rem 1rem;
}

.buttonwpp:hover {
  transform: scale(1.1);
}

@media (max-width: 768px) {
  .Rent {
    margin: 0 5%;
  }

  .containerent {
    flex-direction: column;
    align-items: center;
  }

  .profileImage,
  .rentdescription {
    margin: 0.5rem;
  }

  .container1information {
    width: 90%;
    max-width: 90%;
  }

  .buttonwpp {
    margin-left: 0;
  }
}

@media (min-width: 769px) {
  .containerent {
    flex-direction: row;
    align-items: flex-start;
  }

  .rentdescription {
    text-align: left;
    align-items: flex-start;
  }

  .buttonwpp {
    align-self: flex-start;
  }
}
</style>
