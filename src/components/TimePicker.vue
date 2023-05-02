<template>
  <div>
    <Calendar
      v-model="selectedTime"
      timeOnly
      :timeOnlyFormat="timeFormat"
      @input="updateTime"
    >
      <template v-slot:footer>
        <Button label="Сегодня"  @click="setNow" text></Button>
        <Button label="Очистить" @click="clearTime" text></Button>
      </template>
    </Calendar>
  </div>
</template>

<script>
import Calendar from "primevue/calendar";

export default {
  components: {
    Calendar,
  },
  props: {
    value: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      selectedTime: null,
      timeFormat: "HH:mm",
    };
  },
  methods: {
    setNow() {
      this.selectedTime = new Date();
    },
    clearTime() {
      this.selectedTime = null;
    },
    updateTime() {
      if (this.selectedTime) {
        const timeString = this.selectedTime.toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        });
        this.$emit("input", timeString);
      } else {
        this.$emit("input", "");
      }
    },
  },
  created() {
    if (this.value) {
      const timeParts = this.value.split(":");
      this.selectedTime = new Date();
      this.selectedTime.setHours(parseInt(timeParts[0]));
      this.selectedTime.setMinutes(parseInt(timeParts[1]));
    }
  },
};
</script>
