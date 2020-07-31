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

export default {
  components: {
    HomeTop,
    HomeExperiences,
    HomeStudies,
    HomeCallToAction
  }
};
</script>
