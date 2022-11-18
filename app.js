const fs = require('fs');
const axios = require('axios');
const id = '861357159992504320'

async function getTweets() {
    try {
      const response = await axios.get(`https://api.twitter.com/2/users/:${id}/tweets`);
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  }
getTweets()