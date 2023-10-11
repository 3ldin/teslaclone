const main = document.querySelector(".main-1");
const menu = document.querySelector("#menu");
const cross = document.querySelector(".fa-xmark");
const blurs = document.querySelector(".blur");
const side = document.querySelector(".hidden");

menu.addEventListener("click",() => {
    blurs.classList.add("active");
    side.classList.add("active");
})

cross.addEventListener("click", () => {
    blurs.classList.remove("active");
    side.classList.remove("active");
})

const h1 = document.querySelector(".head-1");
const h2 = document.querySelector(".head-2");
const h3 = document.querySelector(".head-3");
const h4 = document.querySelector(".head-4");
const h5 = document.querySelector(".head-5");
const h6 = document.querySelector(".head-6");
const h7 = document.querySelector(".head-7");
const h8 = document.querySelector(".head-8");
const l1 = document.querySelector(".login-1");
const l2 = document.querySelector(".login-2");
const l3 = document.querySelector(".login-3");
const l4 = document.querySelector(".login-4");
const l5 = document.querySelector(".login-5");
const l6 = document.querySelector(".login-6");
const l7 = document.querySelector(".login-7");
const l8 = document.querySelector(".login-8");

main.addEventListener("scroll", () =>{
    console.log(main.scrollTop);
    const unit=main.scrollTop;
    if(unit >= 0 && unit < 727) {
        h1.classList.remove("hide");
        l1.classList.remove("hide");
    } else {
        h1.classList.add("hide");
        l1.classList.add("hide");
    }
    if(unit > 574 && unit < 1191) {
        h2.classList.add("active");
        l2.classList.add("active");
    }  else {
        h2.classList.remove("active");
        l2.classList.remove("active");
    }
    if(unit > 1549 && unit < 2247) {
        h3.classList.add("active");
        l3.classList.add("active");
    }  else {
        h3.classList.remove("active");
        l3.classList.remove("active");
    }
    if(unit > 2525 && unit < 3225) {
        h4.classList.add("active");
        l4.classList.add("active");
    }  else {
        h4.classList.remove("active");
        l4.classList.remove("active");
    }
    if(unit > 3500 && unit < 4200) {
        h5.classList.add("active");
        l5.classList.add("active");
    }  else {
        h5.classList.remove("active");
        l5.classList.remove("active");
    }
    if(unit > 4475 && unit < 5175) {
        h6.classList.add("active");
        l6.classList.add("active");
    } else {
        h6.classList.remove("active");
        l6.classList.remove("active");
    }
    if(unit > 5450 && unit < 6150) {
        h7.classList.add("active");
        l7.classList.add("active");
    } else {
        h7.classList.remove("active");
        l7.classList.remove("active");
    }
    if(unit > 6350 && unit < 6831) {
        h8.classList.add("active");
        l8.classList.add("active");
    } else {
        h8.classList.remove("active");
        l8.classList.remove("active");
    }
});
