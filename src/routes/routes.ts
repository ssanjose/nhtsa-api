import express, { Router } from 'express';
import { v1Routes } from './api/v1/v1.routes';
export const routes = express.Router();

const setRoutes = (app: Router) => {
    app.use('/v1', v1Routes);
}

setRoutes(routes);
