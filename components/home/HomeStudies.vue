<template>
  <section id="homeStudies" class="bg-gray-100">
    <div class="container mx-auto py-5">
      <h3 class="section-title">
        {{ $t('homeStudies.title') }}
      </h3>
      <div class="homeStudies__content mt-8">
        <p class="text-center">
        {{ $t('homeStudies.catchPhrase') }}
        </p>
        <div class="mt-16 flex flex-wrap justify-center studies">
          <!-- <template v-if="studies">
            <StudyCard v-for="study in studies" :key="study.id" :study="study" />
          </template> -->
        </div>
      </div>
    </div>
  </section>
</template>

<script>
// import { mapGetters } from 'vuex';

// export default {
//   computed: {
//     ...mapGetters('studies', {
//       'studies': 'getStudies'
//     })
//   },
//   created() {
//     this.$store.dispatch('studies/fetchStudies');
//   }
// };
</script>
