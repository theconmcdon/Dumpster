import * as express from 'express';
import apiRouter from './routes';
import * as cors from 'cors';
import chirpsRouter from './routes/chirps'

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static('public'));
app.use("/api", apiRouter);
app.use("/api/chirps", chirpsRouter);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server running and listening on port: ${port}`));
