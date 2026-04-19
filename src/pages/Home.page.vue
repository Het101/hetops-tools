<script setup lang="ts">
import { IconDragDrop, IconHeart } from '@tabler/icons-vue';
import { useHead } from '@vueuse/head';
import { computed } from 'vue';
import Draggable from 'vuedraggable';
import ColoredCard from '../components/ColoredCard.vue';
import ToolCard from '../components/ToolCard.vue';
import { useToolStore } from '@/tools/tools.store';
import { config } from '@/config';

const toolStore = useToolStore();

useHead({ title: 'HetOps Tools — Developer Toolkit' });
const { t } = useI18n();

const favoriteTools = computed(() => toolStore.favoriteTools);

// Update favorite tools order when drag is finished
function onUpdateFavoriteTools() {
  toolStore.updateFavoriteTools(favoriteTools.value); // Update the store with the new order
}
</script>

<template>
  <div>
    <div class="grid-wrapper">
      <div class="grid grid-cols-1 gap-4 lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-2 xl:grid-cols-4 mb-2">
        <ColoredCard v-if="config.showBanner" :title="$t('home.follow.title')" :icon="IconHeart">
          <div class="text-[10px] font-mono text-gray-400">
            {{ $t('home.follow.p1') }}
            <a
              href="https://github.com/Het101/hetops-tools"
              rel="noopener"
              target="_blank"
              class="text-[#f59e0b] underline"
              :aria-label="$t('home.follow.githubRepository')"
              >GitHub</a
            >
            {{ $t('home.follow.p2') }}
            <a
              href="https://hetops.dev"
              rel="noopener"
              target="_blank"
              class="text-blue-400 underline"
              :aria-label="$t('home.follow.twitterXAccount')"
              >hetops.dev</a
            >.
            {{ $t('home.follow.thankYou') }}
          </div>
        </ColoredCard>
      </div>

      <transition name="height">
        <div v-if="toolStore.favoriteTools.length > 0">
          <div class="section-header-row">
            <h3 class="section-header">
              <span class="section-slash">//</span>
              <span>{{ $t('home.categories.favoriteTools') }}</span>
              <span class="section-count">{{ favoriteTools.length }}</span>
            </h3>
            <c-tooltip :tooltip="$t('home.categories.favoritesDndToolTip')">
              <n-icon :component="IconDragDrop" size="13" class="text-gray-500" />
            </c-tooltip>
          </div>
          <Draggable
            :list="favoriteTools"
            class="grid grid-cols-1 gap-4 lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-2 xl:grid-cols-4"
            ghost-class="ghost-favorites-draggable"
            item-key="name"
            @end="onUpdateFavoriteTools"
          >
            <template #item="{ element: tool }">
              <ToolCard :tool="tool" />
            </template>
          </Draggable>
        </div>
      </transition>

      <div v-if="toolStore.newTools.length > 0">
        <div class="section-header-row">
          <h3 class="section-header">
            <span class="section-slash">//</span>
            <span>{{ t('home.categories.newestTools') }}</span>
            <span class="section-count">{{ toolStore.newTools.length }}</span>
          </h3>
        </div>
        <div class="grid grid-cols-1 gap-4 lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-2 xl:grid-cols-4">
          <ToolCard v-for="tool in toolStore.newTools" :key="tool.name" :tool="tool" />
        </div>
      </div>

      <div class="section-header-row">
        <h3 class="section-header">
          <span class="section-slash">//</span>
          <span>{{ $t('home.categories.allTools') }}</span>
          <span class="section-count">{{ toolStore.tools.length }}</span>
        </h3>
      </div>
      <div class="grid grid-cols-1 gap-4 lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-2 xl:grid-cols-4">
        <ToolCard v-for="tool in toolStore.tools" :key="tool.name" :tool="tool" />
      </div>
    </div>
  </div>
</template>

<style scoped lang="less">
.section-header-row {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-top: 40px;
  margin-bottom: 20px;
}

.section-header {
  display: flex;
  align-items: center;
  gap: 8px;
  margin: 0;
  font-size: 10px;
  font-family: 'JetBrains Mono', monospace;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.45em;
  color: #6b7280;
}

.section-slash {
  color: #f59e0b;
  opacity: 0.7;
}

.section-count {
  font-size: 9px;
  font-family: 'JetBrains Mono', monospace;
  background: rgba(245, 158, 11, 0.1);
  color: #f59e0b;
  border: 1px solid rgba(245, 158, 11, 0.2);
  border-radius: 4px;
  padding: 1px 6px;
  letter-spacing: 0.02em;
  font-weight: 600;
}

.height-enter-active,
.height-leave-active {
  transition: all 0.5s ease-in-out;
  overflow: hidden;
  max-height: 500px;
}

.height-enter-from,
.height-leave-to {
  max-height: 42px;
  overflow: hidden;
  opacity: 0;
  margin-bottom: 0;
}

.ghost-favorites-draggable {
  opacity: 0.4;
  background-color: #ccc;
  border: 2px dashed #666;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  transform: scale(1.1);
  animation: ghost-favorites-draggable-animation 0.2s ease-out;
}

@keyframes ghost-favorites-draggable-animation {
  0% {
    opacity: 0;
    transform: scale(0.9);
  }
  100% {
    opacity: 0.4;
    transform: scale(1);
  }
}
</style>
