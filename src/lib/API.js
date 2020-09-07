const proxy = 'https://cors-anywhere.herokuapp.com/';
const API_KEY = '422fd74c9da74422855a4e7e2cb2e483';
const WEATHER_API_URL = `${proxy}https://api.darksky.net/forecast/${API_KEY}/`;
const GEO_API_URL = `${proxy}https://darksky.net/geo?q=`;
const ADDRESS_API_URL = `${proxy}https://darksky.net/rgeo?hires=1`;

function getCoordinates(location) {
  return fetch(`${GEO_API_URL}${location}`)
    .then(response => response.json());
}

function getForecast(latitude, longitude) {
  return fetch(`${WEATHER_API_URL}${latitude},${longitude}`)
    .then(response => response.json());
}

function getAddress(latitude, longitude) {
  return fetch(`${ADDRESS_API_URL}&lat=${latitude}&lon=${longitude}`)
    .then(response => response.json());
}

function getEmbedURL(lat, lon) {
  return `https://maps.darksky.net/@emoji,${lat},${lon},11?domain=&quot;+encodeURIComponent(window.location.href)+&quot;&amp;auth=1552089016_3624c23c92e79156219d8144bcec3006&amp;embed=true&amp;timeControl=false&amp;fieldControl=false&amp;defaultField=emoji`;
}

export default {
  getAddress,
  getForecast,
  getCoordinates,
  getEmbedURL,
};
