function addUser() 
{
    user_name = document.getElementById("user_item").value;

localStorage.setItem("user_item", user_name);

window.location = "kwitter_room.html"   
}
