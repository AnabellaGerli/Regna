// BUTTONS // 

var buttonAll = document.getElementById("all")
var buttonApp = document.getElementById("app")
var buttonCard = document.getElementById("card")
var buttonLogo = document.getElementById("logo")
var buttonWeb = document.getElementById("web")

// IMAGES //
var images = document.getElementsByClassName ("portfolio-images")
var imagesApp = document.getElementsByClassName ("app")
var imagesCard = document.getElementsByClassName("card")
var imagesLogo = document.getElementsByClassName("logo")
var imagesWeb = document.getElementsByClassName("web")


buttonAll.onclick = () => {
    for (var i=0; i<images.length; i++) {
        
        images[i].style.display ="block";
    }
}

buttonApp.onclick = () => {
    for (var i=0; i<images.length; i++) {
        images[i].style.display ="none"
    }

    for (var i=0; i<imagesApp.length; i++) {

        
        imagesApp[i].style.display= "block";
        
        
    }
}

buttonCard.onclick = () => {
    for (var i=0; i<images.length; i++) {
        images[i].style.display ="none"
    }

    for (var i=0; i<imagesApp.length; i++) {
        imagesCard[i].style.display= "block"
    }
}

buttonLogo.onclick = () => {
    for (var i=0; i<images.length; i++) {
        images[i].style.display ="none"
    }

    for (var i=0; i<imagesApp.length; i++) {
        imagesLogo[i].style.display= "block"
    }
}

buttonWeb.onclick = () => {
    for (var i=0; i<images.length; i++) {
        images[i].style.display ="none"
    }

    for (var i=0; i<imagesApp.length; i++) {
        imagesWeb[i].style.display= "block"
    }
}