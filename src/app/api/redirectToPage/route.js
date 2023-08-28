// src/app/api/redirectToPage/route.js

import { NextResponse } from 'next/server';

export default function handler(req, res) {
  // Implement your redirection logic here
  return NextResponse.redirect('/newPage');
}