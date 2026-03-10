import {
  defineConfig,
  presetAttributify,
  presetTypography,
  presetUno,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss';

import { presetScrollbar } from 'unocss-preset-scrollbar';

export default defineConfig({
  presets: [presetUno(), presetAttributify({ ignoreAttributes: ['size'] }), presetTypography(), presetScrollbar()],
  transformers: [transformerDirectives(), transformerVariantGroup()],
  theme: {
    colors: {
      primary: '#00ff41',

    },
  },
  shortcuts: {
    'pretty-scrollbar': 'scrollbar scrollbar-rounded scrollbar-thumb-color-gray-300 scrollbar-track-color-gray-100 dark:scrollbar-thumb-color-#424242 dark:scrollbar-track-color-#686868',
    'divider': 'h-1px bg-current op-10',
    'bg-surface': 'bg-#ffffff dark:bg-[#0a0a0a]',
    'bg-background': 'bg-#f1f5f9 dark:bg-[#020202]',
    'glass-card': 'bg-[rgba(255,255,255,0.03)] backdrop-blur-[20px] border border-[rgba(255,255,255,0.08)] rounded-[24px] transition-all duration-400 ease-[cubic-bezier(0.175,0.885,0.32,1.275)] hover:border-[rgba(0,242,96,0.5)] hover:-translate-y-[8px]',
    'glass-card-shadow': 'shadow-[inset_0_0_0_1px_rgba(255,255,255,0.05),0_10px_30px_-10px_rgba(0,0,0,0.5)] hover:shadow-[inset_0_0_0_1px_rgba(0,242,96,0.2),0_20px_40px_rgba(0,242,96,0.15),0_10px_30px_-10px_rgba(0,0,0,0.5)]',
    'gradient-text': 'bg-gradient-to-r from-[#00f260] to-[#0575e6] text-transparent bg-clip-text',
    'terminal-container': 'bg-[#0a0a0a] border border-[#333] rounded-[12px] flex flex-col overflow-hidden shadow-[0_30px_60px_rgba(0,0,0,0.5)]',
    'terminal-header': 'bg-[#1a1a1a] p-[10px_15px] flex justify-between items-center',
    'terminal-body': 'p-[20px] flex-grow overflow-y-auto font-mono text-[13px] text-[#d1d1d1]',
  },
});
