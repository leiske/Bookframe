#!/usr/bin/env bun

import yargs, { type Arguments, type Argv } from 'yargs';
import { hideBin } from 'yargs/helpers';
import { runDevServer } from './src/devServer';
import { DEFAULT_PORT } from './src/constants';
import { buildBookmarklet } from './src/build';

await yargs(hideBin(Bun.argv))
.command(
  'dev <entrypoint>',
  'Start the Bookframe development server',
  (yargs: Argv) => 
    yargs.positional('entrypoint', {
      describe: 'The entrypoint file',
      type: 'string',
      demandOption: true,
    })
    .option('port', {
      alias: 'p',
      type: 'number',
      description: 'The development server port',
      default: DEFAULT_PORT,
    })
    .option('installer', {
      type: 'boolean',
      description: 'Whether to open the installer page immediately',
      default: false,
    }),
  runDevServer,
)
.command(
  'build <entrypoint>',
  'Build the bookmarklet',
  (yargs: Argv) => 
    yargs.positional('entrypoint', {
      describe: 'The entrypoint file',
      type: 'string',
    })
    .option('output', {
      alias: 'o',
      type: 'string',
      description: 'Output file',
    })
    .option('installer', {
      type: 'boolean',
      description: 'Whether to generate an installer page instead of the raw bookmarklet',
      default: false,
    })
    .option('button', {
      type: 'boolean',
      description: 'Whether to generate an embeddable <a> tag for the bookmarklet',
      default: false,
    }) ,
  async (yargs: any) => {
    const out = await buildBookmarklet(yargs);
    console.log(out);
  },
)
.strictCommands()
.demandCommand(1)
.parse();
