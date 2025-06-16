function search() {
    const searchText = document.getElementById('searchText').value;
    const towns = document.getElementById('towns').getElementsByTagName('li');
    const result = document.getElementById('result');
    let matches = 0;

    for (let town of towns) {
        const text = town.textContent;
        if (text.toLowerCase().includes(searchText.toLowerCase())) {
            town.innerHTML = `<strong><u>${text}</u></strong>`;
            matches++;
        } else {
            town.innerHTML = text;
        }
    }

    result.textContent = `${matches} matches found`;
}
