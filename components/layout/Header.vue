<template>
  <header class="absolute w-full z-20" role="banner">
    <div class="container flex justify-between py-3">
      <nuxt-link :to="localePath('index')">
        <span class="text-white text-2xl">Thomas Fortin</span>
      </nuxt-link>
      <LangSwitcher />
    </div>
  </header>
</template>

<script>
import LangSwitcher from '@/components/shared/LangSwitcher';
export default {
  components: {
    LangSwitcher
  }
};
</script>
