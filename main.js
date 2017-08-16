"use strict";

const express = require('express');
const app = new express();
const os = require('os');

app.use(express.static('./'))

// --- API \/
app.get('/api/whoami', (req, res) => {

  // ---
  function getOs(ua) {
    var idx1 = ua.indexOf('(') + 1;
    var idx2 = ua.indexOf(')');
    return ua.slice(idx1, idx2);
  }

  function parse(x) {
    var idx = x.indexOf(',');
    var parsed = x.slice(0, idx);
    if (idx === -1) {return x;}
    return parsed;
  }
  var obj = {};
  obj['user-ip'] = parse(req.headers['x-forwarded-for'] || req.ip);
  obj['user-lang'] = parse(req.headers["accept-language"]);
  obj['user-os'] = getOs(req.headers['user-agent']);

  res.json(obj)
  // ---
})
// --- API /\

app.listen(3000, () => {
  console.log("Listening");
});
