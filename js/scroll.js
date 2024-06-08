const header = document.querySelector(".header");

window.addEventListener("scroll", () =>{
    if(scrollY >= 200){
        header.classList.add("black");
    }else{
        header.classList.remove("black");
    }
});

console.log(scrollY);