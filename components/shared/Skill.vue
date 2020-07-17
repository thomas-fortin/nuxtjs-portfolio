<template>
  <span
    class="inline-block rounded-full px-3 py-1 text-sm font-semibold mr-2 mb-3 text-white"
    :class="'bg-' + color"
  >
    {{ name }}
  </span>
</template>

<script>
export default {
  name: 'Skill',
  props: {
    name: {
      type: String,
      default: 'Unknown'
    },
    color: {
      type: String,
      default: 'primary'
    }
  }
};
</script>
