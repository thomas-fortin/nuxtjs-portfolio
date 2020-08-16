<template>
  <div>
    <section id="experiencesTop" class="bg-main-gradient h-half-screen relative overflow-hidden text-center text-white">
      <div class="container h-full flex flex-col justify-center">
        <div class="homeTop__content-titles">
          <h1 class="text-4xl md:text-5xl lg:text-6xl font-thin">
            {{ $t('myExperienceOf') }} {{ experience.title }}
          </h1>
          <h2 class="text-2xl md:text-3xl lg:text-4xl font-thin">
            chez {{ experience.company }} — {{ experience.place }}
          </h2>
        </div>
      </div>
      <BottomSingleWaveSvg :color="bgColor" />
    </section>
    <section id="experiencesPresentation" class="experiencesPresentation bg-gray-100">
      <div class="container py-5">
        <div>
          <div class="experiencesPresentation__infos md:w-1/2 mx-3 md:mx-auto flex flex-wrap justify-center py-5 bg-white border shadow-lg rounded-lg">
            <div class="w-full md:w-1/3 my-2 flex items-center mx-1 px-4 md:px-0">
              <fa-icon :icon="['far', 'building']" class="experiencesPresentation__infos-icon" />
              <span class="ml-2">{{ experience.company }}</span>
            </div>
            <div class="w-full md:w-1/3 my-2 flex items-center mx-1 px-4 md:px-0">
              <fa-icon :icon="['fas', 'map-marker-alt']" class="experiencesPresentation__infos-icon" />
              <span class="ml-2">{{ experience.place }}</span>
            </div>
            <div class="w-full md:w-1/3 my-2 flex items-center mx-1 px-4 md:px-0">
              <fa-icon :icon="['fas', 'tag']" class="experiencesPresentation__infos-icon" />
              <span class="ml-2">{{ experience.title }}</span>
            </div>
            <div class="w-full md:w-1/3 my-2 flex items-center mx-1 px-4 md:px-0">
              <fa-icon :icon="['far', 'address-card']" class="experiencesPresentation__infos-icon" />
              <span class="ml-2">{{ experience.type }}</span>
            </div>
            <div class="w-full md:w-1/3 my-2 flex items-center mx-1 px-4 md:px-0">
              <fa-icon :icon="['far', 'calendar-alt']" class="experiencesPresentation__infos-icon" />
              <span class="ml-2">{{ $t('start') }} {{ experience.start }}</span>
            </div>
            <div class="w-full md:w-1/3 my-2 flex items-center mx-1 px-4 md:px-0">
              <fa-icon :icon="['far', 'calendar-alt']" class="experiencesPresentation__infos-icon" />
              <span class="ml-2">{{ $t('end') }} {{ experience.end }}</span>
            </div>
          </div>
          <div class="experiencesPresentation__missions mt-8">
            <div
              v-for="(mission, index) in experience.missions"
              :key="mission.id"
              class="my-10"
            >
              <h3 class="text-3xl font-thin mb-3">
                {{ index + 1 }}. {{ mission.title }}
              </h3>
              <p>
                {{ mission.description }}
              </p>
              <div class="experiencesPresentation__missions-skills py-4">
                <Skill
                  v-for="skill in mission.skills"
                  :key="skill"
                  :name="skill"
                  color="primary"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import BottomSingleWaveSvg from '@/components/shared/BottomSingleWaveSvg';
import Skill from '@/components/shared/Skill';
import { theme } from '@/tailwind.config';
import ogImage from '@/assets/img/photo_profil.jpg';

export default {
  name: 'SingleExperience',
  components: {
    BottomSingleWaveSvg,
    Skill
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
  },
  head() {
    return {
      title: `${this.$t('myExperienceOf')} ${this.experience.title}`,
      meta: [
        { hid: 'title', name: 'title', content: `${this.$t('myExperienceOf')} ${this.experience.title} | ${process.env.SITE_NAME}` },
        { hid: 'description', name: 'description', content: `${this.experience.shortDesc}` },
        { hid: 'og_title', property: 'og:title', content: `${this.$t('myExperienceOf')} ${this.experience.title} | ${process.env.SITE_NAME}` },
        { hid: 'og_sitename', property: 'og:site_name', content: `${process.env.SITE_NAME}` },
        { hid: 'og_type', property: 'og:type', content: `website` },
        { hid: 'og_url', property: 'og:url', content: `${process.env.BASE_URL}${this.$route.path}` },
        { hid: 'og_image', property: 'og:image', content: `${process.env.BASE_URL}${ogImage}` },
        { hid: 'og_image_url', property: 'og:image:url', content: `${process.env.BASE_URL}${ogImage}` },
        { hid: 'twitter_title', name: 'twitter:title', content: `${this.$t('myExperienceOf')} ${this.experience.title} | ${process.env.SITE_NAME}` },
        { hid: 'twitter_description', name: 'twitter:description', content: `${this.experience.shortDesc}` },
        { hid: 'twitter_creatorid', name: 'twitter:creator:id', content: `tfortin_pro` },
        { hid: 'twitter_url', name: 'twitter:url', content: `${process.env.BASE_URL}${this.$route.path}` },
        { hid: 'twitter_card', name: 'twitter:card', content: `summary_large_image` }
      ],
      script: [
        {
          type: 'application/ld+json',
          json: {
            '@context': 'https://schema.org',
            '@type': 'WebPage',
            'name': `${this.$t('home.title')} | ${process.env.SITE_NAME}`,
            'description': `${this.$t('home.description')}`,
            'publisher': {
              '@type': 'Person',
              'name': 'Thomas Fortin',
              'image': `${process.env.BASE_URL}${ogImage}`,
              'sameAs': [
                'https://www.linkedin.com/in/fortinthomas',
                'https://medium.com/@thomas.fortin.pro',
                'https://github.com/thomas-fortin',
                'https://twitter.com/tfortin_pro'
              ]
            }
          }
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
.experiencesPresentation__infos {
  > div {
    height: 50px;
    .experiencesPresentation__infos-icon {
      width: 25px;
    }
  }
}
</style>
