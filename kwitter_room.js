
//ADD YOUR FIREBASE LINKS HERE
// Your web app's Firebase configuration
var firebaseConfig = {
      apiKey: "AIzaSyAOFk787FG4JJozrlPuAu6-BGg4Pwu9BGo",
      authDomain: "practice-test-fe000.firebaseapp.com",
      databaseURL: "https://practice-test-fe000-default-rtdb.firebaseio.com",
      projectId: "practice-test-fe000",
      storageBucket: "practice-test-fe000.appspot.com",
      messagingSenderId: "1094829184451",
      appId: "1:1094829184451:web:f81d029c7550b1b2565976"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML="Welcome " +user_name+"!";
function addRoom()
{
      room_name = document.getElementById("room_name").value;

      firebase.database().ref("/").child(room_name).update({
            purpose : "adding room name"
      });

      localStorage.setItem("room_name", room_name); 

      window.location = "kwitter_page.html";
}
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
  
      //End code
      });});}
getData();

function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}

function logout()
{
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}