<template>
  <section class="homeTop bg-main-gradient h-screen relative overflow-hidden text-center">
    <div class="color-overlay bg-main-gradient opacity-90 absolute top-0 left-0 w-full h-full" />
    <div class="container mx-auto h-full flex flex-col justify-center">
      <div class="homeTop__content text-white z-10">
        <div class="homeTop__content-titles">
          <h1 class="text-5xl md:text-6xl lg:text-7xl font-thin">
            Thomas Fortin
          </h1>
          <h2 class="text-3xl md:text-4xl lg:text-5xl font-thin">
            {{ $t('jobPost') }}
          </h2>
        </div>
        <ScrollDownButton link="homeExperiences" />
      </div>
    </div>
    <BottomSingleWaveSvg />
  </section>
</template>

<script>
import ScrollDownButton from '@/components/shared/ScrollDownButton';
import BottomSingleWaveSvg from '@/components/shared/BottomSingleWaveSvg';
export default {
  name: 'HomeTop',
  components: {
    BottomSingleWaveSvg,
    ScrollDownButton
  }
};
</script>
