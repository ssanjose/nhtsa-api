import dotenv from 'dotenv';
dotenv.config();
import { app } from './app';
import http from 'http';

// Configuration and setting up the server
const port = process.env.NODE_ENV === ("development" || "test") ? 3000 : 8080;
const server = http.createServer(app);

server.listen(port, () => {
    console.log(`Server is running on port http://localhost:${port}`);
});
