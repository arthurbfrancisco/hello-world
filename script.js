document.write( "Hello, welcome my name is Arthur and this is my blog! ");

function inviteUser() {
    let yourName = "";
    
    while (!yourName || !/^[a-zA-Z]+$/.test(yourName)) {
      yourName = prompt("Please enter a valid name (letters only)");
    }
    
    if (yourName.toLowerCase() === "mike") {
      document.getElementById("welcomeMessage").innerHTML = "Glad you made it to my blog, " + yourName + "!";
    } else {
      document.getElementById("welcomeMessage").innerHTML = "Welcome to my blog, " + yourName + "!";
    }
    
    return yourName;
  }

  function myNum() {
    let yourNum = parseInt(prompt("(How many trips have I taken this year?, between 0-4?)"));
    if (yourNum < 0 || yourNum > 4 || isNaN(yourNum)) {
      document.write("Please enter a valid number between 0 and 4.");
    } else if (yourNum !== 2) {
      document.write("Guess again!");
    } else {
      document.write("Yes, correct..!");
    }
    return yourNum;
  }

function imageCount() {
    let myImage = prompt("How many pics you want to see?");

    if (isNaN(myImage) || myImage <=0) {
        alert("Please enter a valid number greater than 0")
        return;
    }
    
    for (let i = 0; i < myImage; i++ ) {
        let umage = document.createElement("solo.img");
 }

 return myImage;
}
// Get the user star input

