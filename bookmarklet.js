(function(){
	console.log('Bookmarklet started');
	var para = document.getElementsByTagName("p");
	for(let i = 0; i < para.length; i++){
		para[i].innerHTML = "Amol";
	}
})();