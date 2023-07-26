export function Hide(htmlObject) {
    htmlObject.classList.add("hidden");
}

export function Show(htmlObject) {
    htmlObject.classList.remove("hidden");
}

export function AddClickListener(button, event) {
    button.addEventListener("click", event);
}