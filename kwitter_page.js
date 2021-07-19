//YOUR FIREBASE LINKS
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
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
user_name = localStorage.getItem("user_name");
room_name = localStorage.getItem("room_name");

function send()
{
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0
      });

      document.getElementById("msg").value = "";
}
//End code
      } });  }); }
getData();
