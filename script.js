
window.addEventListener("deviceorientation", setDot)
const dotElem = document.getElementById("dot")
const messageElem = document.getElementById("message")

function setDot(data) {
    const x = Math.round(data.gamma)
    const y = Math.round(data.beta)
    const z = Math.round(data.alpha)
    
    messageElem.innerText = `${x};\n${y};\n${z}`
    dotElem.style.transform = `translate(${x*4}px, ${y*4}px)`
}
