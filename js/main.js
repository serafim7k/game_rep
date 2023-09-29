const mario = document.getElementById("mario");
const tree = document.getElementById("tree");
const game = document.getElementsByClassName("game");

// (function () {
//     mario.style.width = "600px";
//     tree.style.width = "600px";
//     game[0].style.backgroundColor = "grey";
// }) ();


// function game_start() {
//     game[0].style.backgroundColor = "red";
//     mario.style.width = "300px";
//     tree.style.width = "400px";
// }

// document.getElementById("Game").addEventListener("click", game_start)



document.addEventListener("keydown", function(event){
    // console.log("");
    // console.log(event.key);
    // console.log(event.keyCode);
    // console.log(event.code);
    if (event.code == 'Space') {
        jump();
    }
}); 


function jump() {
    // mario.classList.add("jump");
    // mario.classList.remove("jump");
    if( mario.classList != "jump") {
        mario.classList.add("jump");
    }
    setTimeout( function(){
        mario.classList.remove("jump");
    }, 500)
}

let try_num = document.getElementById("try__num");
let tries = 1;

let isLive = setInterval( function(){
    let marioTop = parseInt(window.getComputedStyle(mario).getPropertyValue("top"));
    
    let treeLeft = parseInt(window.getComputedStyle(tree).getPropertyValue("left"));
    console.log(marioTop);
    // console.log(treeLeft);
    if (marioTop >= 200 && treeLeft < 290 && treeLeft > 150) {
        alert("Game Over");
        tree.style.right = "0px"
        tries++;
        try_num.innerHTML = tries;
    }
}, 100)





// (function () {
//     let tag_addr = document.getElementsByTagName("address");

//     // console.log(tag_addr);
//     tag_addr[0].style.color = "red";

//     tag_addr[1].style.fontSize = "35px";
// }) ();


// (function () {
//     let tag_title = document.getElementById("title");


//     tag_title.style.color = "green";
//     tag_title.style.fontSize = "40px";

// }) ();


// (function () {
//     let tag_class = document.getElementsByClassName("about_author");
//     tag_class[0].style.color = "orange";

// }) ();

// (function () {
//     let tag_p = document.getElementsByClassName("text");


//     tag_p[0].style.color = "blue";
//     tag_p[0].style.fontSize = "50px";
// }) ();

