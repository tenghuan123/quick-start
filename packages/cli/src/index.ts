#!/usr/bin/env node
import { Command } from 'commander'

import { init, add, diff } from './command'
import { getPackageInfo } from './utils'

process.on('SIGINT', () => process.exit(0))
process.on('SIGTERM', () => process.exit(0))

async function main() {
  const packageInfo = getPackageInfo()

  const program = new Command()
    .name('quick-start')
    .description('add components and dependencies to your project')
    .version(
      packageInfo.version || '1.0.0',
      '-v, --version',
      'display the version number',
    )

  program.addCommand(init).addCommand(add).addCommand(diff)

  program.parse()
}

main()
