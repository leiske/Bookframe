// @ts-ignore
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

type BuildJSOptions = {
  entrypoint: string,
  minify?: boolean,
  urlencode?: boolean,
};

type BuildOptions = {
  entrypoint: string,
  installer?: boolean,
  button?: string,
  output?: string,
};

export async function buildBookmarklet({
  entrypoint,
  installer,
  button,
  output,
}: BuildOptions): Promise<string> {
  const bookmarklet = await buildBookmarkletJavascript({ entrypoint });

  if (!installer && !button) {
    // print the bookmarklet for redirection and otherwise return it
    return bookmarklet;
  }

  if (installer) {
    // generate the installer page
    // @TODO: implement an installer handlebars template that only would have the production build
    return bookmarklet;
  }

  if (button) {
    // generate the embeddable <a> tag
    // @TODO: attempt to read a package.json in the folder of the script otherwise default it
     const styles = `
      display: inline-block;
      padding: 10px 20px;
      background-color: #007bff;
      color: white;
      text-decoration: none;
      border-radius: 4px;
      font-weight: bold;
      cursor: move;
    `.replace(/\s+/g, ' ').trim(); // Compress whitespace
    const embeddableButton = `<a href="${bookmarklet}" style="${styles}" draggable="true" title="Drag this to your bookmark bar">Bookframe Bookmarklet</a>`;
    return embeddableButton;
  }

  return bookmarklet;
}

export async function buildBookmarkletJavascript({ entrypoint, minify = true, urlencode = true }: BuildJSOptions): Promise<string> {

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
