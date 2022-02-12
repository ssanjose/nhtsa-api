import express from 'express';
import morgan from 'morgan';

export const app = express();

//  ----------------------------------------------------------------
//  ----------------    MIDDLEWARE
if (process.env.NODE_ENV === "development") app.use(morgan("dev"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//  ----------------------------------------------------------------
//  ----------------   ROUTES
app.get('/misc/alive', (req, res) => {
    res.status(200).json({ message: 'Hello there!' });
    return res.send();
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