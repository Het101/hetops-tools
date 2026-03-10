<script setup lang="ts">
import type { Component } from 'vue';

const props = defineProps<{ icon: Component; title: string }>();
const { icon, title } = toRefs(props);
</script>

<template>
  <div class="glass-card p-6 h-full flex flex-col justify-between group">
    <div flex items-center mb-4 gap-4>
      <n-icon
        class="text-emerald-500 transition-transform group-hover:scale-110 group-hover:text-[#00f260]"
        size="32"
        :component="icon"
      />
      <n-h3 class="!mb-0 text-xl font-bold text-white group-hover:text-[#00f260] transition-colors">
        <n-ellipsis>{{ title }}</n-ellipsis>
      </n-h3>
    </div>

    <div class="text-sm text-gray-400 line-clamp-3 leading-relaxed">
      <n-ellipsis :line-clamp="2" :tooltip="false">
        <slot />
      </n-ellipsis>
    </div>
  </div>
</template>
