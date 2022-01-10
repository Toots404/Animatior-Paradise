const firebaseConfig = {
  apiKey: "AIzaSyCRi0KvFlGWiecDW4TLa2Tw1gpCArIyaPs",
  authDomain: "animator-paradise.firebaseapp.com",
  databaseURL: "https://animator-paradise-default-rtdb.firebaseio.com",
  projectId: "animator-paradise",
  storageBucket: "animator-paradise.appspot.com",
  messagingSenderId: "617831423164",
  appId: "1:617831423164:web:921c9eb1fd4464e600c4b9",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name");

function getData() {
  firebase
    .database()
    .ref("/")
    .on("value", function (snapshot) {
      document.getElementById("output").innerHTML = "";
      snapshot.forEach(function (childSnapshot) {
        childKey = childSnapshot.key;
        Room_names = childKey;
        //Start code

        //End code
      });
    });
}
getData();
