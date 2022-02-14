import express, { Request, Response } from "express"
import { getMakesHandler } from "./controllers/make.controller"
import { getModelsHandler } from "./controllers/model.controller";
export const v1Routes = express.Router();

// Set up routes.

// Get makes by calling getMakesHandler.
v1Routes.get('/make', (req: Request, res: Response) => {
    getMakesHandler(req, res);
});

// Get models using make and year by calling getModelsForMakeHandler.
v1Routes.get('/model', (req: Request, res: Response) => {
    getModelsHandler(req, res);
});

v1Routes.get('/ping', (req: Request, res: Response) => {
    res.status(200).json({
        success: true,
        message: 'Hello there!'
    });
});