var t = true;
var p = 1;
window.onload = function() {
	var music = document.getElementById("switch");
	var tag_music = document.getElementById("tag_mp3");
	console.log(music.setAttribute("click", "play()"));
	tag_music.play();

	var music_o = document.getElementById("shoot_mp3");

	var music_1 = setInterval(function() {
		if (t == true) {
			music_o.play();
		}
	}, 5000)
	var music_2 = setInterval(function() {
		if (t == true) {
			music_o.play();
			t = false;
		}
	}, 7500)


}
function play() {
	if (p == 1) {
		var tag_music = document.getElementById("tag_mp3");
		var music = document.getElementById("switch");
		music.innerHTML = "OFF";
		music.style.color = "red";
		tag_music.pause();
		p = 2;
	} else if (p == 2) {
		var tag_music = document.getElementById("tag_mp3");
		var music = document.getElementById("switch");
		music.innerHTML = "ON";
		music.style.color = "rgb(0, 255, 239)";
		tag_music.play();
		p = 1;
	}

}