import axios from "axios";
import { Request, Response } from "express";
import { Make } from "../models/make.model";

export const getMakes = async (req: Request, res: Response) => {
    try {
        const makes: Make[] = await axios.get('https://vpic.nhtsa.dot.gov/api/vehicles/getallmakes?format=json')
            .then(response => { return response.data.Results.map((make: any) => { return make.Make_Name }) });
        res.status(200).json({ makes: makes });
    }
    catch (error: any) {
        res.status(500).json({
            error: {
                message: error.message,
            },
        });
    }
}