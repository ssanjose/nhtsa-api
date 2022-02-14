import { Request, Response } from "express";
import { getModelsForMakeYear } from "../services/model.service";

export const getModelsHandler = async (req: Request, res: Response) => {
    try {
        return await getModelsForMakeYear(req, res);
    } catch (error: any) {
        res.status(500).json({
            error: {
                message: error.message,
            },
        });
    }
}