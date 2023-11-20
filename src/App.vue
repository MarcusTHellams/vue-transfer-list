<script setup lang="ts">
import List from './components/ListComponent.vue';
import Action from './components/ActionComponent.vue';
</script>

<template>
  <div class="prose max-w-none">
    <div class="flex justify-center items-center h-[100vh] gap-2">
      <List which-side="left" />
      <Action />
      <List which-side="right" />
    </div>
  </div>
</template>
