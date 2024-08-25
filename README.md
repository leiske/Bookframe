# Bookframe

Bookframe speeds up the development cycle of [bookmarklets](https://wikipedia.org/wiki/Bookmarklet) by providing hot reload, small helper functions, and an install page generator.

Built with Bun, Bookframe is a new take on the classic bookmarklet development process.

### Usage

For now this is not published on NPM. I'll get around to it soon. 
Clone the repo and run `bun link`. Now you can run `bookframe` and can import it in your project.

<a href="javascript:void%20function(){function%20a(a){navigator.clipboard.writeText(a)}function%20b(a,b={}){const{position:c=%22top-center%22,duration:d=2500}=b,e=document.createElement(%22div%22);switch(e.textContent=a,e.style.position=%22fixed%22,e.style.backgroundColor=%22%23333%22,e.style.color=%22%23fff%22,e.style.padding=%2216px%2020px%22,e.style.borderRadius=%225px%22,e.style.opacity=%220%22,e.style.transition=%22opacity%200.5s%20ease%22,e.style.zIndex=%229999%22,c){case%22top-left%22:e.style.top=%2220px%22,e.style.left=%2220px%22,e.style.transform=%22none%22;break;case%22top%22:case%22top-center%22:e.style.top=%2220px%22,e.style.left=%2250%25%22,e.style.transform=%22translateX(-50%25)%22;break;case%22top-right%22:e.style.top=%2220px%22,e.style.right=%2220px%22,e.style.transform=%22none%22;break;case%22bottom-left%22:e.style.bottom=%2220px%22,e.style.left=%2220px%22,e.style.transform=%22none%22;break;case%22bottom%22:case%22bottom-center%22:e.style.bottom=%2220px%22,e.style.left=%2250%25%22,e.style.transform=%22translateX(-50%25)%22;break;case%22bottom-right%22:e.style.bottom=%2220px%22,e.style.right=%2220px%22,e.style.transform=%22none%22;break;case%22left%22:case%22left-center%22:e.style.top=%2250%25%22,e.style.left=%2220px%22,e.style.transform=%22translateY(-50%25)%22;break;case%22right%22:case%22right-center%22:e.style.top=%2250%25%22,e.style.right=%2220px%22,e.style.transform=%22translateY(-50%25)%22;break;default:e.style.bottom=%2220px%22,e.style.left=%2250%25%22,e.style.transform=%22translateX(-50%25)%22}document.body.appendChild(e),requestAnimationFrame(()=%3Ee.style.opacity=%221%22),setTimeout(()=%3E{e.style.opacity=%220%22,setTimeout(()=%3Ee.remove(),500)},d)}function%20c(a){const%20b=document.cookie.split(%22;%20%22).find(b=%3Eb.startsWith(`${a}=`))%3F.split(%22=%22)[1];return%20void%200===b||null===b%3F%22%22:b}(function(){const%20d=c(%22token%22);return%20d%3Fvoid(a(d),b(%22Copied%20token!%22)):void%20b(%22No%20token%20found!%22,{duration:5e3})})()}();" style="display: inline-block; padding: 10px 20px; background-color: #007bff; color: white; text-decoration: none; border-radius: 4px; font-weight: bold; cursor: move;" draggable="true" title="Drag this to your bookmark bar">Bookframe Bookmarklet</a>

#### Development

1. Create a new JavaScript (or TypeScript) file: `echo 'alert("Hello, world!")' >> bookmarklet.ts`
2. Run the Bookframe development server passing in your code: `bookframe dev bookmarklet.ts`
3. Open `http://localhost:3000/install` in your browser to install the bookmarklet.
4. Click your bookmark and watch each run use your latest code.

> [!NOTE]
> Some websites CSP policies may prevent the hot reload bookmarklet from fetching. In this case, you can use the standalone bookmarklet output and update it as you make changes.

#### Production

Bookframe supports three methods of distributing your bookmarklet:

1. Standalone code output: `bookframe build bookmarklet.ts`
    * good when you just want the dang thing in stdout
2. Installer page output: `bookframe build bookmarklet.ts --installer`
    * good for hosting on a website for easy installation
3. Embeddable button output: `bookframe build bookmarklet.ts --button`
    * good for sharing on a wiki page or in a README

### Included Helpers

For easier bookmarklet development, Bookframe includes a few helper functions.
I found these were the common tasks I was writing in my bookmarklets, so I included them in Bookframe.

Aren't using them? No worries - your bookmarklets won't be bloated with unused code.

#### `copyToClipboard`

```typescript
import { copyToClipboard } from 'bookframe/helpers';
copyToClipboard('Hello, world!')
```

#### `toast`

```typescript
import { toast } from 'bookframe/helpers';
toast('Hello, world!')
```

#### Cookies

```typescript
import { getCookieValue, setCookieValue } from 'bookframe/helpers';
const val = getCookieValue('oldCookie');
setCookieValue('newCookie', val, 2); // expires in 2 days
```
