// main.js

var EventEmitter = require("events").EventEmitter;
var evt = new EventEmitter();

evt.on("helloNode", function(str) {
    console.log("Hello! " + str );
});

setTimeout(function() {
    evt.emit("helloNode", "Node.js");
    evt.removeAllListeners();

}, 1000);

setTimeout(function() {
    evt.emit("helloNode", "Node.js");
    evt.removeAllListeners();

}, 2000);
