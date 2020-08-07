<template>
  <section id="homeExperiences" class="bg-gray-100">
    <div class="container mx-auto py-5">
      <h3 class="section-title">
        {{ $t('homeExperiences.title') }}
      </h3>
      <div class="homeExperiences__content mt-8">
        <p class="text-center">
          {{ $t('homeExperiences.catchPhrase') }}
        </p>
        <div class="mt-16 flex flex-wrap justify-center experiences">
          <template v-if="experiences">
            <ExperienceCard v-for="experience in experiences" :key="experience.id" :experience="experience" />
          </template>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  computed: {
    experiences() {
      return this.$store.getters['experiences/getExperiences'];
    }
  },
  beforeCreate() {
    this.$store.dispatch('experiences/fetchExperiences');
  }
};
</script>
