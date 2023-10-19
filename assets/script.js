const slidesImgTxt = [
	{
		"image": "slide1.jpg",
		"tagLine": "Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image": "slide2.jpg",
		"tagLine": "Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image": "slide3.jpg",
		"tagLine": "Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image": "slide4.png",
		"tagLine": "Autocollants <span>avec découpe laser sur mesure</span>"
	}
]


let dotSelection = document.querySelectorAll(".dot")
let arrowRight = document.getElementById("arrow_right")
let arrowLeft = document.getElementById("arrow_left")
let images = document.getElementById("images")
let text = document.getElementById("text")
let n = 0

dotSelection[0].classList.add("dot_selected")
function right() {
	dotSelection[n].classList.remove("dot_selected")
	if (n < 4) {
		n++
	}
	if (n > 3){
		n=0
	}
	dotSelection[n].classList.add("dot_selected")
	images.src = "./assets/images/slideshow/" + slidesImgTxt[n].image
	text.innerHTML = slidesImgTxt[n].tagLine
}

function left() {
	dotSelection[n].classList.remove("dot_selected")
	if (n < 4) {
		n--
	}
	if (n < 0){
		n=3
	}
	dotSelection[n].classList.add("dot_selected")
	images.src = "./assets/images/slideshow/" + slidesImgTxt[n].image
	text.innerHTML = slidesImgTxt[n].tagLine
}

arrowRight.addEventListener("click", right)
arrowLeft.addEventListener("click", left)