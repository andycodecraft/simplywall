import React from 'react';

import { http, HttpResponse } from 'msw'
import { setupWorker } from 'msw/browser'
//import { setupServer } from 'msw/node'

const server = setupWorker(
  // Describe network behavior with request handlers.
  // Tip: move the handlers into their own module and
  // import it across your browser and Node.js setups!
  http.get('/posts', ({ request, params, cookies }) => {
    return HttpResponse.json([
      {
        id: 'f8dd058f-9006-4174-8d49-e3086bc39c21',
        title: `Avoid Nesting When You're Testing`,
      },
      {
        id: '8ac96078-6434-4959-80ed-cc834e7fef61',
        title: `How I Built A Modern Website In 2021`,
      },
    ])
  }),
)

export default server;