import type { GlobalThemeOverrides } from 'naive-ui';

export const lightThemeOverrides: GlobalThemeOverrides = {
  common: {
    primaryColor: '#d97706FF',
    primaryColorHover: '#f59e0bFF',
    primaryColorPressed: '#b45309FF',
    primaryColorSuppl: '#f59e0bFF',
  },

  Menu: {
    itemHeight: '32px',
    itemTextColorActive: '#d97706',
    itemIconColorActive: '#d97706',
    itemTextColorActiveHover: '#f59e0b',
    itemIconColorActiveHover: '#f59e0b',
  },

  Layout: { color: '#f1f5f9' },

  Input: {
    borderHover: '1px solid rgba(217, 119, 6, 0.4)',
    borderFocus: '1px solid rgba(217, 119, 6, 0.6)',
    boxShadowFocus: '0 0 10px rgba(217, 119, 6, 0.2)',
  },

  Button: {
    colorHover: 'rgba(217, 119, 6, 0.08)',
    borderHover: '1px solid rgba(217, 119, 6, 0.35)',
  },

  AutoComplete: {
    peers: {
      InternalSelectMenu: { height: '500px' },
    },
  },
};

export const darkThemeOverrides: GlobalThemeOverrides = {
  common: {
    primaryColor: '#f59e0bFF',
    primaryColorHover: '#fbbf24FF',
    primaryColorPressed: '#d97706FF',
    primaryColorSuppl: '#fbbf24FF',
  },

  Notification: {
    color: '#0a0a0a',
  },

  AutoComplete: {
    peers: {
      InternalSelectMenu: { height: '500px', color: '#0a0a0a' },
    },
  },

  Menu: {
    itemHeight: '32px',
  },

  Layout: {
    color: '#020202',
    siderColor: '#0a0a0a',
    siderBorderColor: 'transparent',
  },

  Card: {
    color: 'rgba(255, 255, 255, 0.03)',
    borderColor: 'rgba(255, 255, 255, 0.08)',
  },

  Table: {
    tdColor: '#0a0a0a',
    thColor: '#1a1a1a',
  },

  Input: {
    color: 'rgba(255, 255, 255, 0.03)',
    colorFocus: 'rgba(255, 255, 255, 0.05)',
    border: '1px solid rgba(255, 255, 255, 0.08)',
    borderHover: '1px solid rgba(245, 158, 11, 0.3)',
    borderFocus: '1px solid rgba(245, 158, 11, 0.5)',
    boxShadowFocus: '0 0 15px rgba(245, 158, 11, 0.3)',
  },

  Button: {
    color: 'rgba(255, 255, 255, 0.03)',
    colorHover: 'rgba(245, 158, 11, 0.1)',
    border: '1px solid rgba(255, 255, 255, 0.08)',
    borderHover: '1px solid rgba(245, 158, 11, 0.3)',
  },
};
