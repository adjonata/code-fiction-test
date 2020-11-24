<template>
  <div class="t-textarea d-row flex-nowrap">
    <i class="material-icons mr-2" v-if="icon">{{ icon }}</i>
    <textarea
      v-model="$attrs.value"
      :placeholder="label"
      :style="{ height }"
      @input="$emit('input', $event.target.value)"
    />
  </div>
</template>

<script>
export default {
  name: "t-textarea",
  props: {
    label: {
      type: String,
      default: "Campo",
    },
    icon: String,
    height: {
      type: String,
      default: '60px'
    }
  },
  methods: {
    validate() {
      return !!this.$attrs.value;
    }
  }
};
</script>

<style scoped>
.t-textarea {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  background: #efefef;
  padding: 6px 8px;
  border-radius: 5px;
}

.t-textarea textarea,
.t-textarea i.material-icons {
  color: #676767;
  background: none;
}
.t-textarea i {
  font-size: 16px;
}
.t-textarea textarea {
  width: calc(100% - 16px) !important;
  font-size: 14.2px;
  height: 42px;
}
</style>
