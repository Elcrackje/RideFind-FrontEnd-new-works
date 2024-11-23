<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Logo from '@/Components/Logo.vue'
</script>

<template>
  <header>
    <div class="wrapper">
      <nav>
        <RouterLink to="/Recommendations">Recommendations</RouterLink>
        <RouterLink to="/myProfile">My Profile</RouterLink>
        <RouterLink to="/vehicles">See Vehicles</RouterLink>
        <RouterLink to="/RentVehicle">Rent Vehicle</RouterLink>
        <RouterLink to="/PlansOwner">Plans</RouterLink>
        <RouterLink to="/OrderOwner">Order Owner</RouterLink>
        <RouterLink to="/OwnerProfileView">Owner Profile</RouterLink>
        <RouterLink to="/VehicleRegisterOwner">Vehicle registration</RouterLink>
        <RouterLink to="/OwnerViewVehicles">Owner: See Vehicle</RouterLink>
        <router-link to="/sign-in">
          <pv-button class="toolbar-icon" id="sign-in-icon">Sign In</pv-button>
        </router-link>
        <router-link to="/sign-up">
          <pv-button class="toolbar-icon" id="sign-up-icon">Sign Up</pv-button>
        </router-link>
      </nav>
    </div>
  </header>
  <RouterView/>
</template>

<style scoped>
.wrapper {
  max-width: 1700px;
  margin: 10px auto 90px auto;
  padding: 0 15px;
}

nav {
  background-color: #D9D9D9;
  overflow: hidden;
  border-radius: 50px;
  font-size: 0.99rem;
}

nav a {
  float: left;
  display: block;
  color: #000;
  text-align: center;
  padding: 30px 25px;
  text-decoration: none;
}

nav a:hover {
  background-color: rgba(0, 151, 178, 0.2);
}

/* Estilos para el menú responsive */
@media screen and (max-width: 600px) {
  nav a {
    float: none;
    display: block;
    text-align: center;
  }
}
</style>