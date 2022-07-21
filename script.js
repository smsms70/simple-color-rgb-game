const one = document.getElementById('one');
const two = document.getElementById('two');
const three = document.getElementById('three');
const four = document.getElementById('four');
const five = document.getElementById('five');
const six = document.getElementById('six');
const rgbText = document.getElementById('color');
const score = document.getElementById('score');
const array = [one, two, three, four, five, six];

const random = () =>{
	let r = Math.floor(Math.random()*6);
	return array[r];
}


const random_color = ()=>{
	return Math.floor(Math.random()*256);
}

const color = ()=>{
	return `rgb(${random_color()},${random_color()},${random_color()})`;
}

const message = m => {
	let cover = document.createElement('div');
	let text;
	if(!m) {
		text = document.createTextNode('You Lose');
	} else {
		text = document.createTextNode('You Win');
	}
	cover.setAttribute('class', 'message');
	cover.appendChild(text)
	document.body.appendChild(cover);
	cover.addEventListener('click', ()=>cover.remove())
}



const play = () => {
	one.style.background = color();
	two.style.background = color();
	three.style.background = color();
	four.style.background = color();
	five.style.background = color();
	six.style.background = color();

	console.table(
		{
			one:  one.style.background,
			two:  two.style.background,
			three:  three.style.background,
			four:  four.style.background,
			five:  five.style.background,
			six:  six.style.background
		}
	)
}
play()

let winner = random();
rgbText.innerHTML = winner.style.background;
score.innerHTML = 0;

const asing = a =>{
	if (winner === a) {
		play()
		winner = random();
		rgbText.innerHTML = winner.style.background;
		score.innerHTML -= - 5;

		return	1
	} else {
		score.innerHTML -= + 2;
		return 0
	}
}
const handlers = () => {
	one.addEventListener('click', () => {
		message(asing(one))
	})
	two.addEventListener('click', () => {
		message(asing(two))
	})
	three.addEventListener('click', () => {
		message(asing(three))
	})
	four.addEventListener('click', () => {
		message(asing(four))
	})
	five.addEventListener('click', () => {
		message(asing(five))
	})
	six.addEventListener('click', () => {
		message(asing(six))
	})

}

handlers();