const list = document.querySelector("#list");
const input = document.querySelector("#favchap");
const button = document.querySelector("button");

button.addEventListener("click", () => {
	const chapter = input.value;
	input.value = "";

	const listItem = document.createElement("li");
	const listButton = document.createElement("button");

	listItem.textContent = chapter;
	listItem.appendChild(listButton);
	listButton.textContent = "❌";

	list.appendChild(listItem);

	listButton.addEventListener("click", () => {
		list.removeChild(listItem);
	});
	input.focus();
});
