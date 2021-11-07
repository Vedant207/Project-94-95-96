var firebaseConfig = {
      apiKey: "AIzaSyDYH6XrIoAddGThCUwG9tVr_e8KBWGPOU8",
      authDomain: "kwitter-f8ab3.firebaseapp.com",
      databaseURL: "https://kwitter-f8ab3-default-rtdb.firebaseio.com",
      projectId: "kwitter-f8ab3",
      storageBucket: "kwitter-f8ab3.appspot.com",
      messagingSenderId: "701492803072",
      appId: "1:701492803072:web:63bdca8c4a7ae4208e8ae5"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    user_name = localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML=" Welcome " + user_name + "  ! ";

    function addRoom(){
          room_name = document.getElementById("room_name").value;
          firebase.database().ref("/").child(room_name).update({purpose:"adding room name"});
          localStorage.setItem("room_name",room_name);
          window.location="kwitter_page.html";
    }

function getData(){ 
firebase.database().ref("/").on('value', function(snapshot) 
{document.getElementById("output").innerHTML = "";
snapshot.forEach(function(childSnapshot) 
{childKey  = childSnapshot.key;
      Room_names = childKey;
       console.log("Room Name - "+Room_names);
       row = "<div class='room_name' id="+Room_names+"onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
       document.getElementById("output").innerHTML+=row;
      });});}
getData();

function redirectToRoomName(name){
      console.log(name);
      localStorage.setItem("room_name",name);
      window.location="kwitter_page.html";
}
function logOut(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      
}

