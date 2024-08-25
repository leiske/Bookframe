#!/usr/bin/env bun

import yargs, { type Arguments, type Argv } from 'yargs';
import { hideBin } from 'yargs/helpers';
import { runDevServer } from './src/devServer';
import { DEFAULT_PORT } from './src/constants';

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
  (yargs) => 
    yargs.positional('entrypoint', {
      describe: 'The entrypoint file',
      type: 'string',
    })
    .option('output', {
      alias: 'o',
      type: 'string',
      description: 'Output file',
    }),
  () => console.log('Hello world')
)
.strictCommands()
.demandCommand(1)
.parse();
