import React from 'react';
import { renderToString } from 'react-dom/server';
//import Core from '../client/pages/core/core';

function renderHTML() {
  return `
      <!doctype html>
      <html>
        <head>
          <meta charset=utf-8>
          <title>React Server Side Rendering</title>
        </head>
        <body>
          <div id="root"></div>
          <script src="/js/main.js"></script>
        </body>
      </html>
  `;
}

export default function serverRenderer() {
  return (req, res) => {
    //const htmlString = renderToString(<Core />);

    res.send(renderHTML());
  };
}
