import express, { type Express } from "express";
import cors from "cors";
import * as pinoHttp from "pino-http"; // Changed to namespace import
import router from "./routes";
import { logger } from "./lib/logger";

const app: Express = express();

app.use(
  // Use .default if the namespace import doesn't work, 
  // or call it directly if it does. This handles both cases:
  (typeof pinoHttp === 'function' ? pinoHttp : (pinoHttp as any).default)({
    logger,
    serializers: {
      // Use "any" here as a fallback to satisfy TS7006 if HttpContext isn't exporting correctly
      req(req: any) { 
        return {
          id: req.id,
          method: req.method,
          url: req.url?.split("?")[0],
        };
      },
      res(res: any) {
        return {
          statusCode: res.statusCode,
        };
      },
    },
  }),
);

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", router);

export default app;