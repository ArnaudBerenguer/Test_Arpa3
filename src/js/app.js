var cible = document.getElementById("nav-icon");
cible.addEventListener("click", function(e){

	e.preventDefault();
	document.body.classList.toggle("with-sidebar");
})

var cibleCache = document.getElementById("siteCache");
cibleCache.addEventListener("click", function(e){
	document.body.classList.remove("with-sidebar");
})

var cibleCache = document.getElementById("nav");
cibleCache.addEventListener("click", function(e){
	document.body.classList.remove("with-sidebar");
})