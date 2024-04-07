import { TinyColor } from '@ctrl/tinycolor'

const getColorMap = (color: string, alphaList: number[]) => {
  const colorMap = {
    DEFAULT: color,
  } as Record<string, string>

  alphaList.forEach((alpha) => {
    colorMap[alpha] = new TinyColor(color).setAlpha(alpha / 100).toRgbString()
  })

  return colorMap
}

export default {
  colors: {
    border: 'hsl(var(--border))',
    input: 'hsl(var(--input))',
    ring: 'hsl(var(--ring))',
    background: 'hsl(var(--background))',
    foreground: 'hsl(var(--foreground))',
    primary: {
      DEFAULT: 'hsl(var(--primary))',
      foreground: 'hsl(var(--primary-foreground))',
    },
    secondary: {
      DEFAULT: 'hsl(var(--secondary))',
      foreground: 'hsl(var(--secondary-foreground))',
    },
    destructive: {
      DEFAULT: 'hsl(var(--destructive))',
      foreground: 'hsl(var(--destructive-foreground))',
    },
    muted: {
      DEFAULT: 'hsl(var(--muted))',
      foreground: 'hsl(var(--muted-foreground))',
    },
    accent: {
      DEFAULT: 'hsl(var(--accent))',
      foreground: 'hsl(var(--accent-foreground))',
    },
    popover: {
      DEFAULT: 'hsl(var(--popover))',
      foreground: 'hsl(var(--popover-foreground))',
    },
    card: {
      DEFAULT: 'hsl(var(--card))',
      foreground: 'hsl(var(--card-foreground))',
    },
    transparent: 'transparent',
    current: 'currentColor',
    inherit: 'inherit',

    white: getColorMap('#FEFEFE', [80, 60, 50, 25]),

    black: getColorMap('#0D0D0D', [80, 50, 25]),

    blue: getColorMap('#0071E3', [80, 50, 25]),

    link: getColorMap('#0066CC', [80, 50, 25]),

    red: getColorMap('#EE4A4A', [80, 50, 25]),

    green: getColorMap('#029E78', [80, 50, 25]),

    neutral: {
      10: '#F9F9F9',
      20: '#F5F5F5',
      30: '#EDEDED',
      40: '#ccc',
      50: '#888',
      60: '#404040',
    },
  },
}
