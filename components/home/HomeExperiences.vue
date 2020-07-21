<template>
  <section id="homeExperiences" class="bg-gray-100">
    <div class="container mx-auto py-5">
      <h3 class="text-3xl md:text-4xl lg:text-5xl font-thin mb-5 text-center">
        {{ $t('homeExperiences.title') }}
      </h3>
      <div class="homeExperiences__content mt-8">
        <p class="text-center">
          Voici une liste non-exhaustive de mes dernières expériences professionnelles :
        </p>
        <div class="mt-16 flex flex-wrap justify-center lg:justify-between experiences">
          <template v-if="experiences">
            <ExperienceCard v-for="experience in experiences" :key="experience.id" :experience="experience" />
          </template>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters('experiences', {
      'experiences': 'getExperiences'
    })
  },
  created() {
    this.$store.dispatch('experiences/fetchExperiences');
  }
};
</script>
