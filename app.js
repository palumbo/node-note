console.log("Starting app.js"); 

const fs = require('fs'); 
const os = require('os'); 
const _ = require('lodash'); 
const notes = require('./notes.js'); 

var filteredArray = _.uniq(["Joseph", 1, "Joseph", 1, 2, 3, 4]);
console.log(filteredArray); 

/* var sum = notes.add(2, 3); 
console.log(sum);  */

/* var user = os.userInfo(); 
 
fs.appendFile('greetings.txt', `Hello ${user.username}! You are ${notes.age}.`, (err) => {
    if (err) {
        console.log('Unable to write to file'); 
    }
}) */