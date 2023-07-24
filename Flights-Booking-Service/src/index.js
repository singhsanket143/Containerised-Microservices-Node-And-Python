const express = require('express');

const { ServerConfig, Queue } = require('./config');
const apiRoutes = require('./routes');
const CRON = require('./utils/common/cron-jobs');

const axios = require('axios');

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use('/api', apiRoutes);
app.use('/bookingService/api', apiRoutes);

app.get('/callingPythonservice', async (req, res) => {
    const response = await axios.get('https://flights_service:3000/api/v1/info');
    console.log(response)
    return res.json({message: response.data});
})

app.listen(ServerConfig.PORT, async () => {
    console.log(`Successfully started the server on PORT : ${ServerConfig.PORT}`);
    CRON();
    await Queue.connectQueue();
    console.log("queue connected")
});
