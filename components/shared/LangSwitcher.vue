<template>
  <div>
    <div
      v-for="locale in availableLocales"
      :key="locale.code"
      class="cursor-pointer"
      @click="switchLocale(locale)"
    >
      <img :src="require(`@/assets/img/flags/${locale.code}.svg`)" :alt="locale.name">
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    availableLocales() {
      return this.$i18n.locales.filter((i) => {
        return i.code !== this.$i18n.locale;
      });
    }
  },
  methods: {
    switchLocale(locale) {
      this.$router.push({ path: this.switchLocalePath(locale.code) });
    }
  }
};
</script>

<style lang="scss" scoped>
img {
  width: 30px;
  height: 30px;
}
</style>
