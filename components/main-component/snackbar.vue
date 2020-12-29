<template>
  <div class="text-center">
    <v-snackbar light v-model="show" :timeout="2000">{{ snackbarText }}</v-snackbar>
  </div>
</template>

<script>
export default {
  props: {
    snackbar: {
      type: Boolean,
      default: false
    },
    snackbarText: {
      type: String,
      default: "No text"
    }
  },
  data() {
    return {
      show: false
    };
  },
  watch: {
    snackbar(value) {
      this.show = value;
    }
  }
};
</script>