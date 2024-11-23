<template>
    <div class="profile-container">
      <h1 class="profile-title">¿Qué vehículos te gustaría registrar?</h1>
      <div class="p-grid">
        <div class="p-col small-card first-card">
          <div class="card">
            <h3>Vehículo 1</h3>
            <img src="https://i.ibb.co/LCWv66F/image.png" alt="Imagen 1">
            <div class="card-button">
              <button type="submit" class="small-button">Ver más</button>
            </div>
          </div>
        </div>
        <div class="p-col small-card">
          <div class="card">
            <h3>Vehículo 2</h3>
            <img src="https://i.ibb.co/jHwVhQc/image.png" alt="Imagen 2">
            <div class="card-button">
              <button type="submit" class="small-button">Ver más</button>
            </div>
          </div>
        </div>
        <div class="p-col small-card last-card" style="margin-bottom: 20px;"> 
          <div class="card">
            <h3>Vehículo 3</h3>
            <img src="https://i.ibb.co/xq96gqB/image.png" alt="Imagen 3">
            <div class="card-button">
              <button type="submit" class="small-button">Ver más</button>
            </div>
          </div>
        </div>
      </div>
      <div class="show-more-container">
        <button class="big-button">Mostrar más vehículos</button>
      </div>
    </div>
  </template>
  
  <style scoped>
  .profile-container {
    text-align: center;
  }
  
  .profile-title {
    margin-top: 50px;
  }
  
  .card {
    text-align: center;
    border: 1px solid #ddd;
    border-radius: 5px;
    margin-bottom: 20px;
  }
  
  .card img {
    width: 80%;
    border-radius: 6px;
  }
  
  .card h2 {
    margin-top: 10px;
  }
  
  .card p {
    margin-top: 10px;
  }
  
  .p-grid {
    display: flex;
    justify-content: center;
  }
  
  .p-col {
    margin: 0 10px;
  }
  
  .small-card {
    max-width: 300px;
  }
  
  .first-card,
  .last-card {
    max-width: 250px; 
  }
  
  .card-button {
    display: flex;
    justify-content: center;
  }
  
  .small-button {
    background-color: #0097b2;
    color: white;
    padding: 8px 8px;
    border: none;
    border-radius: 5px; 
  }
  
  .big-button {
    background-color: #0097b2;
    color: white;
    padding: 8px 8px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
  
  .show-more-container {
    text-align: center; 
    margin-top: 10px; 
  }
  </style>  