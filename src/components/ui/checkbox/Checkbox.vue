<script setup lang="ts">
import { cn } from '@/lib/utils';
import { Check } from 'lucide-vue-next';
import type { CheckboxRootEmits, CheckboxRootProps } from 'radix-vue';
import { CheckboxIndicator, CheckboxRoot, useForwardPropsEmits } from 'radix-vue';

const props = defineProps<CheckboxRootProps>();
const emits = defineEmits<
  CheckboxRootEmits & {
    change: [{ value: typeof props.value; isChecked: boolean }];
  }
>();

const updateCheckedHandler = (bool: boolean) => {
  emits('change', { value: props.value, isChecked: bool });
};

const forwarded = useForwardPropsEmits(props, emits);
</script>

<template>
  <CheckboxRoot
    v-bind="forwarded"
    @update:checked="updateCheckedHandler"
    :class="
      cn(
        'peer h-4 w-4 shrink-0 rounded-sm border border-primary ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground',
        $attrs.class ?? '',
      )
    "
  >
    <CheckboxIndicator class="flex items-center justify-center text-current">
      <Check class="h-4 w-4" />
    </CheckboxIndicator>
  </CheckboxRoot>
</template>
