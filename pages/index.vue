<template>
  <div>
    <HomeTop />
    <HomeExperiences />
    <HomeCallToAction />
    <HomeStudies />
  </div>
</template>

<script>
import HomeTop from '@/components/home/HomeTop';
import HomeExperiences from '@/components/home/HomeExperiences';
import HomeStudies from '@/components/home/HomeStudies';
import HomeCallToAction from '@/components/home/HomeCallToAction';
import ogImage from '@/assets/img/photo_profil.jpg';

export default {
  components: {
    HomeTop,
    HomeExperiences,
    HomeStudies,
    HomeCallToAction
  },
  head() {
    return {
      title: `${this.$t('home.title')}`,
      meta: [
        { hid: 'title', name: 'title', content: `${this.$t('home.title')} | ${process.env.SITE_NAME}` },
        { hid: 'description', name: 'description', content: `${this.$t('home.description')}` },
        { hid: 'og_title', property: 'og:title', content: `${this.$t('home.title')} | ${process.env.SITE_NAME}` },
        { hid: 'og_sitename', property: 'og:site_name', content: `${process.env.SITE_NAME}` },
        { hid: 'og_type', property: 'og:type', content: `website` },
        { hid: 'og_url', property: 'og:url', content: `${process.env.BASE_URL}` },
        { hid: 'og_image', property: 'og:image', content: `${process.env.BASE_URL}${ogImage}` },
        { hid: 'og_image_url', property: 'og:image:url', content: `${process.env.BASE_URL}${ogImage}` },
        { hid: 'twitter_title', name: 'twitter:title', content: `${this.$t('home.title')} | ${process.env.SITE_NAME}` },
        { hid: 'twitter_description', name: 'twitter:description', content: `${this.$t('home.description')}` },
        { hid: 'twitter_creatorid', name: 'twitter:creator:id', content: `tfortin_pro` },
        { hid: 'twitter_url', name: 'twitter:url', content: `${process.env.BASE_URL}` },
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
