/* wijzig achtergrondkleur*/
const changeBackground = document.querySelector("body");

const redBackground = document.querySelector (".makeRed");
const orangeBackground = document.querySelector (".makeOrange");
const yellowBackground = document.querySelector (".makeYellow");
const greenBackground = document.querySelector (".makeGreen");
const blueBackground = document.querySelector (".makeBlue");
const purpleBackground = document.querySelector (".makePurple");

const makeBRed = () => {
    changeBackground.classList.toggle("red");
    changeBackground.classList.remove ("orange", "yellow", "green", "blue", "purple");
    document.getElementById("color").innerHTML = "Red";
    btnRed.checked = true
};

redBackground.addEventListener("click", makeBRed);

const makeBOrange = () => {
    changeBackground.classList.toggle("orange");
    changeBackground.classList.remove ("red", "yellow", "green", "blue", "purple");
    document.getElementById("color").innerHTML = "Orange";
    btnOrange.checked = true
};

orangeBackground.addEventListener("click", makeBOrange);

const makeBYellow = () => {
    changeBackground.classList.toggle("yellow");
    changeBackground.classList.remove ("red", "orange", "green", "blue", "purple");
    document.getElementById("color").innerHTML = "Yellow";
    btnYellow.checked = true
};

yellowBackground.addEventListener("click", makeBYellow);

const makeBGreen = () => {
    changeBackground.classList.toggle("green");
    changeBackground.classList.remove ("red", "orange", "yellow", "blue", "purple");
    document.getElementById("color").innerHTML = "Green";
    btnGreen.checked = true
};

greenBackground.addEventListener("click", makeBGreen);

const makeBblue = () => {
    changeBackground.classList.toggle("blue");
    changeBackground.classList.remove ("red", "orange", "yellow", "green", "purple");
    document.getElementById("color").innerHTML = "Blue";
    btnBlue.checked = true
};

blueBackground.addEventListener("click", makeBblue);

const makeBPurple = () => {
    changeBackground.classList.toggle("purple");
    changeBackground.classList.remove ("red", "orange", "yellow", "green", "blue");
    document.getElementById("color").innerHTML = "Purple";
    btnPurple.checked = true
};

purpleBackground.addEventListener("click", makeBPurple);


/* verborgen menu*/
const hamburgerMenu = document.querySelector (".hamburgericon");
const hiddenMenu = document.querySelector (".menu");

const makeHidden = () => {
    // hiddenMenu.style.visibility = "hidden"; 
    document.getElementById("myNAV").style.animationName = "menu_off";
};
hiddenMenu.addEventListener("click", makeHidden);

const mouseVisible = () => {
    document.getElementById("myNAV").style.animationName = "menu_on"; 
    klik=0;    
};
hamburgerMenu.addEventListener("mouseover", mouseVisible);

const makeVisible = () => {
    // hiddenMenu.style.visibility = "visible";
    document.getElementById("myNAV").style.animationName = "menu_on"; 
    klik=1;
};
hamburgerMenu.addEventListener("click", makeVisible);


const mouseHidden = () => {
    if (klik==0){
        makeHidden()
    }
    else {
        makeVisible()
    }    
};
hamburgerMenu.addEventListener("mouseout", mouseHidden);


/* kleurenkiezen met nummer*/
function myFunction() {
    var x = document.getElementById("myInput").value;
    if (x==1){
        makeBRed()
    }
    if (x==2){
        makeBOrange()
    }
    if (x==3){
        makeBYellow()
    }
    if (x==4){
        makeBGreen()
    }
    if (x==5){
        makeBblue()
    }
    if (x==6){
        makeBPurple()
    }
  }
