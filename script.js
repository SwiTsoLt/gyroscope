
window.addEventListener("deviceorientation", setDot)
const dotElem = document.getElementById("dot")

function setDot(data) {
    const x = Math.round(data.gamma)
    const y = Math.round(data.beta)
    const z = Math.round(data.alpha)
    console.log(x, y);
    dotElem.style.transform = `translate(-${x}px, -${y}px)`
}
