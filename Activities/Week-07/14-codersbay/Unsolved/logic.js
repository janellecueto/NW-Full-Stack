// Initialize Firebase
// Make sure to match the configuration to the script version number in the HTML
// (Ex. 3.0 != 3.7.0)
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyDwouOEqxgIETN1qghJpPgVh9LISVONWlc",
    authDomain: "coderbay-ddeac.firebaseapp.com",
    databaseURL: "https://coderbay-ddeac.firebaseio.com",
    projectId: "coderbay-ddeac",
    storageBucket: "coderbay-ddeac.appspot.com",
    messagingSenderId: "584732258906",
    appId: "1:584732258906:web:f3ec2d641082fc81"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

// Assign the reference to the database to a variable named 'database'
// var database = ...
var database = firebase.database();

// Initial Values
var initialBid = 0;
var initialBidder = "No one :-(";
var highPrice = initialBid;
var highBidder = initialBidder;

// --------------------------------------------------------------

// At the initial load and subsequent value changes, get a snapshot of the stored data.
// This function allows you to update your page in real-time when the firebase database changes.
database.ref().on("value", function(snapshot) {

  // If Firebase has a highPrice and highBidder stored (first case)
  if (snapshot.child("highBidder").exists() && snapshot.child("highPrice").exists()) {

    // Set the variables for highBidder/highPrice equal to the stored values in firebase.
    // highPrice = ...
    // highBidder = ...
    highPrice = snapshot.val().highBidder;
    highBidder = snapshot.val().highBidder;


    // Change the HTML to reflect the stored values
    $("#highest-price").text(highPrice);
    $("#highest-bidder").text(highBidder);


    // Print the data to the console.


  }

  // Else Firebase doesn't have a highPrice/highBidder, so use the initial local values.
  else {

    // Change the HTML to reflect the initial values
    $("#highest-price").text(initialBid);
    $("#highest-bidder").text(initialBidder);

    // Print the data to the console.


  }


// If any errors are experienced, log them to console.
}, function(errorObject) {
  console.log("The read failed: " + errorObject.code);
});

// --------------------------------------------------------------

// Whenever a user clicks the submit-bid button
$("#submit-bid").on("click", function(event) {
  // Prevent form from submitting
  event.preventDefault();

  // Get the input values
  var bidderPrice = $("#bidder-price").val();
  var bidderName = $("#bidder-name").val();

  // Log the Bidder and Price (Even if not the highest)
  if (bidderPrice > highPrice) {

    // Alert
    alert("You are now the highest bidder.");

    // Save the new price in Firebase
    database.ref().set({
      highPrice: bidderPrice,
      highBidder: bidderName
    });

    // Log the new High Price


    // Store the new high price and bidder name as a local variable

    highPrice = bidderPrice;
    highBidder = bidderName;
    // Change the HTML to reflect the new high price and bidder
    $("#highest-price").text(bidderPrice);
    $("#highest-bidder").text(bidderName);

  }

  else {
    // Alert
    alert("Sorry that bid is too low. Try again.");
  }

});
