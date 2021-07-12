//YOUR FIREBASE LINKS
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
    user_name=localStorage.getItem("User_Name");
    room_name=localStorage.getItem("room_name");
    function send()
    {
    msg=document.getElementById("msg").value;
    firebase.database().ref(room_name).push({
     name:user_name,
     message:msg,
     like:0     
    });
    document.getElementById("msg").value="";      
    }
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
 
//End code
      } });  }); }
getData();
function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="index.html";
      }
