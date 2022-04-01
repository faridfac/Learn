// import fetch from 'node-fetch';
// import readline from 'readline-sync';

const fetch = require('node-fetch');
const readline = require("readline-sync");

const getUser = (username) => new Promise((resolve, reject) => {
    fetch(`https://api.github.com/users/${username}`, { 
        method: 'GET'
    })
    .then(res => res.json())
    .then(result => {
        resolve(result);
    })
    .catch(err => reject(err))
});

(async () => {
    try {
        const username = readline.question('Username Github : ')
        
        const users = await getUser(username)
        if(users.login === username){
          console.log(`Username : ${users.login}\nName : ${users.name}\nFollowers : ${users.followers}\nFollowing : ${users.following}`)
        } else {
          console.log('User not found')
        }
    } catch (e) {
        console.log(e)
    }
})();