# Nation Highway Traffic Safety Administration Backend API

A Backend API to retrieve vehicle information such as make, model, and year created, and relays that data to the user.

This API contains uses TypeScript and an Express Server to deliver its contents. The server is composed of different versions of API `/api/v1/path`...`api/v2/path` and caches the make, model, and VIN data fetched from the external NHTSA API (https://vpic.nhtsa.dot.gov/api/) every 10 minutes.

Download and use this application at using `git clone https://github.com/ssanjose/nhtsa-api.git`

## API

API is separated to different versions: v1...vn. You can change the api version by replacing the version path in the URI `/api/v1/path` -> `/api/v2/path`.

## URIs include

- /api/v*/alive
- /api/v*/make
- /api/v*/model?make=...&year=...
- /api/v*/model?VIN=...

## Scripts
### `npm start`

Starts the server

### `npm test --api={versionNumber}`

Test between api versions
