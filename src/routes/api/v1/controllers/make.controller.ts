import { Request, Response } from "express";
import { getMakes } from "../services/make.service";

export const getMakesHandler = async (req: Request, res: Response) => {
    try {
        return await getMakes(req, res);
    } catch (error: any) {
        res.status(500).json({
            error: {
                message: error.message,
            },
        });
    }
}