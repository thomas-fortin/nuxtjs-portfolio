<template>
  <svg id="wave" class="absolute bottom-0 block" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
    <path
      :fill="color"
      fill-opacity="1"
      d="M0,160L120,186.7C240,213,480,267,720,261.3C960,256,1200,192,1320,160L1440,
      128L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"
    />
  </svg>
  <!-- <svg id="wave" class="absolute bottom-0 block" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
    <path
      :fill="color"
      fill-opacity="1"
      d="M0,224L120,240C240,256,480,288,720,266.7C960,245,1200,171,1320,133.3L1440,
      96L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"
    />
  </svg> -->
</template>

<script>
export default {
  props: {
    color: {
      type: String,
      default: '#f00'
    }
  }
};
</script>
