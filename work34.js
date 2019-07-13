var clickMe = document.getElementById('clickme');

clickMe.addEventListener("click", function(){
	var expand = document.getElementById('expand')

	if (expand.style.visibility == "hidden") {
		expand.style.visibility = "visible";
		clickMe.innerHTML = "Click Me";
	}

	else{
		expand.style.visibility = "hidden";
		clickMe.innerHTML = "Click Me";
	}
})

var close = document.getElementById('close');

close.addEventListener("click", function(){
	var expand = document.getElementById('expand')

	if (expand.style.visibility == "hidden") {
		expand.style.visibility = "visible";
		close.innerHTML = "Click Me";
	}

	else{
		expand.style.visibility = "hidden";
		close.innerHTML = "Click Me";
	}
})