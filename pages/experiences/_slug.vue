<template>
  <div>
    <h1>Test!</h1>
  </div>
</template>

<script>
export default {
  name: 'SingleExperience',
  computed: {
    experience() {
      return this.$store.getters['experiences/getExperiences'];
    }
  },
  created() {
    this.$store.dispatch('experiences/getExperience', this.$route.params.slug);
  }
};
</script>
