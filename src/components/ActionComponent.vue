<script setup lang="ts">
import { Button } from '@/components/ui/button';
import { useItemsStore } from '@/stores/itemsStore';

const store = useItemsStore();
</script>
<template>
  <div class="flex flex-col gap-2">
    <Button :disabled="!store.leftSideItemsToMoveRight.length" @click="store.moveItemsToRight">{{
      '>'
    }}</Button>
    <Button :disabled="!store.rightSideItemsToMoveLeft.length" @click="store.moveItemsToLeft">{{
      '<'
    }}</Button>
  </div>
</template>
