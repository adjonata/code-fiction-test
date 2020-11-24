<template>
  <div
    class="t-input"
    :style="{
      background: pattern.background || '#efefef',
      borderBottom: pattern.borderBottom || 'none',
    }"
  >
    <i
      class="material-icons mr-2"
      :style="{
        color: pattern.color || '#676767',
      }"
      v-if="icon"
      >{{ icon }}</i
    >
    <input
      v-model="$attrs.value"
      :placeholder="label"
      :type="type"
      :style="{ color: pattern.color || '#676767' }"
      @input="$emit('input', $event.target.value)"
    />
  </div>
</template>

<script>
export default {
  name: "t-input",
  props: {
    label: {
      type: String,
      default: "Campo",
    },
    icon: String,
    type: {
      type: String,
      default: "text",
    },
    flat: Boolean,
  },
  data() {
    return {
      pattern: {
        background: null,
        color: null,
        borderBottom: null,
      },
    };
  },
  mounted() {
    const props = this.$props;

    if (props.flat) {
      this.pattern.background = "none";
      this.pattern.color = "#efefef";
      this.pattern.borderBottom = "solid 1px #efefef";
    }
  },
  methods: {
    validate() {
      return !!this.$attrs.value;
    },
  },
};
</script>

<style scoped>
.t-input {
  width: 100%;
  height: 42px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 6px 8px;
  border-radius: 5px;
  font-size: 14.2px;
}

.t-input input,
.t-input i.material-icons {
  background: none;
}
.t-input i {
  font-size: 16px;
}
.t-input input {
  width: calc(100% - 16px) !important;
}
</style>
