var i = 0;
function left() {
	var taglik = document.getElementById("back");
	var tagxak = document.getElementById("chose");
	i--;
	if (i < 0) {
		i = 4;
	}
	if (i == 0) {
		taglik.style.background = "url('../img/score1.jpg')";
		tagxak.style.display = "block";
	}
	if (i == 1) {
		taglik.style.background = "url('../img/score2.jpg')";
		tagxak.style.display = "none";
	}
	if (i == 2) {
		taglik.style.background = "url('../img/score3.jpg')";
		tagxak.style.display = "none";
	}
	if (i == 3) {
		taglik.style.background = "url('../img/score4.jpg')";
		tagxak.style.display = "none";
	}
	if (i == 4) {
		taglik.style.background = "url('../img/score5.jpg')";
		tagxak.style.display = "none";
	}

}
function right() {
	var taglik = document.getElementById("back");
	var tagxak = document.getElementById("chose");
	i++;
	if (i > 4) {
		i = 0;
	}
	if (i == 0) {
		taglik.style.background = "url('../img/score1.jpg')";
		tagxak.style.display = "block";
	}
	if (i == 1) {
		taglik.style.background = "url('../img/score2.jpg')";
		tagxak.style.display = "none";
	}
	if (i == 2) {
		taglik.style.background = "url('../img/score3.jpg')";
		tagxak.style.display = "none";
	}
	if (i == 3) {
		taglik.style.background = "url('../img/score4.jpg')";
		tagxak.style.display = "none";
	}
	if (i == 4) {
		taglik.style.background = "url('../img/score5.jpg')";
		tagxak.style.display = "none";
	}
}