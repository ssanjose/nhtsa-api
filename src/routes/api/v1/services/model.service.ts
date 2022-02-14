import axios from "axios";
import { Request, Response } from "express";
import { Model } from "../models/model.model";

export const getModelsForMakeYear = async (req: Request, res: Response) => {
    try {
        // Get make and year from req query string.
        const make = req.query.make;
        const year = req.query.year;

        // Check if make and year are provided. If not return error.
        if (!make || !year)
            return res.status(400).json({
                error: {
                    message: "Make and year are required.",
                },
            });

        const response = await axios
            .get(`https://vpic.nhtsa.dot.gov/api/vehicles/getmodelsformakeyear/make/${make}/modelyear/${year}?format=json`);

        const models: Model[] = response.data.Results.map((model: Model) => {
            return `${model.Make_Name} ${model.Model_Name}`
        });
        res.json({ model_names: models });
    }
    catch (error: any) {
        res.status(500).json({
            error: {
                message: error.message,
            },
        });
    }
}