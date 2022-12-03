/* Navbar Scroll*/
window.addEventListener("scroll", () => {
    const nav = document.querySelector("nav");
    const scrollValue = window.scrollY;
    console.log(scrollValue);
    if (scrollValue < 140) {
        nav.classList.remove("nav-scroll");
    } else {
        nav.classList.add("nav-scroll");
    }
});

/* Slider */
const prev = document.querySelector(".fa-left-long");
const next = document.querySelector(".fa-right-long");
const container = document.querySelector(".container2");
const imgwrapper = document.querySelector(".img-wrappers");
const imgs = document.querySelectorAll("img");


const width = parseInt(window.getComputedStyle(container).width);

let offset = 0;
next.addEventListener("click", () => {
    if (offset === width * (imgs.length - 3)) { //2100
        offset = 0;
    } else {
        offset = offset + width;
        console.log(offset);
    }
    imgwrapper.style.transform = `translateX(-${offset}px)`;
})
prev.addEventListener("click", () => {
    if (offset === 0) {
        offset = 2100;        //width*(imgs.length-1)
    } else {
        offset = offset - width;
    }
    imgwrapper.style.transform = `translateX(-${offset}px)`;
})
/*Back to top */
const upIcon = document.querySelector(".fa-arrow-up");
upIcon.addEventListener("click", () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}
)