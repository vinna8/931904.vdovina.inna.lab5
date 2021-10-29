var buttons = document.querySelectorAll("button");

for (let i = 0; i< buttons.length; i++){
buttons[i].addEventListener("click", function(){
	var popup = document.getElementById(`mypopup${i+1}`);
	popup.style.display = "block";	
	});
}; 

window.onclick = function(event){
	if (event.target.className === "popup") {
		event.target.style.display = "none";
	};
};