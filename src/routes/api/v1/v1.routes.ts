import express, { Request, Response } from "express"
import { getMakesHandler } from "./controllers/make.controller"
export const v1Routes = express.Router();

// Set up routes.
v1Routes.get('/getMakes', (req: Request, res: Response) => {
    getMakesHandler(req, res);
});

v1Routes.get('/ping', (req: Request, res: Response) => {
    res.status(200).json({
        success: true,
        message: 'Hello there!'
    });
});