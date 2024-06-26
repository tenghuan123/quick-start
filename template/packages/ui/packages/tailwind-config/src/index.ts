import path from "path"
// import fs from 'fs'
import { dioaTWPresets } from "@repo-ui/tailwind-presets"
import plugins from "@repo-ui/tailwind-plugins"
import merge from "deepmerge"
import type { Config } from "tailwindcss"

export const tailwindBaseConfig: Config = {
  content: [],
  presets: [dioaTWPresets],

  plugins: [...plugins],
}

export type ExtendsTailwindConfigParams = {
  /**
   * Reference directory, usually write '__dirnames '
   */
  dirname: string
  config?: Config
}

/**
 * An in-memory representation of a package.json file.
 */
export interface PackageJSON {
  name: string
  version: string
  dependencies?: {
    [key: string]: string
  }
  peerDependencies?: {
    [key: string]: string
  }
  devDependencies?: {
    [key: string]: string
  }
}

// function getDirectories(p: string) {
//   return fs.readdirSync(p).filter(function (file: string) {
//     return fs.statSync(p + '/' + file).isDirectory()
//   })
// }

export const extendsTailwindConfig = (params: ExtendsTailwindConfigParams) => {
  const { dirname, config = {} } = params

  const dioaPkg = "@repo-ui/react"

  const content = [
    // By default, automatically find './src /**/*.{ js, ts, jsx, tsx} in the current directory.'
    path.join(dirname, "./src/**/*.{js,ts,jsx,tsx}"),
    path.join(dirname, "./app/**/*.{js,ts,jsx,tsx}"),
    path.join(path.dirname(require.resolve(dioaPkg)), "**/*.{js,ts,jsx,tsx}"),
  ]

  const mergeConfig = merge(
    {
      ...tailwindBaseConfig,
      content,
    },
    config,
  ) as Config

  return mergeConfig
}
