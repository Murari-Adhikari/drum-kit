// document.addEventListener("DOMContentLoaded", function(){
// const button = document.querySelectorAll(".drum");

// button.forEach(function (button){
//     button.addEventListener("click", function(){
//         alert("button checked");
//     });

// });
// });

//using for loop
document.addEventListener("DOMContentLoaded", function() {
const numberOfButtons = document.querySelectorAll(".drum").length;
const audioFiles = [
    'sounds/tom-1.mp3',
    'sounds/crash.mp3',
    'sounds/tom-2.mp3',
    'sounds/tom-3.mp3',
    'sounds/kick-bass.mp3',
    'sounds/tom-4.mp3',
    
]
for(let i= 0; i<numberOfButtons; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", function(){
        // alert("Button Click" );
        const audio = new Audio(audioFiles[i]);
        audio.play();
       this.style.color ="white";
       
    });
}
});
``