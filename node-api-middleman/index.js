const express = require('express');
const axios = require('axios');
const cron = require('node-cron');
const cors = require('cors');
 
const app = express();
const PORT = process.env.PORT || 3000;
const fs = require('fs');


app.use(cors());
  

let cachedData = null;
let apikeys;

fs.readFile('../apikeys.json', 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading JSON file:', err.message);
        return;
    }

    try {
        apikeys = JSON.parse(data);
        fetchData();
        //console.log('JavaScript object from JSON file:', apikeys);
    } catch (parseError) {
        console.error('Error parsing JSON:', parseError.message);
    }
});

// Function to fetch data from the external API
const fetchData = async () => {
    try {
        //const apiKey = 'YOUR_API_KEY'; // Replace with your actual API key

        const headers = {
            'DB-Client-Id': apikeys[1]['client-id'],
            'DB-Api-Key': apikeys[1]['api-key'],
            'accept': 'application/json'
        };
        const response = await axios.get('https://apis.deutschebahn.com/db-api-marketplace/apis/station-data/v2/stations', { headers });
        cachedData = response.data;
        console.log('Data fetched and cached:', cachedData["result"][0]);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
};
// Schedule the API call to run once per day
cron.schedule('0 0 * * *', fetchData);

// Endpoint to expose the cached data
app.get('/api/aktuelleBahnhoefe', (req, res) => {
    if (cachedData) {
        res.json(cachedData["result"]);
    } else {
        res.status(404).json({ message: 'Data not available yet.' });
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
