<template>
  <label for="primaryInput"><slot /></label>
  <input :type="typeOfInput" id="primaryInput" />
</template>
<script lang="ts" setup>
const param = withDefaults(
  defineProps<{
    typeOfInput?: string
  }>(),
  { typeOfInput: 'text' },
);
param;
</script>
<style lang="scss" scoped></style>
