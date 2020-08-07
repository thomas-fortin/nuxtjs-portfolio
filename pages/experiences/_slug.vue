<template>
  <div>
    <h1>{{ experience.title }}</h1>
  </div>
</template>

<script>
export default {
  name: 'SingleExperience',
  computed: {
    experience() {
      return this.$store.getters['experiences/getExperience'];
    }
  },
  beforeCreate() {
    this.$store.dispatch('experiences/fetchOneExperience', this.$route.params.slug);
  }
};
</script>
