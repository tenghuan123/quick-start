import { Command } from "commander"

export const diff = new Command()
  .name("diff")
  .description("check for updates against the registry")
  .option("-y, --yes", "skip confirmation prompt.", false)
  .option("-d, --defaults,", "use default configuration.", false)
  .option(
    "-c, --cwd <cwd>",
    "the working directory. defaults to the current directory.",
    process.cwd(),
  )
  .action(async (opts) => {
    console.log(opts)
  })
