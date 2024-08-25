import chalk from 'chalk';
import open from 'open';
import { buildBookmarkletInstallPage } from './bookmarkletInstallPage';
import {
  buildBookmarklet,
  buildDevBookmarklet,
} from './build';

const INSTALLER_ROUTE = '/hotreload';
const BOOKMARKLET_ROUTE = '/bookmarklet';

async function getInstallPage({ entrypoint, port }: { entrypoint: string, port: number }) {
  return new Response(buildBookmarkletInstallPage(
    await buildBookmarklet({ entrypoint }),
    await buildDevBookmarklet({ port }),
  ), {
      headers: {
        "Content-Type": "text/html",
      },
    });
}

type BookframeDevServerOptions = {
  entrypoint: string,
  port: number,
  installer: boolean,
};

export function runDevServer({ entrypoint, port, installer: openInstallerOnStart }: BookframeDevServerOptions) {

  const installerUrl = `http://localhost:${port}${INSTALLER_ROUTE}`;

  if (openInstallerOnStart) {
    console.info(chalk.blue(`Opening installer at ${chalk.green(installerUrl)}`));
    open(installerUrl);
  } else {
      console.info(chalk.blue(`Visit ${chalk.green(installerUrl)} to get started.`));
  }

  Bun.serve({
    port,
    async fetch(req, res) {
      const url = new URL(req.url);

      switch(url.pathname) {
        case INSTALLER_ROUTE:
          return await getInstallPage({ entrypoint, port });

        case BOOKMARKLET_ROUTE:
          // this gets fed to a script tag so do not url encode
          return new Response(await buildBookmarklet({ entrypoint, urlencode: false }));

        default:
          return new Response('Not found', { status: 404 });
      }
    },
  });
}
