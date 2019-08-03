var menu = document.getElementById('menu');
var nav = document.getElementById('nav');
var exit = document.getElementById('exit');

menu.addEventListener('click', function(e){
    nav.classList.toggle('hide-mobile');
    e.preventDefault();
});

exit.addEventListener('click', function(e){
    nav.classList.add('hide-mobile');
    e.preventDefault();
});


const colorchange = (element) =>  {
    var background = element.style.backgroundColor;
    if (background == "rgb(224, 97, 0)") {
    element.value="Mentor";      
    element.style.background = "";
    element.style.color = "black";
    } else {
      element.value="User";  element.style.background = "rgb(224, 97, 0)";
      element.style.color = "white";
    }

}
document.querySelectorAll('.select').forEach(element => {
    element.addEventListener('click', e => {
        colorchange(e.target);
    })
})


const colorchangeRequest = (element) => {
    var background = element.style.backgroundColor;
    if(background == "rgb(10, 134, 47)") {
        element.value = "Close mentorship session";
        element.style.background = "rgb(177, 3, 3)";
        element.style.color = "white";
    }else{
        element.value="Send mentorship session request";
        element.style.background = "rgb(10, 134, 47)";
        element.style.col = "white";
    }
}
document.querySelector('#session_request').addEventListener('click', e => {
    colorchangeRequest(e.target);
})

 function myFunction() {
     var popup = document.getElementById("myPopup");
     popup.classList.toggle("show");
}



// document.querySelector('#myPopup').addEventListener('click', e => {
//     element.classList.toggle(e.target);
// })