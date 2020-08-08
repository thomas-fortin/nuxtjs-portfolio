<template>
  <div>
    <section id="experiencesTop" class="bg-main-gradient h-screen relative overflow-hidden text-center text-white">
      <div class="container mx-auto h-full flex flex-col justify-center">
        <div class="homeTop__content-titles">
          <h1 class="text-4xl md:text-5xl lg:text-6xl font-thin">
            Mon expérience de {{ experience.title }}
          </h1>
          <h2 class="text-2xl md:text-3xl lg:text-4xl font-thin">
            chez {{ experience.company }} — {{ experience.place }}
          </h2>
        </div>
      </div>
      <BottomSingleWaveSvg :color="bgColor" />
    </section>
    <section id="experiencesPresentation" class="experiencesPresentation">
      <div class="container mx-auto py-5 bg-gray-100">
        <div class="experiencesPresentation__infos md:w-1/2 mx-auto flex flex-wrap">
          <div class="w-1/2 my-2">
            <fa-icon :icon="['far', 'building']" />
            <span class="ml-2">{{ experience.company }}</span>
          </div>
          <div class="w-1/2 my-2">
            <fa-icon :icon="['fas', 'map-marker-alt']" />
            <span class="ml-2">{{ experience.place }}</span>
          </div>
          <div class="w-1/2 my-2">
            <fa-icon :icon="['fas', 'tag']" />
            <span class="ml-2">{{ experience.title }}</span>
          </div>
          <div class="w-1/2 my-2">
            <fa-icon :icon="['far', 'address-card']" />
            <span class="ml-2">{{ experience.type }}</span>
          </div>
          <div class="w-1/2 my-2">
            <fa-icon :icon="['far', 'calendar-alt']" />
            <span class="ml-2">Début : {{ experience.start }}</span>
          </div>
          <div class="w-1/2 my-2">
            <fa-icon :icon="['far', 'calendar-alt']" />
            <span class="ml-2">Fin : {{ experience.end }}</span>
          </div>
        </div>
        <div class="font-black italic">
          <span class="block">TODO: All experience infos here...</span>
          <span class="block">TODO: Add missions and make a loop on it...</span>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import BottomSingleWaveSvg from '@/components/shared/BottomSingleWaveSvg';
import { theme } from '@/tailwind.config';

export default {
  name: 'SingleExperience',
  components: {
    BottomSingleWaveSvg
  },
  data() {
    return {
      bgColor: theme.colors.gray['100']
    };
  },
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
