var firebase = firebaseConfig = {
  apiKey: "AIzaSyA-jwz4I47OuGgvk5F4zWOQxrTH994QP2A",
  authDomain: "talkbox-767a1.firebaseapp.com",
  databaseURL: "https://talkbox-767a1-default-rtdb.firebaseio.com",
  projectId: "talkbox-767a1",
  storageBucket: "talkbox-767a1.appspot.com",
  messagingSenderId: "12395404131",
  appId: "1:12395404131:web:2ebf2ad7590a2184121156",
  measurementId: "G-4FWYF59BZ7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

addUser()
{
  room_name = document.getElementById("roomname").value;
  firebase.database().ref("/").child(room_name).update({
    purpose: "Adding room name"
  });
  localStorage.setItem("room_name", room_name)
  window.location = "kwitter_page.html"
}

function getData() {
  firebase.database().ref("/").on('value', function (snapshot) {
    document.getElementById("output").innerHTML = ""; snapshot.forEach(function (childSnapshot) {
      childKey = childSnapshot.key;
      Room_names = childKey;
      //Start code
      console.log("room name" + Room_names)
      row = "<div class ='room_name' id =" + Room_names + " onclick ='redirectRoom(this.id)'>#" + Room_names + "</div><hr>"
      document.getElementById("output").innerHTML += row
      //End code
    });
  });
}

function getData() {firebase.database().ref("/").on('value',
function(snapshot) {document.getElementById("output").innerHTML =
"";snapshot.forEach(function(childSnapshot) {childKey = childSnapshot.key;
Room_names = childKey;
//Start code

//End code
});});}
getData();