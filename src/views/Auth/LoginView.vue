<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();

const handleSubmit = () => {
  // Aquí puedes agregar la lógica para manejar la creación de la cuenta

  // Navegar a otra ruta después de crear la cuenta
  router.push('/Recommendations');
};
</script>

<template>
  <div class="flex flex-col justify-center items-center gap-4">
    <div class="flex flex-col justify-center items-center gap-2">
      <img class="w-20 h-20" src="/src/assets/img/logos/logosec.png" alt="logo" />
      <h1 class="text-2xl font-medium">Inicia sesión</h1>
      <ul class="flex items-start gap-2">
        <li>
          <button @click="handleSubmit" class="flex flex-row items-center gap-2">
            <img class="social-logo2"
                 src="https://i.ibb.co/PgjqCyd/image.png"
                 alt="Google Logo"/>
            Iniciar sesión con Google
          </button>
        </li>
        <li>
          <button @click="handleSubmit" class="flex flex-row items-center gap-2">
            <img
                class="social-logo2"
                src="https://i.ibb.co/H4Zc1QR/image.png"
                alt="Microsoft Logo"
            />
            Iniciar sesión con Microsoft
          </button>
        </li>
      </ul>
    </div>
    <form class="form" @submit.prevent="handleSubmit">
      <div class="form__group">
        <label for="email">Correo electrónico</label>
        <input id="email" type="email" placeholder="Correo electrónico" />
      </div>
      <div class="form__group">
        <label for="contraseña">Contraseña</label>
        <input type="contraseña" placeholder="Contraseña" />
      </div>
      <button type="submit">Iniciar sesión</button>
    </form>
    <span> ¿No tienes una cuenta? <a href="/register">Regístrate</a> </span>
  </div>
</template>

<style scoped>
.form {
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
  padding: 1rem;
  width: 420px;
}

.form__group {
  display: flex;
  gap: 0.2rem;
  flex-direction: column;
}

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

button:hover {
  background-color: #007ab2;
}

span a {
  color: #0097b2;
}

.social-logo2 {
  width: 17px;
  text-align: center;
  vertical-align: middle;
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

