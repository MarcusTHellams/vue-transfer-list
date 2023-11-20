import { data } from '@/data';
import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useItemsStore = defineStore('itemsStore', () => {
  const leftSideItems = ref(data);
  const rightSideItems = ref<string[]>([]);
  const rightSideItemsToMoveLeft = ref<string[]>([]);
  const leftSideItemsToMoveRight = ref<string[]>([]);

  const moveItemsToRight = () => {
    rightSideItems.value = [
      ...new Set(rightSideItems.value.concat(leftSideItemsToMoveRight.value)),
    ].sort();
    leftSideItems.value = leftSideItems.value.filter((left) => {
      return !leftSideItemsToMoveRight.value.includes(left);
    });
    leftSideItemsToMoveRight.value = [];
  };
  const moveItemsToLeft = () => {
    leftSideItems.value = [
      ...new Set(leftSideItems.value.concat(rightSideItemsToMoveLeft.value)),
    ].sort();
    rightSideItems.value = rightSideItems.value.filter((right) => {
      return !rightSideItemsToMoveLeft.value.includes(right);
    });
    rightSideItemsToMoveLeft.value = [];
  };

  return {
    leftSideItems,
    rightSideItems,
    rightSideItemsToMoveLeft,
    leftSideItemsToMoveRight,
    moveItemsToLeft,
    moveItemsToRight,
  };
});
