// src/app/api/modifyHeader/route.js

import { NextResponse } from 'next/server';

export default function handler(req, res) {
  // Extract and modify the Authorization header
  const authHeader = req.headers.authorization;

  if (authHeader) {
    const token = authHeader.replace('Bearer ', '');
    const modifiedHeaders = { Authorization: `Bearer ${token}` };

    return NextResponse.next({ headers: modifiedHeaders });
  } else {
    res.status(401).end(); // Unauthorized
  }
}
