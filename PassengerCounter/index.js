let count = 0;

function increment(){

    count += 1;
    document.getElementById("count-el").innerText = count;

}

function save(){

    let countSave = count + "-";
    document.getElementById("save-el").textContent += countSave;
    document.getElementById("count-el").textContent = 0;
    count = 0;

}
