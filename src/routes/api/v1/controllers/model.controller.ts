import { Request, Response } from "express";
import { getModelForVin, getModelsForMakeYear } from "../services/model.service";

export const getModelsHandler = async (req: Request, res: Response) => {
    try {
        // Get make and year from req query string.
        const make = req.query.make;
        const year = req.query.year;
        const vin = req.query.vin;

        // Check if vin is provided. If it is, get the model for the vin using getModelForVin.
        if (vin)
            return await getModelForVin(req, res, vin);
        else if (!!make && !!year)
            return await getModelsForMakeYear(req, res, make, year);
        // else reroute to the error page.
        else throw new Error("Invalid request.");

    } catch (error: any) {
        res.status(500).json({
            error: {
                message: error.message,
            },
        });
    }
}