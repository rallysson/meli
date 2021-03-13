const fetch = require("node-fetch");

async function genericRequest (url, data = {}) {
    console.log(url);
    return fetch(url, data).then(res => res.json());
}

function get (url) {
    return genericRequest(url);
}

module.exports = {
    get,
  };
  