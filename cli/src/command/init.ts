import { Command } from "commander"
import { z } from "zod"
import path from "path"
import { existsSync } from "fs"

import { logger } from "../utils"

const initOptionsSchema = z.object({
  cwd: z.string(),
  yes: z.boolean(),
  defaults: z.boolean(),
})

export const init = new Command()
  .name("init")
  .description("initialize your project and install dependencies")
  .option("-y, --yes", "skip confirmation prompt.", false)
  .option("-d, --defaults,", "use default configuration.", false)
  .option(
    "-c, --cwd <cwd>",
    "the working directory. defaults to the current directory.",
    process.cwd(),
  )
  .action(async (opts) => {
    // Why do we need to use zod for conversion here?
    // Because commander only outputs boolean and string by default, but it cannot guarantee the correct type of user input,
    // so zod is used to ensure the correct type
    const options = initOptionsSchema.parse(opts)
    const cwd = path.resolve(options.cwd)

    if (!existsSync(cwd)) {
      logger.error(`The path ${cwd} does not exist. Please try again.`)
      process.exit(1)
    }

    // My main goal is to get users to use similar templates, and if there are really differences, you can also change your design yourself
  })
