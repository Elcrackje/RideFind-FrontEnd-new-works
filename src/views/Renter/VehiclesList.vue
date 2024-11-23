<template>
  <div class="vehicle-container">
    <h1>Lista de Vehículos</h1>
    <button @click="openCreateDialog">Añadir Vehículo</button>
    <div class="vehicle-grid">
      <div v-for="vehicle in vehicles" :key="vehicle.id" class="vehicle-card">
        <h2>{{ vehicle.vehicleName }}</h2>
        <p><strong>Descripción:</strong> {{ vehicle.description }}</p>
        <p><strong>Categoría:</strong> {{ vehicle.category.name }}</p>
        <p><strong>Estado:</strong> {{ vehicle.status }}</p>
        <button @click="openEditDialog(vehicle)">Editar</button>
        <button @click="deleteVehicle(vehicle.id)">Eliminar</button>
      </div>
    </div>
    <vehicle-create-and-edit-dialog
        :item="selectedVehicle"
        :visible="isDialogVisible"
        @save-requested="saveVehicle"
        @cancel-requested="isDialogVisible = false"
    />
  </div>
</template>

<script>
import { VehicleEntity } from "../model/VehiculosEntity.js";
import { VehicleService } from "../services/VehicleService.js";
import VehicleCreateAndEditDialog from "../Renter/VehicleCreateAndEdit.vue";

export default {
  name: "VehiclesList",
  components: { VehicleCreateAndEditDialog },
  data() {
    return {
      vehicles: [],
      selectedVehicle: null,
      isDialogVisible: false,
      vehicleService: new VehicleService(),
    };
  },
  async created() {
    await this.fetchVehicles();
  },
  methods: {
    async fetchVehicles() {
      try {
        const response = await this.vehicleService.getAll();
        this.vehicles = response.data.map((vehicle) => new VehicleEntity(vehicle));
      } catch (error) {
        console.error("Error fetching vehicles:", error);
      }
    },
    openCreateDialog() {
      this.selectedVehicle = new VehicleEntity({
        category: { id: 0, name: "" },
      });
      this.isDialogVisible = true;
    },
    openEditDialog(vehicle) {
      this.selectedVehicle = { ...vehicle };
      this.isDialogVisible = true;
    },
    async saveVehicle(vehicle) {
      try {
        if (vehicle.id) {
          await this.vehicleService.update(vehicle.id, vehicle);
        } else {
          await this.vehicleService.create(vehicle);
        }
        this.isDialogVisible = false;
        this.fetchVehicles();
      } catch (error) {
        console.error("Error saving vehicle:", error);
      }
    },
    async deleteVehicle(vehicleId) {
      try {
        await this.vehicleService.delete(vehicleId);
        this.fetchVehicles();
      } catch (error) {
        console.error("Error deleting vehicle:", error);
      }
    },
  },
};
</script>

<style scoped>
.vehicle-container {
  margin: 20px;
}

.vehicle-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}

.vehicle-card {
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
}
</style>
