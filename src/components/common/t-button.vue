<template>
  <button
    class="t-button shadow-sm"
    :style="{ backgroundColor: color, color: textColor }"
    :type="type"
    @click="$emit('click', $event)"
  >
    <i class="material-icons mr-2" :style="{ color: iconColor }" v-if="icon">
      {{ icon }}
    </i>

    {{ label }}

    <i
      class="material-icons ml-2"
      :style="{ color: iconColor }"
      v-if="iconRight"
    >
      {{ iconRight }}
    </i>
  </button>
</template>

<script>
export default {
  name: "t-button",
  props: {
    label: {
      type: String,
      default: "Clique-me",
    },
    color: {
      type: String,
      default: "#3D3B8E",
    },
    textColor: {
      type: String,
      default: "#FFFFFF",
    },
    icon: String,
    iconRight: String,
    iconColor: {
      type: String,
      default: "#ffffff",
    },
    type: String
  },
};
</script>

<style lang="scss" scoped>
.t-button {
  width: 100%;
  height: 38px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 6px 8px;
  border-radius: 5px;
  outline: none !important;
  transition: filter 0.3s;
  transition: background-color 0.3s;
}
@media (max-width: 800px) {
  .t-button {
    font-size: 13.4px;
  }
}
.t-button:hover {
  filter: brightness(110%);
}
.t-button i.material-icons {
  font-size: 16px;
  filter: brightness(95%);
}
</style>
