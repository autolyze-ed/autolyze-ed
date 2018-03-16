var searchString = "The best answer is ";
var answers = ["A", "B", "C", "D", "E", "F", "G", "H", "J", "K"];
var html = document.body.innerHTML;
var delay = Math.floor((Math.random() * 120000) + 60000);
delay = Math.round(delay);
document.getElementById("footer").innerHTML = "QUESTION WILL BE SUBMITTED IN " + (delay / 1000).toString() + " SECONDS";


for (var i = 0; i < answers.length; i++) {
	if (html.toString().indexOf(searchString + answers[i]) != -1) {
		switch(answers[i]) {
		case "A":
			document.getElementById("a1").checked = true;
			break;
		case "B":
			document.getElementById("a2").checked = true;
			break;
		case "C":
			document.getElementById("a3").checked = true;
			break;
		case "D":
			document.getElementById("a4").checked = true;
			break;
		case "E":
			document.getElementById("a5").checked = true;
			break;
		case "F":
			document.getElementById("a1").checked = true;
			break;
		case "G":
			document.getElementById("a2").checked = true;
			break;
		case "H":
			document.getElementById("a3").checked = true;
			break;
		case "J":
			document.getElementById("a4").checked = true;
			break;
		case "K":
			document.getElementById("a5").checked = true;
			break;
		}
		enableAnswer();
		setTimeout(() => {
			document.getElementsByName("form1")[0].submit();
		}, delay);
	}
}