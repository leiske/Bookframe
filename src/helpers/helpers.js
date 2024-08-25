/**
 * Copy the given text to the clipboard
 * @param {string} text - The text to copy
 * @returns {void}
 * @example
 * copyToClipboard('Hello, world!');
 */
export function copyToClipboard(text) {
  navigator.clipboard.writeText(text);
}

/**
 * Show a toast message
 * @param {string} message - The message to display
 * @param {string=} options.position - The position of the toast message
 * @param {number=} options.duration - The duration of the toast message
 * @returns {void}
 * @example
 * toast('Hello, world!');
 * toast('Hello, world!', { position: 'bottom-right', duration: 5000 });
 */
export function toast(message, options = {}) {
  const {
    position = 'top-center',
    duration = 2500,
  } = options;

  const toast = document.createElement('div');
  toast.textContent = message;

  toast.style.position = 'fixed';
  toast.style.backgroundColor = '#333';
  toast.style.color = '#fff';
  toast.style.padding = '16px 20px';
  toast.style.borderRadius = '5px';
  toast.style.opacity = '0';
  toast.style.transition = 'opacity 0.5s ease';
  toast.style.zIndex = '9999'; // I am the captain now

  switch (position) {
    case 'top-left':
      toast.style.top = '20px';
      toast.style.left = '20px';
      toast.style.transform = 'none';
      break;
    case 'top':
    case 'top-center':
      toast.style.top = '20px';
      toast.style.left = '50%';
      toast.style.transform = 'translateX(-50%)';
      break;
    case 'top-right':
      toast.style.top = '20px';
      toast.style.right = '20px';
      toast.style.transform = 'none';
      break;
    case 'bottom-left':
      toast.style.bottom = '20px';
      toast.style.left = '20px';
      toast.style.transform = 'none';
      break;
    case 'bottom':
    case 'bottom-center':
      toast.style.bottom = '20px';
      toast.style.left = '50%';
      toast.style.transform = 'translateX(-50%)';
      break;
    case 'bottom-right':
      toast.style.bottom = '20px';
      toast.style.right = '20px';
      toast.style.transform = 'none';
      break;
    case 'left':
    case 'left-center':
      toast.style.top = '50%';
      toast.style.left = '20px';
      toast.style.transform = 'translateY(-50%)';
      break;
    case 'right':
    case 'right-center':
      toast.style.top = '50%';
      toast.style.right = '20px';
      toast.style.transform = 'translateY(-50%)';
      break;
    default:
      toast.style.bottom = '20px';
      toast.style.left = '50%';
      toast.style.transform = 'translateX(-50%)';
      break;
  }

  document.body.appendChild(toast);

  requestAnimationFrame(() => toast.style.opacity = '1');

  setTimeout(() => {
    toast.style.opacity = '0';
    setTimeout(() => toast.remove(), 500);
  }, duration);
}


/**
 * Get the value of a cookie
 * @param {string} name - The name of the cookie
 * @returns {string} The value of the cookie
 * @example
 * getCookieValue('name');
 * @see https://developer.mozilla.org/en-US/docs/Web/API/Document/cookie#examples
 */
export function getCookieValue(name) {
  const cookieValue = document.cookie
    .split('; ')
    .find((row) => row.startsWith(`${name}=`))
    ?.split('=')[1];
  if (cookieValue === undefined || cookieValue === null) {
    return '';
  }
  return cookieValue;
}

/**
 * Set the value of a cookie
 * @param {string} name - The name of the cookie
 * @param {string} value - The value of the cookie
 * @param {number=} days - The number of days until the cookie expires
 * @returns {void}
 * @example
 * setCookieValue('name', 'value', 7);
 */
export function setCookieValue(name, value, days = 1) {
  const date = new Date();
  date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
  const expires = `expires=${date.toUTCString()}`;
  document.cookie = `${name}=${value};${expires};path=/`;
}
