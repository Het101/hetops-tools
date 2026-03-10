<script setup lang="ts">
import { useThemeVars } from 'naive-ui';
import FavoriteButton from './FavoriteButton.vue';
import type { Tool } from '@/tools/tools.types';

const props = defineProps<{ tool: Tool & { category: string } }>();
const { tool } = toRefs(props);
const theme = useThemeVars();
</script>

<template>
  <router-link :to="tool.path" class="decoration-none h-full block">
    <div class="glass-card p-6 h-full flex flex-col justify-between group">
      <div>
        <div flex items-center justify-between mb-4>
          <n-icon
            class="text-emerald-500 transition-transform group-hover:scale-110 group-hover:text-[#00f260]"
            size="32"
            :component="tool.icon"
          />
          <div flex items-center gap-8px>
            <div v-if="tool.isNew" class="rounded text-[10px] px-2 py-1 bg-emerald-500/10 text-emerald-400 font-mono">
              {{ $t('toolCard.new') }}
            </div>
            <FavoriteButton :tool="tool" />
          </div>
        </div>
        <div class="text-xl font-bold mb-3 text-white group-hover:text-[#00f260] transition-colors">
          {{ tool.name }}
        </div>
        <div class="text-sm text-gray-400 line-clamp-3 leading-relaxed">
          {{ tool.description }}
        </div>
      </div>
    </div>
  </router-link>
</template>
