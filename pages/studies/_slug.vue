<template>
  <div>
    <section id="studiesTop" class="bg-main-gradient h-half-screen relative overflow-hidden text-center text-white">
      <div class="container h-full flex flex-col justify-center">
        <div class="homeTop__content-titles">
          <h1 class="text-4xl md:text-5xl lg:text-6xl font-thin">
            {{ study.title }}
          </h1>
          <h2 class="text-2xl md:text-3xl lg:text-4xl font-thin">
            à {{ study.school }} — {{ study.city }}
          </h2>
        </div>
      </div>
      <BottomSingleWaveSvg :color="bgColor" />
    </section>
    <section id="studiesPresentation" class="studiesPresentation bg-gray-100">
      <div class="container py-5">
        <p class="my-5">
          {{ study.longDesc }}
        </p>
        <Skill
          v-for="skill in study.skills"
          :key="skill"
          :name="skill"
          color="secondary"
        />
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
  name: 'SingleStudy',
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
    study() {
      return this.$store.getters['studies/getStudy'];
    }
  },
  beforeCreate() {
    this.$store.dispatch('studies/fetchOneStudy', this.$route.params.slug);
  },
  head() {
    return {
      title: `${this.study.title}`,
      meta: [
        { hid: 'title', name: 'title', content: `${this.study.title} | ${process.env.SITE_NAME}` },
        { hid: 'description', name: 'description', content: `${this.study.shortDesc}` },
        { hid: 'og_title', property: 'og:title', content: `${this.study.title} | ${process.env.SITE_NAME}` },
        { hid: 'og_sitename', property: 'og:site_name', content: `${process.env.SITE_NAME}` },
        { hid: 'og_type', property: 'og:type', content: `website` },
        { hid: 'og_url', property: 'og:url', content: `${process.env.BASE_URL}${this.$route.path}` },
        { hid: 'og_image', property: 'og:image', content: `${process.env.BASE_URL}${ogImage}` },
        { hid: 'og_image_url', property: 'og:image:url', content: `${process.env.BASE_URL}${ogImage}` },
        { hid: 'twitter_title', name: 'twitter:title', content: `${this.study.title} | ${process.env.SITE_NAME}` },
        { hid: 'twitter_description', name: 'twitter:description', content: `${this.study.shortDesc}` },
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
            'name': `${this.study.title} | ${process.env.SITE_NAME}`,
            'description': `${this.study.shortDesc}`,
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
.studiesPresentation__infos {
  > div {
    height: 50px;
    .studiesPresentation__infos-icon {
      width: 25px;
    }
  }
}
</style>
