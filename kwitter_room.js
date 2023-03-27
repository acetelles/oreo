var firebaseConfig = {
    apiKey: "AIzaSyA-j1pcWVe4JXzYNc80HVb4VHpR1ZdWolU",
    authDomain: "prueba-clase-9138b.firebaseapp.com",
    databaseURL: "https://prueba-clase-9138b-default-rtdb.firebaseio.com",
    projectId: "prueba-clase-9138b",
    storageBucket: "prueba-clase-9138b.appspot.com",
    messagingSenderId: "1015496112861",
    appId: "1:1015496112861:web:22dea809fe5cb9f567f934"
  };
  
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);

  user_name = localStorage.getItem("user_item");
  room_name = localStorage.getItem("roomName");  

  document.getElementById("userName").innerHTML = "¡Bienvenido " + user_name + "!";

  function addRoom(){
    room_name = document.getElementById("roomName").value;
    firebase.database().ref("/").child(room_name).update({
        purpose: "Agregando la sala"
    });

    localStorage.setItem("room_name", room_name);
    window.location("Kwitter_page.html")
    //local storage - nombre de la id q guarda la room, coma y el nombre de la variable d la room
    //window location. (lapagina)
  }


  function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey = childSnapshot.key;
    Room_names = childKey;
    //Inicia código, help xdd
    
    row = "<div class='room_name' id="> +Room_names+ " onclick ='redirectToRoomName(this.id)'>#" + Room_names + "</div><hr>";

    //Termina código
    });});}
    getData();

    function redirectToRoomName() 
    {
        document.getElementById("roomName").value = room_name;
        window.location = "index.html"
    }

    function deleteUser()
    {
        window.location("index.html");
    }





