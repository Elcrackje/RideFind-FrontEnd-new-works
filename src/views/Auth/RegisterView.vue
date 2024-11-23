<template>
  <div class="flex flex-col justify-center items-center gap-4">
    <div class="flex flex-col justify-center gap-2 items-center">
      <img class="w-20 h-20" src="/src/assets/img/logos/logosec.png" alt="logo" />
      <h1 class="text-2xl font-medium">Regístrate</h1>
      <ul class="flex items-start gap-2">
        <li>
          <button @click="handleSubmit" class="flex flex-row items-center gap-2">
            <img class="social-logo2"
                 src="https://i.ibb.co/PgjqCyd/image.png"
                 alt="Google Logo"/>
            Regístrate con Google
          </button>
        </li>
        <li>
          <button @click="handleSubmit" class="flex flex-row items-center gap-2">
            <img
                class="social-logo2"
                src="https://i.ibb.co/H4Zc1QR/image.png"
                alt="Microsoft Logo"
            />
            Regístrate con Microsoft
          </button>
        </li>
      </ul>
    </div>
    <form @submit.prevent="handleSubmit" class="flex flex-col justify-center items-center gap-2 p-1">
      <div class="flex gap-1 flex-col w-full">
        <div class="flex flex-row justify-between gap-1">
          <input id="name" type="text" placeholder="Nombres" />
          <input id="lastName" type="text" placeholder="Apellidos" />
        </div>
        <div class="flex flex-col gap-1">
          <input id="email" type="email" placeholder="Correo electrónico" />
        </div>
      </div>
      <div class="flex gap-1 flex-col w-full">
        <div class="flex flex-row justify-around gap-1">
          <input id="password" type="password" placeholder="Contraseña" />
          <input
              id="passwordConfirm"
              type="password"
              placeholder="Confirmación"
          />
        </div>
        <div class="flex flex-col gap-1">
          <input id="dob" type="date" placeholder="Fecha de nacimiento" />
          <label>DD/MM/AAAA</label>
        </div>
      </div>
      <div class="flex gap-1 flex-col w-full">
        <div class="flex flex-row justify-between">
          <div class="gender-select">
            <input type="radio" id="masculino" />
            <label for="masculino" id="masculino">Masculino</label>
          </div>
          <div class="gender-select">
            <input type="radio" id="femenino" />
            <label for="female" id="femenino">Femenino</label>
          </div>
        </div>
      </div>
      <button type="submit">Crear cuenta</button>
    </form>
    <span> ¿Tienes una cuenta? <a href="/login">Inicia sesión</a> </span>
  </div>
</template>

<style scoped>
input {
  padding: 0.5rem;
  border-radius: 5px;
  border: none;
  border: 1px solid #333;
}

button {
  padding: 0.5rem;
  border: none;
  margin-top: 0.5rem;
  border-radius: 5px;
  cursor: pointer;
  background-color: #0097b2;
  color: white;
}

.form__group__bot label {
  font-size: small;
  text-decoration: underline;
}

button:hover {
  background-color: #0097b2;
}

span a {
  color: #0097b2;
}

.social-logo2 {
  width: 17px;
  text-align: center;
  vertical-align: middle;
}

.social-logo3 {
  width: 17px;
  margin-right: 0.5rem;
}

/* Media query para dispositivos móviles */
@media screen and (max-width: 768px) {
  .flex {
    flex-direction: column;
    align-items: center;
  }

  .social-logo2 {
    width: 20px; /* Cambia el tamaño de los iconos sociales */
  }

  button, input {
    width: 100%; /* Ajusta el ancho de los botones y los inputs */
  }
}
</style>

<script setup lang="ts">
import { useRouter } from 'vue-router';

const router = useRouter();

const handleSubmit = () => {
  // Aquí puedes agregar la lógica para manejar la creación de la cuenta

  // Navegar a otra ruta después de crear la cuenta
  router.push('/recommendations');
};
</script>
