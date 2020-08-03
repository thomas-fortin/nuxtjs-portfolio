<template>
  <div>
    <main role="main">
      <Nuxt />
    </main>
    <Footer />
  </div>
</template>

<script>
import Footer from '@/components/layout/Footer';

export default {
  components: {
    Footer
  }
};
</script>
