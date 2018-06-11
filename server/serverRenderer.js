import React from 'react';
import Loadable from 'react-loadable';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import Core from '../client/pages/core/core';
import { configureStore } from '../client/store/store';

function renderHTML(html, preloadedState) {
  return `
      <!doctype html>
      <html>
        <head>
          <meta charset=utf-8>
          <title>React Task</title>
          <link rel="icon" type="image/gif/png" href="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png">
          ${process.env.NODE_ENV === 'development' ? '' : '<link href="/css/main.css" rel="stylesheet" type="text/css">'}
          <link rel="stylesheet" href="https://unpkg.com/bootstrap@4.0.0-alpha.5/dist/css/bootstrap.min.css">
        </head>
        <body>
          <div id="root">${html}</div>
          <script>
            // WARNING: See the following for security issues around embedding JSON in HTML:
            // http://redux.js.org/docs/recipes/ServerRendering.html#security-considerations
            window.PRELOADED_STATE = ${JSON.stringify(preloadedState).replace(/</g, '\\u003c')}
          </script>
          <script src="/js/main.js"></script>
        </body>
      </html>
  `;
}

export default function serverRenderer() {
  return (req, res) => {
    const store = configureStore();
    // This context object contains the results of the render
    const context = {};
    const modules = [];

    const root = (
      <Loadable.Capture report={m => modules.push(m)}>
        <Core
          context={context}
          location={req.url}
          Router={StaticRouter}
          store={store}
        />
      </Loadable.Capture>
    );

    store.runSaga().done.then(() => {
      const htmlString = renderToString(root);

      // context.url will contain the URL to redirect to if a <Redirect> was used
      if (context.url) {
        res.writeHead(302, {
          Location: context.url,
        });
        res.end();
        return;
      }

      const preloadedState = store.getState();

      res.send(renderHTML(htmlString, preloadedState));
    });

    // Do first render, starts initial actions.
    renderToString(root);
    // When the first render is finished, send the END action to redux-saga.
    store.close();
  };
}
