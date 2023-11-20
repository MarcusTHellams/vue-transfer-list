<script setup lang="ts">
import { Checkbox } from './ui/checkbox';
import { Label } from './ui/label';
import { useItemsStore } from '@/stores/itemsStore';
import { computed } from 'vue';

const props = defineProps<{
  whichSide: 'left' | 'right';
}>();

const isLeft = computed(() => props.whichSide === 'left');

const store = useItemsStore();

const changeHandler = ({ value, isChecked }: any) => {
  if (isChecked) {
    isLeft.value
      ? (store.leftSideItemsToMoveRight = [...store.leftSideItemsToMoveRight, value])
      : (store.rightSideItemsToMoveLeft = [...store.rightSideItemsToMoveLeft, value]);
    return;
  }
  isLeft.value
    ? (store.leftSideItemsToMoveRight = store.leftSideItemsToMoveRight =
        store.leftSideItemsToMoveRight.filter((val) => val !== val))
    : (store.rightSideItemsToMoveLeft = store.rightSideItemsToMoveLeft =
        store.rightSideItemsToMoveLeft.filter((val) => val !== val));
  return;
};
</script>
<template>
  <div
    class="flex justify-center items-center h-[150px] w-[100px] border-[1px] border-black rounded"
  >
    <div class="flex flex-col gap-1">
      <template v-for="number in isLeft ? store.leftSideItems : store.rightSideItems" :key="number">
        <Label class="flex gap-1 items-center">
          <Checkbox @change="changeHandler" :value="number" />
          {{ number }}
        </Label>
      </template>
    </div>
  </div>
</template>
