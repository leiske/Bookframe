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
            right: 10px;
            cursor: pointer;
        }
        .raw-bookmarklet-header {
          margin: 0;
        }
</style>
</head>
<body>
    <div class="container">
        <h1>Install your bookmarklet</h1>
        <a href="${hotReloadBookmarklet}" class="bookmarklet" draggable="true">Dev (Hot reload)</a>
        <a href="${bookmarklet}" class="bookmarklet" draggable="true">Inlined Production</a>
        <p class="instructions">Drag a bookmark to your bookmarks bar and click it to run the code.</p>

          <h3 class="raw-bookmarklet-header">Raw Bookmarklet Code:</h3>
          <div class="raw-bookmarklet-container">
              <span class="copy-icon" title="Copy Code">📋</span>
              <pre id="raw-bookmarklet">${bookmarklet}</pre>
          </div>
    </div>
</body>
</html>
`;
}
