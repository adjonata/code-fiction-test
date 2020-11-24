<template>
  <button
    class="t-flat"
    :style="{ background: bgColor }"
    @click="$emit('click', $event)"
  >
    <i class="material-icons" :style="{ color, fontSize: iconSize }" v-if="icon">
      {{ icon }}
    </i>
  </button>
</template>

<script>
export default {
  name: "t-flat",
  props: {
    bgColor: {
      type: String,
      default: "none",
    },
    icon: String,
    color: {
      type: String,
      default: "#3d3b8e",
    },
    iconSize: {
      type: String,
      default: '19px'
    }
  },
};
</script>

<style lang="scss" scoped>
.t-flat {
  width: 38px;
  height: 38px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  outline: none !important;
  transition: filter 0.3s;
}
.t-flat:hover {
  filter: brightness(110%);
}
</style>
