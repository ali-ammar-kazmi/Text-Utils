showNotes();

function add(){
	let txt = document.getElementById('txt')
	let notesArr = access();
	notesArr.push(txt.value);
	localStorage.setItem("notes", JSON.stringify(notesArr));
	txt.value = "";
	showNotes();
}

function showNotes() {
	let notesArr = access();
	let html = "";
	notesArr.forEach((element, index) => {
		html += `<div class="card m-2" style="width: 12rem"; id="card">
		<div class="card-body">
			<h5 class="card-title">Note ${index + 1}:</h5>
			<p class="card-text">${element}</p>
			<button onclick="delNote(this.id)" class="btn btn-primary" id="${index}">Delete Note</button></div></div>`
	});
	if (notesArr.length != 0) {
		document.getElementById("room").innerHTML = html;
	}
	else {
		document.getElementById("room").innerText = `Nothing to Display!!`;
	}
}

function access() {
	let notes = localStorage.getItem("notes");
	let notesArr;
	if (notes == null) {
		notesArr = []
	}
	else {
		notesArr = JSON.parse(notes);
	}
	return notesArr;
}

function delNote(pos) {
	let notesArr = access();
	notesArr.splice(pos, 1);
	localStorage.setItem("notes", JSON.stringify(notesArr));
	showNotes();
}


function find() {
	let search = document.getElementById('search');
	let val = search.value;
	let noteCard = document.querySelectorAll("div#card")
	Array.from(noteCard).forEach((element) => {
		let cardTxt = element.getElementsByTagName("p")[0].innerText;
		if (cardTxt.includes(val)) {
			element.style.display = 'block';
		}
		else {
			element.style.display = 'none';
		}
	});
}

