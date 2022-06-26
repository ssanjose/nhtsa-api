import express, { NextFunction, Request, Response } from 'express';
import morgan from 'morgan';
import cors from 'cors';
import helmet from 'helmet';
import { routes } from './routes/routes';

export const app = express();

//  ----------------------------------------------------------------
//  ----------------    MIDDLEWARE
if (process.env.NODE_ENV === "development") app.use(morgan("dev"));
app.use(cors({
  origin: ["https://vpic.nhtsa.dot.gov", "http://localhost:3000", "http://localhost:3001", "https://nhtsa-web.herokuapp.com", "*"],
  methods: ["GET"],
  allowedHeaders: ["Content-Type", "Origin", "X-Requested-With", "Accept"],
}));
app.use(helmet());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//  ----------------------------------------------------------------
//  ----------------   ROUTES
app.use('/api', routes);

//  ----------------------------------------------------------------
//  ----------------   ERROR HANDLING REQUESTS
app.use((req: Request, res: Response, next: NextFunction) => {
  const error = new Error("Not found");
  next(error);
}, (error: Error, req: Request, res: Response, next: NextFunction) => {
  res.status(404).json({
    error: {
      message: error.message,
    },
  });
});
