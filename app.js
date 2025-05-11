require("dotenv").config({ path: `${process.cwd()}/.env` });

const express = require("express");

const catchAsync = require("./utils/catchAsync");
const AppError = require('./utils/appError');
const globalErrorHandler = require("./controller/errorContoller");

const authRoute = require("./route/authRouter");
const projectRoute = require('./route/projectRoute');

const app = express();

app.use(express.json());

app.use(`/api/v1/auth`, authRoute);
app.use(`/api/v1/project`,projectRoute);

app.use(
  "/{*any}",
  catchAsync((req, res) => {
    throw new AppError('this is error', 404);
  })
);

app.use(globalErrorHandler);

const PORT = process.env.APP_PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server up and running :`, PORT);
});
