<script>
import {useAuthenticationStore} from "../services/authentication.store.js";
import {SignUpRequest} from "../model/sign-up.request.js";

export default {
  name: "sign-up",
  data() {
    return {
      authenticationStore: useAuthenticationStore(),
      username: "",
      password: "",
    };
  },
  methods: {
    onSignUp() {
      let signUpRequest = new SignUpRequest(this.username, this.password);
      this.authenticationStore.signUp(signUpRequest, this.$router);
    }
  }
}
</script>
<template>
  <div class="auth-container">
    <div class="auth-card">
      <h3>Sign Up</h3>
      <p class="description">Please enter the required information to sign up.</p>
      <form @submit.prevent="onSignUp">
        <div class="field">
          <pv-float-label>
            <label for="username">Username</label>
            <pv-input-text id="username" v-model="username" :class="{'p-invalid': !username}"/>
            <small v-if="!username" class="p-invalid">Username is required.</small>
          </pv-float-label>
        </div>
        <div class="field">
          <pv-float-label>
            <label for="password">Password</label>
            <pv-input-text id="password" v-model="password" :class="{'p-invalid': !password}" type="password"/>
            <small v-if="!password" class="p-invalid">Password is required.</small>
          </pv-float-label>
        </div>
        <div class="field">
          <pv-button type="submit">Sign Up</pv-button>
        </div>
      </form>
    </div>
  </div>
</template>

<style scoped>
.auth-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: linear-gradient(135deg, white, white);
}

.auth-card {
  background: #0097b2;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
  width: 100%;
  max-width: 400px;
  text-align: center;
  color: #fff;
}

.auth-card h3 {
  margin-bottom: 1rem;
  font-size: 1.5rem;
  color: black;
}

.auth-card .description {
  margin-bottom: 2rem;
  color: white;
}

.field {
  margin-bottom: 1.5rem;
}

.pv-float-label label {
  color: #b5b5b5;
}

.pv-input-text {
  background: #3f3f3f;
  border: none;
  color: #fff;
}

.pv-input-text.p-invalid {
  border-color: black;
}

.p-invalid {
  color: black;
}

.pv-button {
  background: #00d1b2;
  border: none;
  color: #fff;
  padding: 0.75rem 1.5rem;
  border-radius: 8px;
  cursor: pointer;
  transition: background 0.3s;
}

.pv-button:hover {
  background: #00b89c;
}
</style>