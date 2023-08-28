// src/app/api/jsonResponse/route.js

export default function handler(req, res) {
    const responseData = {
      message: 'Welcome to our API!',
      version: '1.0',
    };
  
    res.status(200).json(responseData);
}