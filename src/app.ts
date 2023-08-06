import express from 'express';
import { dbInit } from './database/Sequelize';
import { UserRouter } from './Routes/User';
import cors from 'cors'
import morgan from 'morgan'

const port = process.env.PORT || 9000;
const app = express();

app.use(
  cors({
    origin: '*',
  })
);

app
  .use(express.json())
  .use('/public', express.static('./public'))
  .use(morgan('dev'));

dbInit();

app.use('/user', UserRouter);

app.listen(port, () => {
  console.log(`Our server is running on port ${port}`);
});
