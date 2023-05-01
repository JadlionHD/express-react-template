import express from "express";
import ratelimit from "express-rate-limit";
import { config as dotenv } from "dotenv";
import bodyParser from "body-parser";
import path from "path";

const limiter = (ms: number, max = 20) =>
  ratelimit({
    windowMs: ms,
    max, // Limit each IP to 100 requests per `window` (here, per 15 minutes)
    standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
    legacyHeaders: false // Disable the `X-RateLimit-*` headers
  });

const app = express();

app.use(bodyParser.json());
app.use("/", express.static(path.join(__dirname, "../..", "frontend", "dist")));

app.get("/api/hello", limiter(30 * 1000, 10), (req, res) => {
  res.json({ message: "hello world" });
});

app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "../..", "frontend", "dist", "index.html"));
});

app.listen(3000, () => {
  console.log("Express server ready! http://locahost:3000");
});
