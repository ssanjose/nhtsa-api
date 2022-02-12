import express, { Request, Response } from 'express';
export const routes = express.Router();

routes.get('/test', (req: Request, res: Response) => {
    res.status(200).json({
        message: req.query['hello']
    });
});
routes.get('/alive', (req: Request, res: Response) => {
    res.status(200).json({
        success: true,
        message: 'Hello there!'
    });
});