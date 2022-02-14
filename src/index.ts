import dotenv from 'dotenv';
dotenv.config();
import { app } from './app';
import http from 'http';

// Configuration and setting up the server
let port = ["development", "test"].includes(`${process.env.NODE_ENV}`) ? 3000 : 8080;
export const server = http.createServer(app);

server.listen(process.env.PORT || port, () => {
    console.log(`Server is running on port http://localhost:${process.env.PORT || port}`);
});
