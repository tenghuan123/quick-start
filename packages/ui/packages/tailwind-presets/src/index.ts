import type { Config } from 'tailwindcss'
import { theme } from './theme'

export const dioaTWPresets = {
  content: [],
  theme: theme as unknown as Config['theme'],
} satisfies Config
