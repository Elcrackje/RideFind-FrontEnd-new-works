<template>
  <button class="my-button">
    <slot>Reserve</slot>
  </button>
</template>

<style scoped>
.my-button {
  background-color: #0097b2;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 8px 16px;
  cursor: pointer;
}

.my-button:hover {
  background-color: #0097b2;
}
</style>
