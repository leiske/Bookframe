import {
  copyToClipboard,
  getCookieValue,
  toast,
} from 'bookframe/helpers';

function copyTokenBookmarklet() {
  const token = getCookieValue('token');
  if (!token) {
    toast('No token found!', { duration: 5000 });
    return;
  }

  copyToClipboard(token);
  toast('Copied token!');
}

copyTokenBookmarklet();
