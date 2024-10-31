# Nation Highway Traffic Safety Administration Backend API

A Backend API to retrieve vehicle information such as make, model, and year created, and relays that data to the user.

This API uses TypeScript and an Express Server to deliver its contents. The server is composed of different versions of API `/api/v1/path`...`api/v2/path` and fetches the make, model, and VIN data from the external NHTSA API (https://vpic.nhtsa.dot.gov/api/).

The API follows the Model-Service-Controller pattern and the routing is set on routes.ts for the api. The tests can be found on the each directory inside test folder.

See the API at https://nhtsa-api-18a13701853b.herokuapp.com/

Or download and use this application using `git clone https://github.com/ssanjose/nhtsa-api.git`

## API

API is separated to different versions: v1...vn. You can change the api version by replacing the version path in the URI `/api/v1/path` -> `/api/v2/path`.

## URIs include

- /api/v*/ping
- /api/v*/make
- /api/v*/model?make=...&year=...
- /api/v*/model?VIN=...

## Scripts
### `npm run dev`

Starts the server

### `npm test --api={versionNumber}`

Test between api versions
