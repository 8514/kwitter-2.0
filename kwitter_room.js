
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyAdUorWXDAWWAnG2baIUA-dV_x7XhkXM8Q",
      authDomain: "kwitter-3a67d.firebaseapp.com",
      databaseURL: "https://kwitter-3a67d-default-rtdb.firebaseio.com",
      projectId: "kwitter-3a67d",
      storageBucket: "kwitter-3a67d.appspot.com",
      messagingSenderId: "385947870796",
      appId: "1:385947870796:web:3379a4566aa2cc5da5f6e9",
      measurementId: "G-RJDK2Z3ZFW"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    firebase.analytics();
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      row="<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+Room_names+"</div><hr>";
      document.getElementById("output").innerHTML+=row;
      //End code
      });});}
getData();
firebase.analytics();
function redirectToRoomName(name){
localStorage.setItem("room_name",name);
window.location="kwitter_page.html";
}