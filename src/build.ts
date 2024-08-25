import bookmarkleter from 'bookmarkleter';
import { DEFAULT_PORT } from './constants';

export async function buildDevBookmarklet({ port = DEFAULT_PORT }): Promise<string> {
  const hotReloadBookmarklet = `
    function runRemoteBookmarklet() {
      const scriptId = 'remoteHotReloadBookmarklet';
      const existingScript = document.getElementById(scriptId);
      if (existingScript) {
        existingScript.remove();
      }

      const script = document.createElement('script');
      script.id = scriptId;
      script.src = 'http://localhost:${port}/bookmarklet';
      document.body.appendChild(script);
    }

    runRemoteBookmarklet();
  `;

  const finalBookmarklet = bookmarkleter(hotReloadBookmarklet, {
    iife: true,
    mangleVars: true,
  });

  return finalBookmarklet;
}

type BuildOptions = {
  entrypoint: string,
  minify?: boolean,
  urlencode?: boolean,
};

export async function buildBookmarklet({ entrypoint, minify = true, urlencode = true }: BuildOptions): Promise<string> {

  const builtBookmarklet = await Bun.build({
    entrypoints: [entrypoint],
    minify,
  });

  if (!builtBookmarklet.success) {
    builtBookmarklet.logs.forEach((log) => {
      console.error(log);
    });

    throw new Error('Build failed! See logs above for more information.');
  }

  const [output] = builtBookmarklet.outputs;
  if (!output) {
    builtBookmarklet.logs.forEach((log) => {
      console.error(log);
    });

    throw new Error('No output found in the build! See logs above for more information.');
  }

  const bundledBookmarklet = await output.text();

  const finalBookmarklet = bookmarkleter(bundledBookmarklet, {
    iife: true,
    mangleVars: minify,
    urlencode,
  });

  return finalBookmarklet;
}
