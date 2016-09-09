var go = true;
var tak = true;
var tak1 = true;
var born = true;
var allbolt = [];
window.onload = function() {
	var mp3 = document.getElementById("music");
	mp3.play();
}
document.addEventListener("mousemove", move);
function move() {
	var x = event.pageX;
	var y = event.pageY;
	look(x, y);
}
function look(x, y) {
	if (go == true) {
		var gun = document.getElementById("qoral");
		var man = document.getElementById("mergen");
		var backt = document.getElementById("kvrvnmeyz").offsetTop;
		var backl = document.getElementById("kvrvnmeyz").offsetLeft;

		var gunt = document.getElementById("qoral").offsetTop;
		var gunl = document.getElementById("qoral").offsetLeft;
		yarlik = gunt + backt - y + 6;
		xarlik = gunl + backl - x + 18;
		yantuarlik = Math.sqrt(yarlik * yarlik + xarlik * xarlik);
		bulung = Math.floor(Math.atan2(yarlik, xarlik) * 180 / Math.PI) - 180;
		if (bulung > -90 && bulung < 0 || bulung < -270 && bulung > -360) {
			gun.style.background = "url(../img/gun_right.png)";
			man.style.background = "url(../img/manright.png)";
		}
		if (bulung < -90 && bulung > -270) {
			gun.style.background = "url(../img/gun_tatur.png)";
			man.style.background = "url(../img/manleft.png)";
		}

		gun.style.webkitTransform = "rotate(" + bulung + "deg)";
		document.title = bulung;
	}
}

window.addEventListener("click", shoot);
var oqnum = 0;
function shoot() {
	if (go == true) {
		var sh_mp3 = document.getElementById("shoot_mp3");

		sh_mp3.play();

		var getnum = 1;
		var xx = event.pageX;
		var yy = event.pageY;
		var backt = document.getElementById("kvrvnmeyz").offsetTop;
		var backl = document.getElementById("kvrvnmeyz").offsetLeft;

		var gunt = document.getElementById("qoral").offsetTop;
		var gunl = document.getElementById("qoral").offsetLeft;

		var yarlik = gunt + backt - yy + 6;
		var xarlik = gunl + backl - xx + 18;
		var bulung1 = Math.floor(Math.atan2(yarlik, xarlik) * 180 / Math.PI) - 180;
		var man = document.getElementById("mergen");
		var demo_1 = document.getElementById("rightthif");
		var demo_2 = document.getElementById("groundthif");
		
		var wall = document.getElementById("shape");
		var wall1 = document.getElementById("shape1");
		var wall2 = document.getElementById("shape3");
		var wall3 = document.getElementById("shape4");
		var wall4 = document.getElementById("shape5");
		var wall5 = document.getElementById("shape6");
		var wall6 = document.getElementById("shape7");
		var wall7 = document.getElementById("shape8");
		var wall8 = document.getElementById("shape9");
		
		
		var wall_animate1 = document.getElementById("animateshape1");
		var wall_animate2 = document.getElementById("animateshape2");
		var wall_animate3 = document.getElementById("animateshape3");


		var fail = document.getElementById("failed");
		var fail2 = document.getElementById("failed2");
		var win = document.getElementById("win");

		var in1 = document.getElementById("input");
		var in2 = document.getElementById("input1");
		var in_w = document.getElementById("axkan_oq");

		var tag_big = document.getElementById("tag");
		var tags = document.getElementById("tag").children;
		// console.log(tags[2]);
		if (born == true) {
			var bolt = document.createElement("div");
			bolt.className = "bolts";
			tag_big.appendChild(bolt);
		}
		oqnum++;
		if (oqnum == 6) {
			setTimeout(function(){fail.style.display = "block";},2000);
			go = false;
		}
		in2.value = 5-oqnum;
		in_w.value = in2.value;

		if (oqnum == 6) {
			born = false;
		}
		allbolt[allbolt.length] = bolt;
        //oqning qikix orni
		var start_x = 401, start_y =136;

		var radius = 70;
		var boltgo = setInterval(
				function() {
					if (go == true) {

						radius += 20;
						var x1 = start_x + radius
								* Math.cos(Math.PI / 180 * bulung1);
						var y1 = start_y + radius
								* Math.sin(Math.PI / 180 * bulung1);

						bolt.style.left = x1 + "px";
						bolt.style.top = y1 + "px";
						bolt.style.webkitTransform = "rotate(" + bulung1
								+ "deg)";
						for (var i = 0; i < allbolt.length; i++) {
							var oq = allbolt[i];
							var oql = parseInt(oq.style.left);
							var oqt = parseInt(oq.style.top);
							var oqh = parseInt(window.getComputedStyle(oq).height);
							var oqw = parseInt(window.getComputedStyle(oq).width);
							// console.log(oqt);
							if (tak == true) {
								var demo1_l = parseInt(window
										.getComputedStyle(demo_1).left);
								var demo1_t = parseInt(window
										.getComputedStyle(demo_1).top);
								var demo1_h = parseInt(window
										.getComputedStyle(demo_1).height);
								var demo1_w = parseInt(window
										.getComputedStyle(demo_1).width);
							}
							if (tak1 == true) {
								var demo2_l = parseInt(window
										.getComputedStyle(demo_2).left);
								var demo2_t = parseInt(window
										.getComputedStyle(demo_2).top);
								var demo2_h = parseInt(window
										.getComputedStyle(demo_2).height);
								var demo2_w = parseInt(window
										.getComputedStyle(demo_2).width);
							}
							var wall_l = parseInt(window.getComputedStyle(wall).left);
							var wall_t = parseInt(window.getComputedStyle(wall).top);
							var wall_h = parseInt(window.getComputedStyle(wall).height);
							var wall_w = parseInt(window.getComputedStyle(wall).width);
							
							var wall1_l = parseInt(window.getComputedStyle(wall1).left);
							var wall1_t = parseInt(window.getComputedStyle(wall1).top);
							var wall1_h = parseInt(window.getComputedStyle(wall1).height);
							var wall1_w = parseInt(window.getComputedStyle(wall1).width);
							
							var wall2_l = parseInt(window.getComputedStyle(wall2).left);
							var wall2_t = parseInt(window.getComputedStyle(wall2).top);
							var wall2_h = parseInt(window.getComputedStyle(wall2).height);
							var wall2_w = parseInt(window.getComputedStyle(wall2).width);
							
							var wall3_l = parseInt(window.getComputedStyle(wall3).left);
							var wall3_t = parseInt(window.getComputedStyle(wall3).top);
							var wall3_h = parseInt(window.getComputedStyle(wall3).height);
							var wall3_w = parseInt(window.getComputedStyle(wall3).width);
							
							var wall4_l = parseInt(window.getComputedStyle(wall4).left);
							var wall4_t = parseInt(window.getComputedStyle(wall4).top);
							var wall4_h = parseInt(window.getComputedStyle(wall4).height);
							var wall4_w = parseInt(window.getComputedStyle(wall4).width);
							
							var wall5_l = parseInt(window.getComputedStyle(wall5).left);
							var wall5_t = parseInt(window.getComputedStyle(wall5).top);
							var wall5_h = parseInt(window.getComputedStyle(wall5).height);
							var wall5_w = parseInt(window.getComputedStyle(wall5).width);
							
							var wall6_l = parseInt(window.getComputedStyle(wall6).left);
							var wall6_t = parseInt(window.getComputedStyle(wall6).top);
							var wall6_h = parseInt(window.getComputedStyle(wall6).height);
							var wall6_w = parseInt(window.getComputedStyle(wall6).width);
							
							var wall7_l = parseInt(window.getComputedStyle(wall7).left);
							var wall7_t = parseInt(window.getComputedStyle(wall7).top);
							var wall7_h = parseInt(window.getComputedStyle(wall7).height);
							var wall7_w = parseInt(window.getComputedStyle(wall7).width);
							
							var wall8_l = parseInt(window.getComputedStyle(wall8).left);
							var wall8_t = parseInt(window.getComputedStyle(wall8).top);
							var wall8_h = parseInt(window.getComputedStyle(wall8).height);
							var wall8_w = parseInt(window.getComputedStyle(wall8).width);
							
							var wall_animate1_l = parseInt(window.getComputedStyle(wall_animate1).left);
							var wall_animate1_t = parseInt(window.getComputedStyle(wall_animate1).top);
							var wall_animate1_h = parseInt(window.getComputedStyle(wall_animate1).height);
							var wall_animate1_w = parseInt(window.getComputedStyle(wall_animate1).width);
							
							var wall_animate2_l = parseInt(window.getComputedStyle(wall_animate2).left);
							var wall_animate2_t = parseInt(window.getComputedStyle(wall_animate2).top);
							var wall_animate2_h = parseInt(window.getComputedStyle(wall_animate2).height);
							var wall_animate2_w = parseInt(window.getComputedStyle(wall_animate2).width);
							
							var wall_animate3_l = parseInt(window.getComputedStyle(wall_animate3).left);
							var wall_animate3_t = parseInt(window.getComputedStyle(wall_animate3).top);
							var wall_animate3_h = parseInt(window.getComputedStyle(wall_animate3).height);
							var wall_animate3_w = parseInt(window.getComputedStyle(wall_animate3).width);
							
							
							
							
							var man_l = parseInt(window.getComputedStyle(man).left);
							var man_t = parseInt(window.getComputedStyle(man).top);
							var man_h = parseInt(window.getComputedStyle(man).height);
							var man_w = parseInt(window.getComputedStyle(man).width);

							

							// ground thif
							if (oql + oqw >= demo1_l
									&& oql + oqw <= demo1_l + demo1_w
									&& oqt + oqh > demo1_t
									&& oqt < demo1_t + demo1_h) {
								var die_mp3 = document
										.getElementById("die_mp3");
								die_mp3.play();
								demo_1.style.background = "url(../img/die.gif)";
								if (demo_1.parentNode == tag_big) {
									setTimeout(function(){
										demo_1.parentElement.removeChild(demo_1);
										},400);
									if (in1.value == "") {
										in1.value = 750;
										// console.log(in1.value);
									} else if (in1.value == 750) {
										in1.value = 1500;
									}
									tak = false;
								}
								if (oq.parentNode == tag_big) {
									oq.parentElement.removeChild(oq);
									window.clearInterval(boltgo);
								}
							}
							// sky thif
							if (oql + oqw >= demo2_l
									&& oql + oqw <= demo2_l + demo2_w
									&& oqt + oqh > demo2_t
									&& oqt < demo2_t + demo2_h) {
								var die_mp3 = document
										.getElementById("die_mp3");
								die_mp3.play();
								demo_2.style.background = "url(../img/die.gif)";

								if (demo_2.parentNode == tag_big) {
									setTimeout(function(){
										demo_2.parentElement.removeChild(demo_2);
										},400);
									if (in1.value == "") {
										in1.value = 750;
									} else if (in1.value == 750) {
										in1.value = 1500;
									}
									tak1 = false;
								}
								if (oq.parentNode == tag_big) {
									oq.parentElement.removeChild(oq);
									window.clearInterval(boltgo);
								}
							}
							// wall
							if (oql+oqw/2 > wall_l
									&& oql < wall_l + wall_w
									&& ( oqt+oqh >= wall_t && oqt + oqh <= wall_t + wall_h)) {
								if (oq.parentNode == tag_big) {
									oq.parentElement.removeChild(oq);
									window.clearInterval(boltgo);
								}
							}
							// wall1
							if (oql+oqw/2 >= wall1_l
									&& oql <= wall1_l + wall1_w
									&& (oqt >= wall1_t && oqt <= wall1_t + wall1_h || oqt
											+ oqh >= wall1_t
											&& oqt + oqh <= wall1_t + wall1_h)) {
								if (oq.parentNode == tag_big) {
									oq.parentElement.removeChild(oq);
									window.clearInterval(boltgo);
								}
							}
							// wall2
							if (oql+oqw/2 >= wall2_l
									&& oql <= wall2_l + wall2_w
									&& (oqt >= wall2_t && oqt <= wall2_t + wall2_h || oqt
											+ oqh >= wall2_t
											&& oqt + oqh <= wall2_t + wall2_h)) {
								if (oq.parentNode == tag_big) {
									oq.parentElement.removeChild(oq);
									window.clearInterval(boltgo);
								}
							}
							// wall3
							if (oql+oqw/2 >= wall3_l
									&& oql <= wall3_l + wall3_w
									&& (oqt >= wall3_t && oqt <= wall3_t + wall3_h || oqt
											+ oqh >= wall3_t
											&& oqt + oqh <= wall3_t + wall3_h)) {
								if (oq.parentNode == tag_big) {
									oq.parentElement.removeChild(oq);
									window.clearInterval(boltgo);
								}
							}
							//wall4
							if (oql+oqw/2 >= wall4_l
									&& oql <= wall4_l + wall4_w
									&& (oqt >= wall4_t && oqt <= wall4_t + wall4_h || oqt
											+ oqh >= wall4_t
											&& oqt + oqh <= wall4_t + wall4_h)) {
								if (oq.parentNode == tag_big) {
									oq.parentElement.removeChild(oq);
									window.clearInterval(boltgo);
								}
							}
							//wall5
							if (oql+oqw/2 >= wall5_l
									&& oql <= wall5_l + wall5_w
									&& (oqt >= wall5_t && oqt <= wall5_t + wall5_h || oqt
											+ oqh >= wall5_t
											&& oqt + oqh <= wall5_t + wall5_h)) {
								if (oq.parentNode == tag_big) {
									oq.parentElement.removeChild(oq);
									window.clearInterval(boltgo);
								}
							}
							//wall6
							if (oql+oqw/2 >= wall6_l
									&& oql <= wall6_l + wall6_w
									&& (oqt >= wall6_t && oqt <= wall6_t + wall6_h || oqt
											+ oqh >= wall6_t
											&& oqt + oqh <= wall6_t + wall6_h)) {
								if (oq.parentNode == tag_big) {
									oq.parentElement.removeChild(oq);
									window.clearInterval(boltgo);
								}
							}
							//wall7
							if (oql+oqw/2 >= wall7_l
									&& oql <= wall7_l + wall7_w
									&& (oqt >= wall7_t && oqt <= wall7_t + wall7_h || oqt
											+ oqh >= wall7_t
											&& oqt + oqh <= wall7_t + wall7_h)) {
								if (oq.parentNode == tag_big) {
									oq.parentElement.removeChild(oq);
									window.clearInterval(boltgo);
								}
							}
							//wall8
							if (oql+oqw/2 >= wall8_l
									&& oql <= wall8_l + wall8_w
									&& (oqt >= wall8_t && oqt <= wall8_t + wall8_h || oqt
											+ oqh >= wall8_t
											&& oqt + oqh <= wall8_t + wall8_h)) {
								if (oq.parentNode == tag_big) {
									oq.parentElement.removeChild(oq);
									window.clearInterval(boltgo);
								}
							}
							
							//wall animate 1
							if (oql+oqw/2 >= wall_animate1_l
									&& oql <= wall_animate1_l + wall_animate1_w
									&& (oqt >= wall_animate1_t && oqt <= wall_animate1_t + wall_animate1_h || oqt
											+ oqh >= wall_animate1_t
											&& oqt + oqh <= wall_animate1_t + wall_animate1_h)) {
								if (oq.parentNode == tag_big) {
									oq.parentElement.removeChild(oq);
									window.clearInterval(boltgo);
								}
							}
							
							//wall animate 2
							if (oql+oqw/2 >= wall_animate2_l
									&& oql <= wall_animate2_l + wall_animate2_w
									&& (oqt >= wall_animate2_t && oqt <= wall_animate2_t + wall_animate2_h || oqt
											+ oqh >= wall_animate2_t
											&& oqt + oqh <= wall_animate2_t + wall_animate2_h)) {
								if (oq.parentNode == tag_big) {
									oq.parentElement.removeChild(oq);
									window.clearInterval(boltgo);
								}
							}
							
							//wall animate 2
							if (oql+oqw/2 >= wall_animate3_l
									&& oql <= wall_animate3_l + wall_animate3_w
									&& (oqt >= wall_animate3_t && oqt <= wall_animate3_t + wall_animate3_h || oqt
											+ oqh >= wall_animate3_t
											&& oqt + oqh <= wall_animate3_t + wall_animate3_h)) {
								if (oq.parentNode == tag_big) {
									oq.parentElement.removeChild(oq);
									window.clearInterval(boltgo);
								}
							}
							
							// myself
							console.log(man_l);
							if ((oql > man_l && oql + oqw <= man_l + man_w)
									&& (oqt + oqh >= man_t && oqt + oqh <= man_t
											+ man_h)) {
								if (oq.parentNode == tag_big) {
									oq.parentElement.removeChild(oq);
									window.clearInterval(boltgo);
								}
								var die_mp3 = document
								.getElementById("die_mp3");
						     die_mp3.play();
						     setTimeout(function(){fail2.style.display = "block";},400);						
								go = false;
							}
							if (in1.value == 1500) {
								setTimeout(function(){win.style.display = "block";},2000);
								go = false;
							}
						}

						var mergan_l = document.getElementById("mergen").offsetLeft;// 227
						var oq_l = parseInt(window.getComputedStyle(bolt).left);
						var oq_w = parseInt(window.getComputedStyle(bolt).width);
						var oq_h = parseInt(window.getComputedStyle(bolt).height);
						var oq_t = parseInt(window.getComputedStyle(bolt).top);
						var tag_l = document.getElementById("kvrvnmeyz").offsetLeft;// 467
						var tag_t = document.getElementById("kvrvnmeyz").offsetTop;
						var tag_w = parseInt(window.getComputedStyle(kvrvnmeyz).width);
						var tag_h = parseInt(window.getComputedStyle(kvrvnmeyz).height);// 966

						// console.log(oq_t,tag_t,tag_t,tag_h);
						// ong tarapning kangkip kaytixi
						if (oq_l + oq_w >= tag_w) {
							// console.log("ong tam");
							var ball_mp3 = document.getElementById("ball_mp3");
							ball_mp3.play();
							start_x = Math.min(oq_l, tag_w);
							start_y = oq_t;
							radius = 0;
							bulung1 = 180 - bulung1;

						}
						if (oq_t + tag_t <= tag_t) {

							// console.log("usti tam");
							var ball_mp3 = document.getElementById("ball_mp3");
							ball_mp3.play();
							start_x = oq_l;
							start_y = Math.min(oq_t, tag_t);
							radius = 0;
							bulung1 = 360 - bulung1;

						}
						if (oq_l + tag_l <= tag_l) {
							// console.log("sol tam");
							var ball_mp3 = document.getElementById("ball_mp3");
							ball_mp3.play();
							start_x = Math.min(oq_l, tag_l);
							start_y = oq_t;
							radius = 0;
							bulung1 = 180 - bulung1;
						}
						if (oq_t + tag_t + 70 >= tag_t + tag_h) {
							if (oq.parentNode == tag_big) {
								oq.parentElement.removeChild(oq);
								window.clearInterval(boltgo);
							}

						}

					}
				}, 20);
	}
	
	
	if (go == false) {
		var sh_mp3 = document.getElementById("shoot_mp3");
		sh_mp3.pause();
	}
}

function stop() {
	var show = document.getElementById("pause");
	go = false;
	show.style.display = "block";
	var mp3 = document.getElementById("music");
	mp3.pause();

}
function restart() {
	var show = document.getElementById("pause");
	go = true;
	show.style.display = "none";
	var mp3 = document.getElementById("music");
	mp3.play();
}