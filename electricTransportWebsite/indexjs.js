//Listeners for the arrow buttons on index page
document.getElementById("mainPageNext").addEventListener("click", nextPhoto);
document.getElementById("mainPageBack").addEventListener("click", backPhoto);

//Listeners for the drop down navigation list
document.getElementById("listItem3").addEventListener("mouseover", showList);
document.getElementById("listItem3").addEventListener("mouseleave", hideList);

//Functions for when arrows are clicked (index.html)
function nextPhoto(){
    document.getElementById("image1").style.backgroundImage = "url('images/outdoorImage2.jpg')";
    document.getElementById("image1Text").innerHTML = "<br><br>Getting you wherever you want to be <br> <br>Take a look around!<br> <br> We hope to see you in store.";
    document.getElementById("mainPageBack").style.display = "initial";
    document.getElementById("mainPageNext").style.display = "none";
    document.getElementById("image1Text").style.fontSize = "1em";
}
function backPhoto(){
    document.getElementById("image1").style.backgroundImage = "url('images/outdoorImage1.jpg')";
    document.getElementById("image1").style.gridArea = "1 / 1 / span 6 / span 15";
    document.getElementById("mainPageNext").style.display = "inherit";
    document.getElementById("mainPageNext").style.gridArea = "6 / 14 / span 1 / span 1";
    document.getElementById("image1Text").innerHTML = "<br>Welcome to Tauranga EPV <br><br><br><br> Your home for Electric Personal Vehicles<br>";
    document.getElementById("image1Text").style.fontSize = "1.5em";
    document.getElementById("mainPageBack").style.display = "none";
}

//Functions for drop down navigation
function showList(){
    document.getElementById("list").style.display = "inherit";
}
function hideList(){
    document.getElementById("list").style.display = "none";
}