<template>
  <div class="box">
    <div class="box-title">
      <h2>{{ title }}</h2>
    </div>
    <div class="box-content">
      <slot></slot>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    title: { type: String, default: null }
  }
}
</script>
