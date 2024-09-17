let next = document.querySelector("#nextbtn")
let back = document.querySelector("#backbtn")
let image = document.querySelector("#image1")
let i = 0;
let taxt =["1","2","3"]
let carouzal = ["image/chattapuja.jpg","image/diwali.jpg","image/rakhabandhan.jpeg"]
console.log(carouzal)
next.addEventListener("click", () => {
    // console.log("hello")
    i++;    
    if (i >= carouzal.length) i = 0;
    image.setAttribute("src", carouzal[i])
    image.setAttribute("alt" ,taxt[i]);
    console.log(image);
})
back.addEventListener("click", () => {
    // console.log(carouzal)
    i--;
    if (i < 0) i = 2;
    image.setAttribute("src", carouzal[i])

})