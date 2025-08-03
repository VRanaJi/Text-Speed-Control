const text = document.getElementById("text")
const speedEl = document.getElementById("speed")
const prog = "SUBSCRIBE The Channel- (0fficial_coderr)"

let idx = 1
let speed = 300 / speedEl.value

writeText()

function writeText(){
	text.innerText = prog.slice(0, idx)
	idx++

	if(idx > prog.length){
		idx = 1
	}
	setTimeout(writeText, speed)
}

speedEl.addEventListener('input', (e) =>{
	speed = 300 / e.target.value
})
