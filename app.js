require("dotenv").config({ path: `${process.cwd()}/.env` });

const express = require("express");

const authRoute = require("./route/authRouter");

const app = express();

app.use(`/api/v1/auth`, authRoute);

app.use('/{*any}', (req, res) => {
    res.status(404).json({
        status: 'failed',
        message: 'Route not found'
    })
})

const PORT = process.env.APP_PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server up and running :`, PORT);
});
