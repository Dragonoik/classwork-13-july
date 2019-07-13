for (var i = 1; i <= 100; i++){
	if (i%3===0 && i%5===0) {
		console.log('кратно 3 и 5')
	}
	else if(i%3===0){
		console.log('кратно 3')
	}
	else if(i%5===0){
		console.log('кратно 5')
	}
	else{
		console.log(i)
	}
}