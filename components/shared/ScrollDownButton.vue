<template>
  <div id="scrollButton" class="absolute bottom-8 lg:bottom-10">
    <a v-scroll-to="'#' + link" href="#">
      <span />
      <span />
      <span />
    </a>
  </div>
</template>

<script>
export default {
  props: {
    link: {
      type: String,
      default: 'scrollButton'
    }
  }
};
</script>

<style lang="scss" scoped>
#scrollButton {
  left: 50%;
  a span {
    position: absolute;
    top: 0;
    left: 50%;
    width: 24px;
    height: 24px;
    margin-left: -12px;
    border-left: 1px solid #fff;
    border-bottom: 1px solid #fff;
    -webkit-transform: rotate(-45deg);
    transform: rotate(-45deg);
    -webkit-animation: scroll 2s infinite;
    animation: scroll 2s infinite;
    opacity: 0;
    box-sizing: border-box;
  }
  a span:nth-of-type(1) {
    -webkit-animation-delay: 0s;
    animation-delay: 0s;
  }
  a span:nth-of-type(2) {
    top: 16px;
    -webkit-animation-delay: 0.15s;
    animation-delay: 0.15s;
  }
  a span:nth-of-type(3) {
    top: 32px;
    -webkit-animation-delay: 0.3s;
    animation-delay: 0.3s;
  }
}

@-webkit-keyframes scroll {
  0% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}

@keyframes scroll {
  0% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}
</style>
