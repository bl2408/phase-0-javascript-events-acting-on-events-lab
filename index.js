// Your code here
const dodger = document.querySelector("div#dodger");
dodger.style.backgroundColor = "#FF69B4";
dodger.style.bottom = "0px";

document.addEventListener("keydown", (e)=>{
    switch(e.key){
        case "ArrowLeft":
            moveDodgerLeft();
        break;
        case "ArrowRight":
            moveDodgerRight();
        break;
    }

});

function moveDodgerLeft(){
    const left = parseStyle(dodger.style.left);
    if(left > 0){
        dodger.style.left = `${left - 1}px`;
    }
}

function moveDodgerRight(){
    const left = parseStyle(dodger.style.left);
    if(left < 360){
        dodger.style.left = `${left + 1}px`;
    }
}

function parseStyle(sty){
    const num = sty.replace("px", "");
    return parseInt(num, 10);
}