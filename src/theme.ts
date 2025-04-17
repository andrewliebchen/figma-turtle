import type { Theme } from 'theme-ui'

export const theme: Theme = {
  colors: {
    text: '#000000',
    background: '#FFFFFF',
    primary: '#0066FF',
    secondary: '#6B7280',
    muted: '#F3F4F6',
    accent: '#F59E0B',
  },
  fonts: {
    body: '"Inclusive Sans", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif',
    heading: '"Inclusive Sans", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif',
    monospace: 'Menlo, monospace',
  },
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64],
  fontWeights: {
    body: 400,
    heading: 700,
    bold: 700,
  },
  lineHeights: {
    body: 1.5,
    heading: 1.125,
  },
  space: [0, 4, 8, 16, 24, 32, 48, 64, 96, 128],
  radii: {
    default: 4,
    large: 8,
  },
  buttons: {
    primary: {
      color: 'background',
      bg: 'primary',
      '&:hover': {
        bg: 'primary',
        opacity: 0.9,
      },
    },
    secondary: {
      color: 'text',
      bg: 'muted',
      '&:hover': {
        bg: 'muted',
        opacity: 0.9,
      },
    },
  },
  forms: {
    input: {
      border: '1px solid',
      borderColor: 'muted',
      borderRadius: 'default',
      p: 2,
      '&:focus': {
        outline: 'none',
        borderColor: 'primary',
      },
    },
  },
  styles: {
    root: {
      fontFamily: 'body',
    },
  },
} 