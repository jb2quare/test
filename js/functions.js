function toggleProfile() {
	var x = document.getElementById("profile-menu");
	if (x.style.display === "none") {
		x.style.display = "block";
	} else {
		x.style.display = "none";
	}
}

function toggle_visibility(id) {

	var e = document.getElementById(id);

	if (e.style.display == 'block')
		e.style.display = 'none';
	else
		e.style.display = 'block';
}