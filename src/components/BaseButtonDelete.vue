<script setup lang="ts">
const props = defineProps<{ onClick: () => void }>();
</script>

<template>
  <q-btn
    square
    color="red"
    icon="delete"
    @click="props.onClick"
  />
</template>
