
// Primera parte 

// document.getElementById("button1").addEventListener("click", loadCustomer);

// // Load Single Customer
// function loadCustomer(e) {
//   const xhr = new XMLHttpRequest();

//   xhr.open("GET", "customer.json", true);

//   xhr.onload = function() {
//     if (this.status === 200) {
//       //
//       // console.log(this.responseText)
//       //
//         const customer = JSON.parse(this.responseText);
//         const output = `
//         <ul>
//             <li> ID: ${customer.id} </li>
//             <li> Name: ${customer.name}</li>
//             <li> Company: ${customer.company}</li>
//             <li> Phone: ${customer.phone}</li>
//         </ul>
//         `;
        
//         document.getElementById("customer").innerHTML = output;
//         console.log(customer);
//     }
// }
// xhr.send();
// }

// // //
// // // SECOND PART OF THE EXERCISE --
// // //

// //
// document.getElementById("button2").addEventListener("click", loadListOfClients);
// function loadListOfClients(e) {
//   const xhr = new XMLHttpRequest();
//   xhr.open("GET", "listOfCustomers.json", true);
//   xhr.onload = function() {
//     if (this.status === 200) {
//       let listOfcustomers = JSON.parse(this.responseText);
//       let output = "";
//       listOfcustomers.forEach(function(customer) {
//         output += `
//                     <ul>
//                         <li> ID: ${customer.id} </li>
//                         <li> Name: ${customer.name}</li>
//                         <li> Company: ${customer.company}</li>
//                         <li> Phone: ${customer.phone}</li>
//                     </ul>
//                     `;
//         document.getElementById("list-of-customers").innerHTML = output;
//       });
//     }
//   };
//   xhr.send();
// }
  
// // Chuck Norris Jokes

// // API URL
// urlAPI = "https://api.icndb.com/jokes/random";

// // Grab the button
// document.querySelector(".get-jokes").addEventListener("click", getJokes);

// function getJokes(e) {
//   const number = document.querySelector("input[type=number]").value;
//   if(number === ""){
//     alert("Empty field!");
//     return;
//   }

//   else if(number <= -1) {
//     alert("Enter a valid number!");
//     return;  
//   }

//   const xhr = new XMLHttpRequest();

//   url = `${urlAPI}/${number}`;

//   xhr.open("GET", url, true);

//   //Validates HTTP Response
//   xhr.onload = function() {
//     if (this.status === 200) {
//       const response = JSON.parse(this.responseText);
//       console.log(this.responseText);

//       //UNCOMMENT TO SHOW JOKES IN WEB PAGE
//       let output = "";

//       if (response.type === "success") {
//         response.value.forEach(function(joke) {
//           output += `<li>${joke.joke}</li>`;
//         });
//       } else {
//         output += `<li> Something Went Wrong!</li>`;
//       }
//       document.querySelector(".jokes").innerHTML = output;
//     }
//   };

//   xhr.send();

//   e.preventDefault();
// }

// // Callback exercise 

// const myTweets = [
//     {
//       id: "101",
//       account: "@LinusTorvald",
//       body:
//         "I've never told anyone this, but Tux is actually just a cat in a penguin costume",
//       replays: 1,
//       retweets: 120,
//       likes: 3432
//     },
//     {
//       id: "102",
//       account: "@LinusTorvald",
//       body:
//         "Steve Jobs thought that eating organic foods stopped you from swating, and therefore never had a shower. He was wrong. No wonder Apple products stink",
//       replays: 9,
//       retweets: 1100,
//       likes: 2100
//     },
//     {
//       id: "103",
//       account: "@LinusTorvald",
//       body:
//         "The fact I have got just under 400 followers in a week just confirms the theory that people love Linux, I guess",
//       replays: 0,
//       retweets: 102,
//       likes: 33320
//     }
//   ];

//   tweet104 = {
//     id: "104",
//     account: "@LinusTorvald",
//     body:
//       "'Linux in the cloud' yet the cloud itself is running on Linux. Linuxception",
//     replays: 1,
//     retweets: 100,
//     likes: 300
//   };
  
//   tweet105 = {
//     id: "105",
//     account: "@LinusTorvald",
//     body:
//       "You guys rdemember that time when Microsoft tried to contribute to the Linux kernel but got denied because their code wasn't good enough? Good times",
//     replays: 112,
//     retweets: 892,
//     likes: 32123
//   };

// //   function createTweet(newTweet) {
// //     setTimeout(function() {
// //       myTweets.push(newTweet);
// //     }, 2000);
// //   }
  
//   function showTweets() {
//     let output = "";
//     myTweets.forEach(function(tweet) {
//       output += `<li>${tweet.id} ${tweet.account} ${tweet.body}<li>`;
//     });
//     document.body.innerHTML = output;
// }

// // createTweet(tweet104);
// // showTweets();
  
// // with callback
// ///* WITH CALLBACK
// function createTweet(newTweet, callback) {
//   setTimeout(function() {
//     myTweets.push(newTweet);
//     callback();
//   }, 2000);
// }

// createTweet(tweet104, showTweets);


// // Use easyHTTP library
// const http = new easyHTTP();
// url = "https://jsonplaceholder.typicode.com/posts";

// // Get posts

// //// Third - with callback (OK)

// const response = http.get(url, function(result) {
//   console.log(result);
// });

// Create object http from easyHTTP library

const http = new easyHTTP();


// Get Multiple Results
url = "https://jsonplaceholder.typicode.com/posts/1";
http.get(url, function(error, result) {
  if (error) {
    console.log(error);
  } else {
    console.log(result);
  }
});

// // Get a Single Post
// url = "https://jsonplaceholder.typicode.com/posts/1";
// http.get(url, function (error, result) {
//   if (error) {
//     console.log(error);
//   } else {
//     console.log(result);
//   }
// });

// // Make  a POST request
// url = "https://jsonplaceholder.typicode.com/posts";
// const data = {
//   title: "this is a nice post",
//   body: "this is a nice body"
// };
// http.post(url, data, function(error, result) {
//   if (error) {
//     console.log(error);
//   } else {
//     console.log(result);
//   }
// });

// // Make  a PUT request

// http.put(url, data, function(error, result) {
//   if (error) {
//     console.log(error);
//   } else {
//     console.log(result);
//   }
// });

// // MAKE a DELETE REQUEST
// const url = "https://jsonplaceholder.typicode.com/posts/1";
// http.delete(url, function(error, result) {
//   if (error) {
//     console.log(error);
//   } else {
//     console.log(result);
//   }
// });
