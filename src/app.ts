import express from 'express';
import morgan from 'morgan';
import dotenv from 'dotenv';
dotenv.config();

const app = express();

//  ----------------------------------------------------------------
//  ----------------    MIDDLEWARE
if (process.env.NODE_ENV === "development") app.use(morgan("dev"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//  ----------------------------------------------------------------
//  ----------------   ROUTES
app.get('/', (req, res) => {
    return res.send('Hello World!');
});

//  ----------------------------------------------------------------
//  ----------------   ERROR HANDLING REQUESTS
app.use((req, res, next) => {
    const error = new Error("Not found");
    next(error);
});

app.use((error: Error, req: any, res: any, next: any) => {
    res.status(500);
    res.json({
        error: {
            message: error.message,
        },
    });
});

app.listen(process.env.PORT || 3000, () => {
    console.log('Server is running on port http://localhost:3000');
});