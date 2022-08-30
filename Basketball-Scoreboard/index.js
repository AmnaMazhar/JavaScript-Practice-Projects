let homeCount = 0;
let guestCount = 0;

let homeEl = document.getElementById("home");
let guestEl = document.getElementById("guest");

function homePlus1(){
    homeCount = homeCount + 1;
    homeEl.textContent = homeCount;

}

function homePlus2(){
    homeCount = homeCount + 2;
    homeEl.textContent = homeCount;

}

function homePlus3(){
    homeCount = homeCount + 3;
    homeEl.textContent = homeCount;
}

function guestPlus1(){
    guestCount = guestCount + 1;
    guestEl.textContent = guestCount;
}

function guestPlus2(){
    guestCount = guestCount + 2;
    guestEl.textContent = guestCount;
}

function guestPlus3(){
    guestCount = guestCount + 3;
    guestEl.textContent = guestCount;
}

function newGame(){
    homeEl.textContent = 0;
    homeCount = 0;

    guestEl.textContent = 0;
    guestCount = 0;
}
