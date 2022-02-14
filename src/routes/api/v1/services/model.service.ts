import axios from "axios";
import { Request, Response } from "express";
import { Model, ModelResponse, ModelVINResponse } from "../models/model.model";

// Get the models using make and year.
export const getModelsForMakeYear = async (req: Request, res: Response, make: any, year: any) => {
    try {
        // Check if make and year are provided. If not return error.
        if (!make || !year)
            return res.status(400).json({
                error: {
                    message: "Make and year are required.",
                },
            });

        const response = await axios
            .get(`https://vpic.nhtsa.dot.gov/api/vehicles/getmodelsformakeyear/make/${make}/modelyear/${year}?format=json`);

        const models: Model[] = response.data.Results.map((model: ModelResponse) => {
            return { name: `${model.Make_Name} ${model.Model_Name}` }
        });
        res.json({ models });
    }
    catch (error: any) {
        res.status(500).json({
            error: {
                message: error.message,
            },
        });
    }
}

// Get the model using vin.
export const getModelForVin = async (req: Request, res: Response, vin: any) => {
    try {
        const response = await axios
            .get(`https://vpic.nhtsa.dot.gov/api/vehicles/decodevinvalues/${vin}?format=json`);

        const modelFromApi: ModelVINResponse = response.data.Results[0];
        const model: Model = {
            name: `${modelFromApi.ModelYear} ${modelFromApi.Make} ${modelFromApi.Model}`,
            make: modelFromApi.Make,
            model: modelFromApi.Model,
            modelYear: modelFromApi.ModelYear,
            vin: modelFromApi.VIN
        };
        res.json({ model: model });
    }
    catch (error: any) {
        res.status(500).json({
            error: {
                message: error.message,
            },
        });
    }
}