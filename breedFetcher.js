const request = require('request');
const args = process.argv.slice(2);
const breed = args[0];
const url = `https://api.thecatapi.com/v1/breeds/search?q=${breed}`;

request(url, (error, response, body) => {
  if (error) throw error;
  const data = JSON.parse(body);
  const breed = data[0];
  if (breed) {
    console.log(data[0].description);
  } else {
    console.log("You have not entered a valid breed of cat!");
  }
});