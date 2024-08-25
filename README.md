# Bookframe

Bookframe speeds up the development cycle of [bookmarklets](https://wikipedia.org/wiki/Bookmarklet) by providing hot reload, small helper functions, and an install page generator.

Built with Bun, Bookframe is a new take on the classic bookmarklet development process.

### Usage

#### Development

1. Create a new JavaScript (or TypeScript) file: `echo 'alert("Hello, world!")' >> bookmarklet.ts`
2. Run the Bookframe development server passing in your code: `bunx bookframe dev bookmarklet.ts`
3. Open `http://localhost:3000/install` in your browser to install the bookmarklet.
4. Click your bookmark and watch each run use your latest code.

note: some websites CSP policies may prevent the use of the hot reload bookmarklet. In this case, you can use the standalone bookmarklet output and update it as you make changes.

#### Production

Bookframe supports three methods of distributing your bookmarklet:

1. Standalone code output: `bunx bookframe build bookmarklet.ts`
    * good when you just want the dang thing in stdout
2. Installer page output: `bunx bookframe build bookmarklet.ts --installer`
    * good for hosting on a website for easy installation
3. Embeddable button output: `bunx bookframe build bookmarklet.ts --button`
    * good for sharing on a wiki page or in a README

### Included Helpers

For easier bookmarklet development, Bookframe includes a few helper functions.
I found these were the common tasks I was writing in my bookmarklets, so I included them in Bookframe.

Aren't using them? No worries - your bookmarklets won't be bloated with unused code.

#### `copyToClipboard`

```typescript
copyToClipboard('Hello, world!')
```

#### `toast`

```typescript
toast('Hello, world!')
```

#### `getCookieValue`

```typescript
const val = getCookieValue('cookieName');
```

#### `setCookieValue`

```typescript
setCookieValue('cookieName', 'cookieValue');
```
