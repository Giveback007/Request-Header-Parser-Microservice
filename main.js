"use strict";

let express = require('express');
let app = new express();

app.use(express.static('./'))

// --- API \/
app.get('/api/whoami', (req, res) => {
  // ---

  // ---
})
// --- API /\

app.listen(3000, () => {
  console.log("Listening");
});
