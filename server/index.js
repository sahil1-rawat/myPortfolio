import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import portfolioRouter from './Routes/PortfolioRouter.js';
dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());
app.use('/api/v1/portfolio', portfolioRouter);
const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});
