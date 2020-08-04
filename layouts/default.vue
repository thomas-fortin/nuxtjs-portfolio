<template>
  <div>
    <Header />
    <main role="main">
      <Nuxt />
    </main>
    <Footer />
  </div>
</template>

<script>
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

export default {
  components: {
    Footer,
    Header
  }
};
</script>
