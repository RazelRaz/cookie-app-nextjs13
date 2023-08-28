// src/app/api/setPreference/route.js

import { setCookie } from 'nookies';

export default function handler(req, res) {
  if (req.method === 'POST') {
    const { preference } = req.body;

    setCookie({ res }, 'userPreference', preference, {
      maxAge: 30 * 24 * 60 * 60, // Cookie will expire in 30 days
      path: '/',
    });

    res.status(200).end();
  } else {
    res.status(405).end(); // Method Not Allowed
  }
}
