<template>
  <div class="register-vehicle">
    <h1>Registro de Vehículo</h1>
    <form @submit.prevent="handleSubmit">
      <div>
        <label for="make">Marca:</label>
        <input type="text"/>
      </div>
      <div>
        <label for="model">Modelo:</label>
        <input type="text"/>
      </div>
      <div>
        <label for="year">Año:</label>
        <input type="number"/>
      </div>
      <div>
        <label for="vin">VIN:</label>
        <input type="text"/>
      </div>
      <div>
        <label for="licensePlate">Placa:</label>
        <input type="text"/>
      </div>
      <div>
        <label for="photo">Foto:</label>
        <input type="file"/>
      </div>
      <button>Registrar</button>
    </form>
  </div>
</template>

<script setup>
const handleSubmit = () => {
  alert('Vehículo registrado');
};
</script>

<style scoped>
.register-vehicle {
  max-width: 600px;
  margin: 0 auto;
  padding: 2rem;
  border: 1px solid #ccc;
  border-radius: 8px;
}
form div {
  margin-bottom: 1rem;
}
label {
  display: block;
  margin-bottom: 0.5rem;
}
input {
  width: 100%;
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
}
button {
  padding: 0.5rem 1rem;
  background-color: #0097b2;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
button:hover {
  background-color: #0097b2;
}
</style>
