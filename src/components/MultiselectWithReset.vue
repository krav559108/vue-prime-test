<template>
  <div>
    <MultiSelect
      class="card w-full md:w-20rem"
      v-model="selectedCars"
      :options="carOptions"
      optionLabel="label"
      placeholder="Select car brand"
      @change="updateClearButton"
    >
    <template v-slot:footer><Button class="b"
      v-if="showClearButton"
      label="X"
      text
      @click="clearSelection"
    /></template>
    </MultiSelect>
    
  </div>
</template>

<script>
export default {
  data() {
    return {
      selectedCars: [],
      carOptions: [
        { label: "Audi", value: "Audi" },
        { label: "BMW", value: "BMW" },
        { label: "Chevrolet", value: "Chevrolet" },
        { label: "Ford", value: "Ford" },
        { label: "Honda", value: "Honda" },
        { label: "Mercedes", value: "Mercedes" },
        { label: "Toyota", value: "Toyota" },
        { label: "Volkswagen", value: "Volkswagen" },
      ],
      showClearButton: false,
    };
  },
  methods: {
    updateClearButton() {
      this.showClearButton = this.selectedCars.length > 0;
    },
    clearSelection() {
      this.selectedCars = [];
      this.showClearButton = false;
    },
  },
};
</script>

<style scoped>
.card {
  color: black;
}
.b {
  position: absolute;
  top: 50px;
  right: 0;
}
</style>
