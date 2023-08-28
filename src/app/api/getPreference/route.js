// src/app/api/getPreference/route.js

import { parseCookies } from 'nookies';

export default function handler(req, res) {
  const cookies = parseCookies({ req });
  const userPreference = cookies.userPreference || 'No preference set';

  res.status(200).json({ preference: userPreference });
}