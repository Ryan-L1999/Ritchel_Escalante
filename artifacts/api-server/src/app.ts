import express, { type Express } from "express";
import cors from "cors";
import { pinoHttp, type HttpContext } from "pino-http"; // Added { pinoHttp } and HttpContext
import router from "./routes";
import { logger } from "./lib/logger";

const app: Express = express();

app.use(
  pinoHttp({
    logger,
    serializers: {
      // Added types to req and res to fix TS7006
      req(req: HttpContext["req"]) {
        return {
          id: req.id,
          method: req.method,
          url: req.url?.split("?")[0],
        };
      },
      res(res: HttpContext["res"]) {
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