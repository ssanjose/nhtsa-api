// Response from the model API.
export interface ModelResponse {
    Make_ID?: number;
    Model_ID?: number;
    Make_Name: string;
    Model_Name: string;
    Model_Year: number;
}

// Response from the VIN API.
export interface ModelVINResponse {
    VIN: string;
    Make: string;
    Model: string;
    ModelYear: number;
}

// Model object.
export interface Model {
    name: string;
    make?: string;
    model?: string;
    modelYear?: number;
    vin?: string;
}