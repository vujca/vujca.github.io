let copyText = document.querySelector(".copy-text");
copyText.querySelector("button").addEventListener("click", function () {
	window.navigator.clipboard.writeText(code);
	document.execCommand("copy");
	copyText.classList.add("active");
	window.getSelection().removeAllRanges();
	setTimeout(function () {
		copyText.classList.remove("active");
	}, 2500);
});