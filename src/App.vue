<template>
  <div>
    <div>DateTime picker</div>
    <TimePicker v-model="selectedTime" />
    <div>Сброс значений в Select</div>
    <div>
      <MultiselectWithReset />
    </div>
    <div>
      <!-- <DataTable/> -->
    </div>
  </div>
</template>
<script>
import TimePicker from "./components/TimePicker.vue";
import MultiselectWithReset from "./components/MultiselectWithReset.vue";
import DataTable from "./components/DataTable.vue";
export default {
  components: {
    TimePicker,
    MultiselectWithReset,
    DataTable,
  },
  data() {
    return {
      selectedTime: "",
      options: [
        { label: "Option 1", value: "option1" },
        { label: "Option 2", value: "option2" },
        { label: "Option 3", value: "option3" },
      ],
      selectedOptions: [],
      placeholder: "Select options",
    };
  },
};
</script>

<style scoped>
body {
  font-family: var(--font-family);
}
</style>
