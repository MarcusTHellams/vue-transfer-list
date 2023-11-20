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
  console.log('value, isChecked: ', value, isChecked);
};
</script>
<template>
  <div
    class="flex justify-center items-center h-[150px] w-[100px] border-[1px] border-black rounded"
  >
    <div class="flex flex-col gap-1">
      <template v-for="number in isLeft ? store.leftSideItems : store.rightSideItems" :key="number">
        <Label class="flex gap-1 items-center">
          <Checkbox
            @change="changeHandler"
            v-if="isLeft"
            :value="number"
            v-model="store.leftSideItemsToMoveRight"
          />
          <Checkbox v-else :value="number" v-model="store.rightSideItemsToMoveLeft" />
          {{ number }}
        </Label>
      </template>
    </div>
  </div>
</template>
