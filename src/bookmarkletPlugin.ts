import { plugin, type BunPlugin } from 'bun';

export const bookmarkletPlugin: BunPlugin = {
  name: 'Bookmarklet Builder',
  setup: (build) => {
    console.log({ build });
  },
};
