console.log("Starting app.js"); 

const fs = require('fs'); 
const os = require('os'); 
const notes = require('./notes.js'); 

var sum = notes.add(2, 3); 
console.log(sum); 

/* var user = os.userInfo(); 
 
fs.appendFile('greetings.txt', `Hello ${user.username}! You are ${notes.age}.`, (err) => {
    if (err) {
        console.log('Unable to write to file'); 
    }
}) */