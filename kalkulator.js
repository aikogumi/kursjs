var dzialanie = "";
function dziewienc() {
	dzialanie = dzialanie + "9";
	document.getElementById("wynik").innerHTML = dzialanie;
}
function osiem() {
	dzialanie = dzialanie + "8";
	document.getElementById("wynik").innerHTML = dzialanie;
}
function siedem() {
	dzialanie = dzialanie + "7";
	document.getElementById("wynik").innerHTML = dzialanie;
}
function szesc() {
	dzialanie = dzialanie + "6";
	document.getElementById("wynik").innerHTML = dzialanie;
}
function pinc() {
	dzialanie = dzialanie + "5";
	document.getElementById("wynik").innerHTML = dzialanie;
}
function cztery() {
	dzialanie = dzialanie + "4";
	document.getElementById("wynik").innerHTML = dzialanie;
}
function trzy() {
	dzialanie = dzialanie + "3";
	document.getElementById("wynik").innerHTML = dzialanie;
}
function dwa() {
	dzialanie = dzialanie + "2";
	document.getElementById("wynik").innerHTML = dzialanie;
}
function jeden() {
	dzialanie = dzialanie + "1";
	document.getElementById("wynik").innerHTML = dzialanie;
}
function zero() {
	dzialanie = dzialanie + "0";
	document.getElementById("wynik").innerHTML = dzialanie;
}
function dodawanie() {
	dzialanie = dzialanie + "+";
	document.getElementById("wynik").innerHTML = dzialanie;
}
function odejmowanie() {
	dzialanie = dzialanie + "-";
	document.getElementById("wynik").innerHTML = dzialanie;
}
function dzielenie() {
	dzialanie = dzialanie + "/";
	document.getElementById("wynik").innerHTML = dzialanie;
}
function mnozenie() {
	dzialanie = dzialanie + "*";
	document.getElementById("wynik").innerHTML = dzialanie;
}
function wynik() {
	if (dzialanie.indexOf("+") !== -1) {
		oblicz("+");
	}
	else if (dzialanie.indexOf("-") !== -1) {
		oblicz("-");
	}
	else if (dzialanie.indexOf("/") !== -1) {
		oblicz("/");
	}
	else if (dzialanie.indexOf("*") !== -1) {
		oblicz("*");
	}
	else {
		dzialanie = "Błąd!";
	}
	document.getElementById("wynik").innerHTML = dzialanie;
}

function oblicz(znak) {
	var fields = dzialanie.split(znak);
	var x = fields[0];
	var y = fields[1];
	if (znak === "+") {
		dzialanie = Number(x) + Number(y);
	}
	else if (znak === "-") {
		dzialanie = Number(x) - Number(y);
	}
	else if (znak === "/") {
		dzialanie = Number(x) / Number(y);
	}
	else if (znak === "*") {
		dzialanie = Number(x) * Number(y);
	}
}
function czyszczenie() {
	dzialanie = "";
	document.getElementById("wynik").innerHTML = dzialanie;
}