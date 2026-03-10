<script setup lang="ts">
import type { PaletteOption } from '../command-palette.types';

const props = withDefaults(defineProps<{ option: PaletteOption; selected?: boolean }>(), {
  selected: false,
});
const emit = defineEmits(['activated']);
const { option } = toRefs(props);

const { selected } = toRefs(props);
import { useElementHover } from '@vueuse/core';
const el = ref<HTMLElement | null>(null);
const isHovered = useElementHover(el);
</script>

<template>
  <div
    ref="el"
    role="option"
    :aria-selected="selected"
    :class="{
      'bg-neutral-800/50': selected && !isHovered,
      border: true,
      'border-transparent': true,
    }"
    class="w-full flex cursor-pointer items-center overflow-hidden rounded-xl pa-3 transition-colors hover:bg-emerald-500/10 hover:text-[#00f260] hover:border-emerald-500/30"
    @click="() => emit('activated', option)"
  >
    <component :is="option.icon" v-if="option.icon" mr-3 h-30px w-30px shrink-0 op-50 />

    <div flex-1 overflow-hidden>
      <div truncate font-bold lh-tight op-90>
        {{ option.name }}
      </div>

      <div v-if="option.description" truncate lh-tight op-60>
        {{ option.description }}
      </div>
    </div>
  </div>
</template>
