//* ========Curve navigation =========*/

let list = document.querySelectorAll(".navigation li");

function activeLink(){
    list.forEach((item) => {
        item.classList.remove("hovred");
    });
    this.classList.add("hovred");
}

list.forEach((item) => item.addEventListener("mouseover",activeLink));

// ============ Menu Toggele ========== //

let toggle = document.querySelector(".toggle");
let navigation = document.querySelector(".navigation");
let main = document.querySelector(".main");

toggle.onclick = function(){
    navigation.classList.toggle("active");
    main.classList.toggle("active");
};