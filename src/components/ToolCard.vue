<script setup lang="ts">
import FavoriteButton from './FavoriteButton.vue';
import type { Tool } from '@/tools/tools.types';

const props = defineProps<{ tool: Tool & { category: string } }>();
const { tool } = toRefs(props);
</script>

<template>
  <router-link :to="tool.path" class="decoration-none h-full block">
    <div class="glass-card tool-card p-6 h-full flex flex-col justify-between group">
      <div>
        <div flex items-center justify-between mb-4>
          <n-icon
            class="text-[#f59e0b] transition-transform group-hover:scale-110 group-hover:text-[#fbbf24]"
            size="28"
            :component="tool.icon"
          />
          <div flex items-center gap-8px>
            <div v-if="tool.isNew" class="new-badge rounded text-[10px] px-2 py-0.5 font-mono font-bold">
              NEW
            </div>
            <FavoriteButton :tool="tool" />
          </div>
        </div>
        <div class="text-[15px] font-bold mb-2 text-white group-hover:text-[#f59e0b] transition-colors leading-snug">
          {{ tool.name }}
        </div>
        <div class="text-[12px] text-gray-500 line-clamp-3 leading-relaxed">
          {{ tool.description }}
        </div>
      </div>
    </div>
  </router-link>
</template>

<style scoped lang="less">
.tool-card {
  box-shadow: inset 0 2px 0 rgba(245, 158, 11, 0.35);
  transition: box-shadow 0.15s;

  &:hover {
    box-shadow: inset 0 2px 0 rgba(245, 158, 11, 0.9), 0 4px 24px rgba(245, 158, 11, 0.1);
  }
}

.new-badge {
  background: rgba(245, 158, 11, 0.12);
  color: #f59e0b;
  border: 1px solid rgba(245, 158, 11, 0.25);
  letter-spacing: 0.05em;
}
</style>
