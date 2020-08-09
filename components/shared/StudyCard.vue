<template>
  <div class="md:w-1/2 lg:w-1/3 mb-16 px-2">
    <div class="bg-main-gradient max-w-sm rounded overflow-hidden shadow-xl w-full h-full p-2px">
      <div class="study bg-white rounded overflow-hidden w-full h-full flex flex-col">
        <div class="study__content px-6 py-6 flex-1">
          <h4 class="text-xl mb-1 lg:mb-2">
            {{ study.title }}
          </h4>
          <span class="text-gray-700 font-bold">{{ study.school }} — {{ study.city }}</span>
          <p class="text-gray-700 text-base mt-5">
            {{ study.shortDesc }}
          </p>
        </div>
        <div class="study__skills px-6 py-4">
          <Skill
            v-for="skill in study.skills.slice(0, skillsNb)"
            :key="skill"
            :name="skill"
            color="secondary"
          />
          <template v-if="study.skills.length > skillsNb">
            <Skill
              v-if="study.skills.length > skillsNb + 1"
              :name="'+ ' + (study.skills.length - skillsNb) + ' autres'"
              color="secondary"
            />
            <Skill
              v-else
              :name="'+ ' + (study.skills.length - skillsNb) + ' autre'"
              color="secondary"
            />
          </template>
        </div>
        <div class="text-right my-6 mr-4">
          <!-- TODO: Put the right link -->
          <nuxt-link to="#" class="hover-effect-1 inline-block" title="En savoir plus">
            En savoir plus
            <fa-icon :icon="['fas', 'long-arrow-alt-right']" />
          </nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Skill from '@/components/shared/Skill.vue';

export default {
  name: 'StudyCard',
  components: {
    Skill
  },
  props: {
    study: {
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
