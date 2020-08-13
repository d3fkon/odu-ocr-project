const express = require('express');
const app = express();
const ocrRouter = require('./app/routes/ocr')


app.use('/ocr', ocrRouter)


app.listen(process.env.PORT, () => console.log(`Listening on http:localhost:${process.env.PORT}`))