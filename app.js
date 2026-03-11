 
let humans = 1896

const counter = document.getElementById("counter")
const btn = document.getElementById("pauseBtn")

function updateCounter(){
counter.innerHTML = `
You are here now.<br><br>
<b>${humans}</b> humans<br>
doing nothing together
`
}

btn.onclick = function(){
humans++
updateCounter()
}

updateCounter()