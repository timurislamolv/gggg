
const container = document.querySelector(".container")
let n = 600

for (let i = 0; i<n; i++){
    const square = document.createElement("div")
    container.append(square)
    square.setAttribute("class","square")
    square.classList.add("square")



    square.addEventListener("mouseover",()=>{
        square.style.background = randomColor()
        // square.style.transform = "scale(1.2)"
        square.style.boxShadow = `50px 50px 50px ${randomColor()}`

    })

    square.addEventListener("mouseleave",()=>{
        square.style.background = ""
        // square.style.transform = ""
        square.style.boxShadow = ""

    })

}
function randomColor(){
    return '#' + Math.floor(Math.random() * 1264962956).
    toString(16)
}



// console.log(randomColor())


const btn = document.querySelector(".green")

const btm = document.querySelector(".gre")



