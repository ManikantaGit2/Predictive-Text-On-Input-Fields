const words = ["Apple", "Banana", "Cherry", "Dragonfruit", "Elderberry", "Fig", "Grape", "Honeydew", "Kiwi", "Lemon", "Mango", "Orange", "Papaya", "Pineapple", "Strawberry", "Watermelon"];

function showSuggestions() {
    const input = document.getElementById("search").value.toLowerCase();
    const suggestionsDiv = document.getElementById("suggestions");
    suggestionsDiv.innerHTML = "";

    if (input === "") {
        return; // If input is empty, do nothing
    }

    const filteredWords = words.filter(word => word.toLowerCase().startsWith(input));

    filteredWords.forEach(word => {
        const div = document.createElement("div");
        div.classList.add("suggestion-item");
        div.innerText = word;
        div.onclick = () => {
            document.getElementById("search").value = word;
            suggestionsDiv.innerHTML = ""; // Clear suggestions after selection
        };
        suggestionsDiv.appendChild(div);
    });
}
