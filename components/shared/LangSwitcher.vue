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
      return new Promise((resolve, reject) => {
        try {
          this.$router.push({ path: this.switchLocalePath(locale.code) });
          resolve();
        } catch (e) {
          reject(e);
        }
      }).then(() => {
        this.$swal({
          toast: true,
          showConfirmButton: false,
          position: 'bottom-end',
          timerProgressBar: true,
          title: `${this.$t('i18n.languageSwitchedTo', locale.code)} ${locale.name}`,
          icon: 'success',
          timer: 3000
        });
      }).catch(() => {
        this.$swal({
          toast: true,
          showConfirmButton: false,
          position: 'bottom-end',
          timerProgressBar: true,
          title: `${this.$t('i18n.languageSwitchedError', locale.code)} ${locale.name}`,
          icon: 'error',
          timer: 3000
        });
      });
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
