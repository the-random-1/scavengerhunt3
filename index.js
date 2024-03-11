function item(numb) {
	let menus = document.getElementsByClassName("con");
	for (var i = 0; i < menus.length; i++) {
		if (i == numb) {
			menus[i].style.display = "block";
		} else {
			menus[i].style.display = "none";
		}
	}
}

function addDec(char) {
	if (char == "-") {
		if (document.getElementById("decmsg").innerText != "") {
			document.getElementById("decmsg").innerText = document.getElementById("decmsg").innerText.substr(0, document.getElementById("decmsg").innerText.length - 1);
		}
	} else {
		let ind = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".indexOf(char);
		ind -= document.getElementById("ofst").value;
		while (ind < 0) {ind += 26;}
		document.getElementById("decmsg").innerText += "ABCDEFGHIJKLMNOPQRSTUVWXYZ".charAt(ind);
	}
}

function fillin(num) {
	let list = ["underneath a pillow in the guest bedroom", "inside the freezer", "above the refrigerator", "within the compartment attached to the couch", "in between the cushions of a tan colored couch", "underneath the ferris wheel", "inside the gray box upstairs"];
	document.getElementById("fillblank").innerText = list[num];
}

window.onload = function() {
	let img = document.getElementById("img");
	let back = document.getElementById("back");
	let next = document.getElementById("next");
	let opn = document.getElementById("open");
	let miscimg = document.getElementById("miscimg");
	let dec = document.getElementById("dec");

	let backs = document.getElementsByClassName("backbtn");
	for (var i = 0; i < backs.length; i++) {
		backs[i].onclick = function() {
			item(0);
		}
	}

	let alpha = "ABCDEFGHIJKLMNOPQRSTUVWXYZ-";
	let dectablecurr = 0;
	for (var i = 0; i < 4; i++) {
		let columns = "";
		for (var j = 0; j < 7; j++) {
			dectablecurr = 7 * i + j;
			if (dectablecurr < 27) {
				if (dectablecurr != 26) {
					columns += "<td onclick='addDec(`" + alpha.charAt(dectablecurr) + "`)' id='dec" + dectablecurr + "'>" + alpha.charAt(dectablecurr) + "</td>";
				}
					if (dectablecurr == 26) {
					columns += "<td onclick='addDec(`-`)' id='dec26'>DEL</td>";
				}
			}
		}

		dec.innerHTML += "<tr>" + columns + "</tr>";
	}

	let phrases = ["underneath a pillow in the guest bedroom", "inside the freezer", "above the refrigerator", "within the compartment attached to the couch", "in between the cushions of a tan colored couch", "underneath the ferris wheel", "inside the gray box upstairs"];

	for (var i = 0; i < 7; i++) {
		document.getElementById("bl" + (i + 1)).innerText = phrases[i];
		document.getElementById("bl" + (i + 1)).setAttribute("onclick", "fillin(" + i + ");");
	}

	let toolpass = document.getElementById("toolpass");
	let toolpassbtn = document.getElementById("toolpassbtn");

	toolpassbtn.onclick = function() {
		if (toolpass.value != "jr93js3md0") {
			document.getElementById("tooltxt").innerText = "Access Denied";
		} else {
			document.getElementById("tooltxt").innerText = "This is a UV pen. The button on its side will project a light that can uncover messages previously invisible. Use this tool to reveal any writing hiding in plain sight. You may find this tool in the box of wires in the upstairs closet.";
			document.getElementById("toolimg").setAttribute("src", "uvpen.jpeg");
			document.getElementById("toolimg").style.display = "block";
		}
	}

	let finpass = document.getElementById("finpass");
	let finpassbtn = document.getElementById("finpassbtn");

	finpassbtn.onclick = function() {
		if (finpass.value != "fire") {
			document.getElementById("finpass").style.borderColor = "red";
			setTimeout(function() {
				document.getElementById("finpass").style.borderColor = "black";		
			}, 1500);
		} else {
			document.getElementById("finimg").setAttribute("src", "final.jpeg");
			document.getElementById("finimg").style.display = "block";
		}
	}

	let select = 0;

	let srcs = ["gallery.jpeg", "deciph.jpeg", "linkup.jpeg", "helptool.jpeg", "mystloc.jpeg"];

	back.onclick = function() {
	  select -= 1;
		if (select < 0) {select = 4;}

		opn.setAttribute("onclick", "item(" + (select + 1) + ")");
		img.setAttribute("src", srcs[select]);
	}

	next.onclick = function() {
	  select += 1;
		if (select > 4) {select = 0;}
		
		opn.setAttribute("onclick", "item(" + (select + 1) + ")");
		img.setAttribute("src", srcs[select]);
	}

	let currmiscimg = 1;

	miscimg.onclick = function() {
		currmiscimg += 1;
		if (currmiscimg > 4) {currmiscimg = 1}
		miscimg.setAttribute("src", "misc" + currmiscimg + ".jpeg");
	}
}
