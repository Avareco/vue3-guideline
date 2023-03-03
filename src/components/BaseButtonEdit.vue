<script setup lang="ts">
const props = defineProps<{ onClick: () => void }>();
</script>

<template>
  <q-btn
    square
    color="yellow"
    icon="edit"
    @click="props.onClick"
  />
</template>
