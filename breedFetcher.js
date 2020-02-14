const request = require('request');

const fetchBreedDescription = function(breedName, callback) {
  const url = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;

  request(url, (error, response, body) => {
    if (response && response.statusCode === 200) {
      const data = JSON.parse(body);
      const breed = data[0];
      if (breed) {
        return callback(null, breed.description.trim());
      } else {
        return callback(null, "Breed not found!");
      }
    } return callback("There is a problem with your inputted URL!");
  });
};

module.exports = { fetchBreedDescription };