# Bookframe

Bookframe speeds up the development cycle of [bookmarklets](https://wikipedia.org/wiki/Bookmarklet) by providing hot reload, a standard library, and an install page generator.

Built with Bun, Bookframe is a new take on the classic bookmarklet development process.

### Usage

#### Development

You're building a new bookmarklet and want to see your changes everytime you press the bookmark. Bookframe provides a development server that automatically ships the latest built and minified code to your browser.

1. Create a new JavaScript (or TypeScript) file: `echo 'alert("Hello, world!")' >> bookmarklet.ts`
2. Run the Bookframe development server with your code: `bunx bookframe dev bookmarklet.ts`
3. Open `http://localhost:3000/install` in your browser to get the hot reload bookmarklet.
4. Click your bookmarklet and watch each run use your latest code.

note: some websites CSP policies may prevent the use of the hot reload bookmarklet. In this case, you can use the standalone bookmarklet output.

#### Production

You've built a bookmarklet and are ready to ship it. Bookframe supports three methods of distributing your bookmarklet:

1. Standalone code output: `bunx bookframe build bookmarklet.ts`. By default `./dist/bookmarklet.min.js` will be created.
2. Installer page output: `bunx bookframe build bookmarklet.ts --installer`. By default `./dist/installer.html` will be created.
3. Embeddable button output: `bunx bookframe build bookmarklet.ts --button`. By default `./dist/button.html` will be created.

#### standard lib

- [] copy to clipboard
- [] toast - time configurable, position configurable

- [] confirm <- use `window.confirm` instead, or maybe some prettier thing that won't lose focus on the page?
- [] prompt <- use `window.prompt` instead
- [] alert <- use `window.alert` instead


### Motivation

I write a handful of bookmarklets at my job but find the development process subpar.

You make a fix, copy the entire thing, paste it in the bookmarklet, realize it isn't URL encoded, go back, URL encode it, copy it, paste it in the bookmarklet, and then test it.

I want to streamline this by building on top of https://github.com/chriszarate/bookmarkleter which does a great job at minification and URL encoding.

But it doesn't address my core issue of poor dev experience building these.

Additionally, how many times have you copy pasted the same code in each bookmarklet? Why can't we have nice things and a simple standard lib of toasts, copy to clipboard, etc? Why doesn't that tree shake out the unused code? Lets try to do that. 

Create minimal bookmarklets but in the modern era.


### ideas

How can I make hot reload work when I press the dev-mode bookmark?
2. standard lib - a collection of common functions that you can use in your bookmarklets. No need to copy paste the same code over and over again.
