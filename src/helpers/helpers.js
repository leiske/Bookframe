export function copyToClipboard(text) {
  navigator.clipboard.writeText(text);
}

/**
 * Show a toast message
 * @param {string} message - The message to display
 * @param {object} options - Additional options
 * @param {string} options.position - The position of the toast message
 * @returns {void}
 * @example
 * toast('Hello, world!');
 * toast('Hello, world!', { position: 'bottom-right' });
 */
export function toast(message, options) {
  const {
    position = 'top-center',
  } = options || {};

  const toast = document.createElement('div');
  toast.textContent = message;

  toast.style.position = 'fixed';
  toast.style.backgroundColor = '#333';
  toast.style.color = '#fff';
  toast.style.padding = '16px 20px';
  toast.style.borderRadius = '5px';
  toast.style.opacity = '0';
  toast.style.transition = 'opacity 0.5s ease';

  switch (position) {
    case 'top-left':
      toast.style.top = '20px';
      toast.style.left = '20px';
      toast.style.transform = 'none';
      break;
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
    case 'left-center':
      toast.style.top = '50%';
      toast.style.left = '20px';
      toast.style.transform = 'translateY(-50%)';
      break;
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
  }, 2500);
}
