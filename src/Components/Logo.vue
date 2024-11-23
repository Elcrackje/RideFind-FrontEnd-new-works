<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();

const eventClickImage = () => {
  // Aquí puedes agregar la lógica para manejar la creación de la cuenta

  // Navegar a otra ruta después de crear la cuenta
  router.push('/Recommendations');
};
</script>

<template>
  <img class="imagen"
         src="/src/assets/img/logos/logosec.png"
         alt="Logo"
         @click="eventClickImage"></img>
</template>

<style scoped>
.imagen {
  width: 58px;
  cursor: pointer;
  margin: 0.5rem;
  padding: 0.5rem;
}
</style>