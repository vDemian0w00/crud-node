import express from "express";
import cors from "cors"
import { PORT } from "./config.js";
import {dirname, join} from 'path'
import {fileURLToPath} from 'url'

import indexRoutes from "./routes/index.routes.js";
import mainRoutes from "./routes/ghibli.routes.js";

const app = express();
const __dirname = dirname(fileURLToPath(import.meta.url))
console.log(join(__dirname, '../client/dist'));
app.use(cors({
    origin: 'http://localhost:5173'
}))
app.use(express.json())

app.use(indexRoutes, mainRoutes);
app.use(express.static(join(__dirname, '../client/dist')))
app.listen(PORT);
console.log(`Server ejecutandose en puerto: ${PORT}`);
