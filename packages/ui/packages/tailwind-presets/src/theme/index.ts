import animation from './animation'
import color from './color'
import screens from './screens'
import borderRadius from './border'

export const theme = {
  corePlugins: {
    container: false,
  },
  borderRadius,
  screens,
  ...color,
  ...animation,
}
