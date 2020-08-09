<template>
  <section id="homeCallToAction" class="bg-main-gradient relative overflow-hidden text-center text-white">
    <div class="container py-5">
      <h3 class="section-title">
        {{ $t('homeCallToAction.title') }}
      </h3>
      <div class="flex flex-col md:flex-row mt-8">
        <div class="homeCallToAction__content md:w-1/2 flex flex-col justify-center">
          <p class="text-center">
            {{ $t('homeCallToAction.catchPhrase') }}
          </p>
          <div class="socialNetworks flex justify-center my-5">
            <div class="socialNetworks__linkedin mx-5 text-5xl">
              <a href="https://www.linkedin.com/in/fortinthomas/" class="hover-effect-2" target="_blank" rel="nofollow">
                <fa-icon :icon="['fab', 'linkedin']" />
              </a>
            </div>
            <div class="socialNetworks__medium mx-5 text-5xl">
              <a href="https://medium.com/@thomas.fortin.pro" class="hover-effect-2" target="_blank" rel="nofollow">
                <fa-icon :icon="['fab', 'medium']" />
              </a>
            </div>
            <div class="socialNetworks__github mx-5 text-5xl">
              <a href="https://github.com/thomas-fortin" class="hover-effect-2" target="_blank" rel="nofollow">
                <fa-icon :icon="['fab', 'github']" />
              </a>
            </div>
            <div class="socialNetworks__twitter mx-5 text-5xl">
              <a href="https://twitter.com/tfortin_pro" class="hover-effect-2" target="_blank" rel="nofollow">
                <fa-icon :icon="['fab', 'twitter']" />
              </a>
            </div>
          </div>
        </div>
        <div class="homeCallToAction__illustration md:w-1/2">
          <img src="~/assets/img/illustrations/network.svg" alt="" class="floating-effect w-100">
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'HomeCallToAction'
};
</script>
