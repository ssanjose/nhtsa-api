import axios from "axios";
import { Request, Response } from "express";
import { Make } from "../models/make.model";

export const getMakes = async (req: Request, res: Response) => {
    try {
        const response = await axios.get('https://vpic.nhtsa.dot.gov/api/vehicles/getallmakes?format=json');
        // const response = await fetch('https://vpic.nhtsa.dot.gov/api/vehicles/getallmakes?format=json')
        // const result = await response.json();

        const makes: Make[] = response.data.Results.map((make: Make) => { return make.Make_Name });
        res.json({ makes: makes });
    }
    catch (error: any) {
        res.status(500).json({
            error: {
                message: error.message,
            },
        });
    }
}