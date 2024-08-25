export function buildBookmarkletInstallPage(bookmarklet: string, hotReloadBookmarklet: string): string {
  return `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Bookmarklet Install</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            margin: 0;
            background-color: #f0f0f0;
        }

        .container {
            text-align: center;
            background-color: white;
            padding: 2rem;
            min-width: 60%;
            border-radius: 8px;
            box-shadow: 0 2px 4px rgba(0,0,0,0.1);
        }

        .bookmarklet {
            display: inline-block;
            padding: 10px 20px;
            background-color: #007bff;
            color: white;
            text-decoration: none;
            border-radius: 4px;
            font-weight: bold;
            cursor: move;
        }

        .instructions {
            margin-top: 1rem;
            font-size: 0.9rem;
            color: #666;
        }

        .raw-bookmarklet-container {
            display: flex;
            justify-content: center;
            position: relative;
            min-width: 60%;
            margin-left: auto;
            margin-right: auto;
        }

        #raw-bookmarklet {
            width: 100%;
            height: 150px;
            padding: 10px;
            padding-top: 30px; /* Extra padding at the top for the copy button */
            background-color: #f8f8f8;
            border: 1px solid #ddd;
            border-radius: 4px;
            font-family: monospace;
            font-size: 12px;
            resize: vertical;
            overflow: auto;
            white-space: pre-wrap;
            word-wrap: break-word;
            text-align: left;
        }

        .copy-icon {
            position: absolute;
            padding-top: 10px;
            top: 10px;
            right: 20px;
            cursor: pointer;
        }

        .raw-bookmarklet-header {
          margin: 0;
        }

.icon-button {
  background: none;
  border: none;
  cursor: pointer;
  padding: 8px;
}

.icon {
  width: 24px;
  height: 24px;
  fill: currentColor;
  transition: color 0.3s ease;
}

.icon-button:hover .icon {
  color: #007bff;
}

@keyframes checkmark {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.2);
  }
  100% {
    transform: scale(1);
  }
}

.animate-checkmark {
  animation: checkmark 0.5s ease-in-out;
}
</style>
</head>
<body>
    <div class="container">
        <h1>Install your bookmarklet</h1>
        <a href="${hotReloadBookmarklet}" class="bookmarklet" draggable="true">Dev (Hot reload)</a>
        <a href="${bookmarklet}" class="bookmarklet" draggable="true">Inlined Production</a>
        <p class="instructions">Drag a bookmark to your bookmarks bar and click it to run the code.</p>
        <p class="instructions">If a website blocks the hot reload due to Content Security Policies, use "Inlined Production" instead at the cost of no more hot reload.</p>

          <h3 class="raw-bookmarklet-header">Raw Bookmarklet Code:</h3>
          <div class="raw-bookmarklet-container">
<button id="copyButton" class="icon-button copy-icon">
  <svg id="buttonIcon" class="icon" viewBox="0 0 24 24">
    <path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"/>
  </svg>
</button>
              <pre id="raw-bookmarklet">${bookmarklet}</pre>
          </div>
    </div>
 <script>
document.addEventListener('DOMContentLoaded', () => {
  const copyButton = document.getElementById('copyButton');
  const buttonIcon = document.getElementById('buttonIcon');

  const copyPath = "M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z";
  const checkPath = "M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z";

  copyButton.addEventListener('click', () => {
    const textToCopy = 'This text will be copied to the clipboard';

    navigator.clipboard.writeText("${bookmarklet}").then(() => {
      buttonIcon.querySelector('path').setAttribute('d', checkPath);
      buttonIcon.classList.add('animate-checkmark');

      setTimeout(() => {
        buttonIcon.querySelector('path').setAttribute('d', copyPath);
        buttonIcon.classList.remove('animate-checkmark');
      }, 2000);
    }).catch(err => {
      console.error('Failed to copy: ', err);
    });
  });
});
</script>
</body>
</html>
`;
}
