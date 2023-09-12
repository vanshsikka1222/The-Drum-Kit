//Event Listner
//SYNTAX : target.addEventListener(typeOfEvent, listener/CallBack)
// document.querySelectorAll("button")[0].addEventListener("click",func);
// function func() {
//     alert("Clicked..!!");
// }

//Fact: Here function is called without "()" in Event Listener : func
// func() : Straight Away Function Call (Will get called immediately)

//OR
//Creating Anonymous Function..!!

// document.querySelectorAll("button")[6].addEventListener("click", 
// function () {
//     alert("Clicked..!!");
// });

//Assigning Sound to CLICK buttons..
var n = document.querySelectorAll(".drum").length;
for (var i = 0; i < n; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click",
    function () {
        var button = this.innerHTML;
        //Function call
        sound(button);
        buttonAnimation(button);
    });
}

//Assigning Sound to KEYBOARD buttons..
document.addEventListener("keydown", 
function(event) {
    //Function call
    sound(event.key);
    buttonAnimation(event.key);
});

//SOUND Function
function sound(key) {
    //Switch Case
    switch(key) {
        case 'w':
            var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
        break;

        case 'a':
            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
        break;

        case 's':
            var tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
        break;

        case 'd':
            var tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
        break;

        case 'j':
            var crash = new Audio("sounds/crash.mp3");
            crash.play();
        break;

        case 'k':
            var snare = new Audio("sounds/snare.mp3");
            snare.play();
        break;

        case 'l':
            var kickBass = new Audio("sounds/kick-bass.mp3");
            kickBass.play();
        break;

        default:
            console.log("Wrong Key Pressed, Please press w,a,s,d,j,k,l");
    }
}

//Button ANIMATION :
function buttonAnimation(currKey) {
    //Selecting class of particular button (.w, .a, .s _ _ _)
    var btn = document.querySelector("." + currKey);
    //CSS : pressed
    btn.classList.add("pressed");
    btn.classList.add("game-over")
    //Timeout feature to gain back its original state after sometime of clicked
    setTimeout(function() {
        btn.classList.remove("pressed");
        btn.classList.remove("game-over");
    }, 100)
}
//By Vansh Sikka