<template>
  <div class="md:w-1/2 lg:w-1/3 mb-16 px-2">
    <div class="experience max-w-sm rounded overflow-hidden shadow-lg w-full h-full flex flex-col">
      <div class="experience__content px-6 py-6 flex-1">
        <h4 class="text-xl mb-1 lg:mb-2">
          {{ experience.title }}
        </h4>
        <span class="text-gray-700 font-bold">{{ experience.company }} — {{ experience.place }}</span>
        <span class="text-gray-700 font-bold block">{{ experience.type }}</span>
        <p class="text-gray-700 text-base mt-5">
          {{ experience.shortDesc }}
        </p>
      </div>
      <div class="experience__skills px-6 py-4">
        <Skill
          v-for="skill in experience.skills.slice(0, skillsNb)"
          :key="skill"
          :name="skill"
          color="primary"
        />
        <template v-if="experience.skills.length > skillsNb">
          <Skill
            v-if="experience.skills.length > skillsNb + 1"
            :name="'+ ' + (experience.skills.length - skillsNb) + ' autres'"
            color="primary"
          />
          <Skill
            v-else
            :name="'+ ' + (experience.skills.length - skillsNb) + ' autre'"
            color="primary"
          />
        </template>
      </div>
      <div class="text-right my-6 mr-4">
        <nuxt-link :to="'/experiences/' + experience.slug" class="hover-effect-1 inline-block" title="En savoir plus">
          En savoir plus
          <fa-icon :icon="['fas', 'long-arrow-alt-right']" />
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
import Skill from '@/components/shared/Skill.vue';

export default {
  name: 'ExperienceCard',
  components: {
    Skill
  },
  props: {
    experience: {
      type: Object,
      default: null
    }
  },
  data: () => {
    return {
      skillsNb: 5
    };
  }
};
</script>
