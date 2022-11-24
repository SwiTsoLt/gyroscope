
window.addEventListener("deviceorientation", setDot)
const dotElem = document.getElementById("dot")

function setDot(data) {
    const x = Math.round(data.beta)
    const y = Math.round(data.gamma)
    const z = Math.round(data.alpha)
    dotElem.style.transform = `translate(-${x}px, -${y})px`
}
