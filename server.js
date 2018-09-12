const fs = require('fs')
const express = require('express')

const index = fs.readFileSync('index.html', 'utf8')

const style = require('hsl-map-style').generateStyle({
  glyphsUrl: 'https://kartat.hsldev.com/',
  components: {
    text_fisv: { enabled: true },
    jore_terminals: { enabled: true },
    ticket_zones: { enabled: true },
    ticket_zone_labels: { enabled: true }
  }
})

const app = express()

app.get("/", function(req, res) {
  res.redirect("/index.html");
});

app.get("/index.html", function(req, res) {
  res.set("Content-Type", "text/html");
  res.send(index);
});

app.get("/style.json", function(req, res) {
  res.set("Content-Type", "application/json");
  res.send(style);
});

app.listen(3000, function() {
  console.log("Listening at localhost:3000");
});
