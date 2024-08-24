# Unnamed Bookmarklet Project

### components

1. dev server - ships the minified, built code directly to your dev bookmarklet so you can skip the copy paste dance.
2. standard lib - a collection of common functions that you can use in your bookmarklets. No need to copy paste the same code over and over again.
3. pretty install page generation so end users can drag n drop the bookmarklet to their bookmarks bar.


#### standard lib

- [] copy to clipboard
- [] toast - time configurable, position configurable

- [] confirm <- use `window.confirm` instead
- [] prompt <- use `window.prompt` instead
- [] alert <- use `window.alert` instead


### Motivation

I write a handful of bookmarklets at my job but find the development process subpar.

You make a fix, copy the entire thing, paste it in the bookmarklet, realize it isn't URL encoded, go back, URL encode it, copy it, paste it in the bookmarklet, and then test it.

I want to streamline this by building on top of https://github.com/chriszarate/bookmarkleter which does a great job at minification and URL encoding.

But it doesn't address my core issue of poor dev experience building these.

Additionally, how many times have you copy pasted the same code in each bookmarklet? Why can't we have nice things and a simple standard lib of toasts, copy to clipboard, etc? Why doesn't that tree shake out the unused code? Lets try to do that. 

Create minimal bookmarklets but in the modern era.
