<template>
  <create-and-edit
      :entity="item"
      :visible="visible"
      entity-name="Vehicle"
      @cancel-requested="onCancelRequested"
      @save-requested="onSaveRequested"
  >
    <template #content>
      <div class="p-fluid">
        <div class="field">
          <label>Nombre del Vehículo</label>
          <input v-model="item.vehicleName" type="text" />
        </div>
        <div class="field">
          <label>Descripción</label>
          <input v-model="item.description" type="text" />
        </div>
        <div class="field">
          <label>Categoría</label>
          <input v-model="item.category.name" type="text" />
        </div>
        <div class="field">
          <label>Estado</label>
          <input v-model="item.status" type="text" />
        </div>
      </div>
    </template>
  </create-and-edit>
</template>

<script>
export default {
  name: "VehicleCreateAndEditDialog",
  props: {
    item: Object,
    visible: Boolean,
  },
  methods: {
    onSaveRequested() {
      this.$emit("save-requested", this.item);
    },
    onCancelRequested() {
      this.$emit("cancel-requested");
    },
  },
};
</script>

<style scoped>
.field {
  margin-bottom: 10px;
}
</style>
