<template>
  <div>
    <HomeTop />
    <HomeExperiences />
    <HomeCallToAction />
  </div>
</template>

<script>
import HomeTop from '@/components/home/HomeTop';
import HomeExperiences from '@/components/home/HomeExperiences';
import HomeCallToAction from '@/components/home/HomeCallToAction';

export default {
  components: {
    HomeTop,
    HomeExperiences,
    HomeCallToAction
  }
};
</script>
