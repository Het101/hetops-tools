<script lang="ts" setup>
import { NIcon, useThemeVars } from 'naive-ui';

import { RouterLink } from 'vue-router';
import { Heart, Home2, Menu2 } from '@vicons/tabler';

import { storeToRefs } from 'pinia';
import HeroGradient from '../assets/hero-gradient.svg?component';
import MenuLayout from '../components/MenuLayout.vue';
import NavbarButtons from '../components/NavbarButtons.vue';
import { useStyleStore } from '@/stores/style.store';
import { config } from '@/config';
import type { ToolCategory } from '@/tools/tools.types';
import { useToolStore } from '@/tools/tools.store';
import { useTracker } from '@/modules/tracker/tracker.services';
import CollapsibleToolMenu from '@/components/CollapsibleToolMenu.vue';

const themeVars = useThemeVars();
const styleStore = useStyleStore();
const version = config.app.version;
const commitSha = config.app.lastCommitSha.slice(0, 7);

const { tracker } = useTracker();
const { t } = useI18n();

const toolStore = useToolStore();
const { favoriteTools, toolsByCategory } = storeToRefs(toolStore);

const tools = computed<ToolCategory[]>(() => [
  ...(favoriteTools.value.length > 0
    ? [{ name: t('tools.categories.favorite-tools'), components: favoriteTools.value }]
    : []),
  ...toolsByCategory.value,
]);
</script>

<template>
  <MenuLayout class="menu-layout" :class="{ isSmallScreen: styleStore.isSmallScreen }">
    <template #sider>
      <RouterLink to="/" class="block mt-6 mb-8 decoration-none" style="display: flex; flex-direction: column; padding: 10px 20px;">
        <div style="display: flex; align-items: center; justify-content: flex-start;">
            <img src="/icon.svg" style="width: 140px; height: auto; display: block;" alt="HetOps Logo" />
            <span class="text-gray-500 text-xs ml-2 font-mono mt-1" style="font-weight: bold; font-style: italic;">TOOLS</span>
        </div>
        <div class="text-gray-400 text-[10px] mt-2 uppercase tracking-widest font-mono">
          {{ $t('home.subtitle') }}
        </div>
      </RouterLink>

      <div class="sider-content">
        <div v-if="styleStore.isSmallScreen" flex flex-col items-center>
          <locale-selector w="90%" />
        </div>

        <CollapsibleToolMenu :tools-by-category="tools" />

        <div class="footer">
          <div>
            HetOps Tools

            <c-link target="_blank" rel="noopener" :href="`https://github.com/Het101/hetops-tools`">
              v{{ version }}
            </c-link>
          </div>
          <div>
            © {{ new Date().getFullYear() }}
            <c-link target="_blank" rel="noopener" href="https://hetops.dev">
              HetOps.dev
            </c-link>
            · Based on
            <c-link target="_blank" rel="noopener" href="https://github.com/CorentinTh/it-tools">
              IT-Tools
            </c-link>
          </div>
        </div>
      </div>
    </template>

    <template #content>
      <div flex items-center justify-center gap-2>
        <c-button
          circle
          variant="text"
          :aria-label="$t('home.toggleMenu')"
          @click="styleStore.isMenuCollapsed = !styleStore.isMenuCollapsed"
        >
          <NIcon size="25" :component="Menu2" />
        </c-button>

        <c-tooltip :tooltip="$t('home.home')" position="bottom">
          <c-button to="/" circle variant="text" :aria-label="$t('home.home')">
            <NIcon size="25" :component="Home2" />
          </c-button>
        </c-tooltip>

        <c-tooltip :tooltip="$t('home.uiLib')" position="bottom">
          <c-button
            v-if="config.app.env === 'development'"
            to="/c-lib"
            circle
            variant="text"
            :aria-label="$t('home.uiLib')"
          >
            <icon-mdi:brush-variant text-20px />
          </c-button>
        </c-tooltip>

        <command-palette />

        <locale-selector v-if="!styleStore.isSmallScreen" />
      </div>
      <slot />

      <!-- Fixed Status Bar Footer -->
      <footer
        class="fixed bottom-0 left-0 w-full bg-[#0a0a0a] border-t border-[#333] z-[100] flex justify-between items-center px-4 py-1.5 font-mono text-[10px] text-gray-400 shadow-[0_-5px_20px_rgba(0,0,0,0.5)]"
      >
        <div class="flex items-center gap-4">
          <span class="bg-[#00ff41] text-black px-2 py-0.5 font-bold flex items-center gap-1.5 rounded-sm">NORMAL</span>
          <span class="hidden sm:inline-block">hetops/tools</span>
          <span class="text-blue-400 flex items-center gap-1.5">main</span>
          <span class="hidden md:flex text-[#ffbd2e] items-center gap-1.5">v{{ version }}</span>
        </div>
        <div class="flex items-center gap-4">
          <span class="hidden sm:inline-block font-bold">ALL_SYSTEMS_OPTIMAL</span>
          <span class="text-emerald-500 flex items-center gap-1.5">OK</span>
          <span class="hidden lg:inline-block">UTF-8</span>
        </div>
      </footer>
    </template>
  </MenuLayout>
</template>

<style lang="less" scoped>
// ::v-deep(.n-layout-scroll-container) {
//     @percent: 4%;
//     @position: 25px;
//     @size: 50px;
//     @color: #eeeeee25;
//     background-image: radial-gradient(@color @percent, transparent @percent),
//         radial-gradient(@color @percent, transparent @percent);
//     background-position: 0 0, @position @position;
//     background-size: @size @size;
// }

.support-button {
  background: rgb(37, 99, 108);
  background: linear-gradient(48deg, rgba(37, 99, 108, 1) 0%, rgba(59, 149, 111, 1) 60%, rgba(20, 160, 88, 1) 100%);
  color: #fff !important;
  transition: padding ease 0.2s !important;

  &:hover {
    color: #fff;
    padding-left: 30px;
    padding-right: 30px;
  }
}

.footer {
  text-align: center;
  color: #838587;
  margin-top: 20px;
  padding: 20px 0;
}

.sider-content {
  padding-bottom: 200px;
}

.sider-content {
  padding-bottom: 200px;
}
</style>
