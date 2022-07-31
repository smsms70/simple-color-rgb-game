const one = document.getElementById('one');
const two = document.getElementById('two');
const three = document.getElementById('three');
const four = document.getElementById('four');
const five = document.getElementById('five');
const six = document.getElementById('six');
const rgbText = document.getElementById('color');
const score = document.getElementById('score');
const array = [one, two, three, four, five, six];
let score_num = 0;
const random = e =>	Math.floor(Math.random()*e);

const color = ()=>{
	return `rgb(${random(256)},${random(256)},${random(256)})`;
}

const message = m => {
	let cover = document.createElement('div');
	let text;
	(!m) ? text = document.createTextNode('You Lose') : text = document.createTextNode('You Win');
	
	cover.setAttribute('class', 'message');
	cover.appendChild(text)
	document.body.appendChild(cover);
	cover.addEventListener('click', ()=>cover.remove())
}

const play = () => {
	array.forEach(e => e.style.background = color())
	winner = array[random(6)];
	rgbText.innerHTML = winner.style.background;
};

const assign = a =>{
	if (winner === a) {
		play()
		score_num -= - 4;
		return	1
	} else {
		score_num -= + 3;
		return 0
	}
}

const handlers = () =>{
	array.forEach(e =>{
		e.addEventListener('click', () => {
			message(assign(e))
			score.innerText = `Score: ${score_num}`;
		})
	})
}
handlers();play();