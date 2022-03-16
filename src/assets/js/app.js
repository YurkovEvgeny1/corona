let burger = document.querySelector(".burger");
let body = document.querySelector("body");
let headerMenu = document.querySelector(".header__menu");


burger.onclick = function(){
	burger.classList.toggle("active");
	body.classList.toggle("lock");
	headerMenu.classList.toggle("active");
}
headerMenu.onclick = function(){
	burger.classList.remove("active");
	body.classList.remove("lock");
	headerMenu.classList.remove("active");
}