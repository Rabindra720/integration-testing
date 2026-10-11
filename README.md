# Hex-to-RGB REST API

Small Express API and test suite for converting six-digit hexadecimal colour values to RGB.

## Requirements
- Node.js 18 or newer

## Install and run
```bash
npm install
npm test
npm start
```

API example: `GET http://localhost:3000/api/hex-to-rgb?hex=%23FF8800`

Expected response:
```json
{"hex":"#FF8800","rgb":{"r":255,"g":136,"b":0}}
```

Invalid or missing input returns HTTP 400 with an `error` field. Accepted input is six hexadecimal digits, with an optional leading `#`. Shorthand (for example `#F80`) and alpha channels are not supported.

## Tests
- `npm run test:unit` tests conversion behaviour and input validation in isolation.
- `npm run test:integration` tests the Express route, status codes and JSON response with Supertest.
- `npm test` runs both suites.

## Postman / cURL manual check
Start the server using `npm start`. In Postman, send a GET request to `http://localhost:3000/api/hex-to-rgb?hex=%23FF8800`. For a terminal check:
```bash
curl -i 'http://localhost:3000/api/hex-to-rgb?hex=%23FF8800'
```
Try invalid input too: `curl -i 'http://localhost:3000/api/hex-to-rgb?hex=oops'`.

