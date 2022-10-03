const navbarEL = document.querySelector(".navbar");
const bottomContainerEL = document.querySelector(".bottom-container");

console.log(navbarEL.offsetHeight);
console.log(bottomContainerEL.offsetTop);

window.addEventListener("scroll", ()=>{
    if(window.scrollY > bottomContainerEL.offsetTop - navbarEL.offsetHeight - 50){
        navbarEL.classList.add("active");
    }
    else{
        navbarEL.classList.remove("active");
    }
})
