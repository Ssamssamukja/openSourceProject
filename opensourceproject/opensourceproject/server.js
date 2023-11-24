const express = require('express');
const axios = require('axios');

const app = express();
const port = process.env.PORT || 3004;

app.use('/', async (req, res) => {
  try {
    const response = await axios.get('http://openapi.1365.go.kr/openapi/service/rest/VolunteerPartcptnService/getVltrSearchWordList?numOfRows=10&pageNo=1');
    res.send(response.data);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

app.listen(port, () => {
  console.log(`Proxy server is running on port ${port}`);
});