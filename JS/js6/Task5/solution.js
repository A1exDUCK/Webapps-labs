function solve() {
    const searchField = document.getElementById('searchField');
    const searchBtn = document.getElementById('searchBtn');
    const rows = document.querySelectorAll('.container tbody tr');

    searchBtn.addEventListener('click', performSearch);

    function performSearch() {
        const searchText = searchField.value.toLowerCase();

        rows.forEach(row => {
            row.classList.remove('select');
        });

        if (!searchText) {
            return;
        }

        rows.forEach(row => {
            const cells = row.querySelectorAll('td');
            let found = false;

            cells.forEach(cell => {
                const cellText = cell.textContent.toLowerCase();
                if (cellText.includes(searchText)) {
                    found = true;
                }
            });

            if (found) {
                row.classList.add('select');
            }
        });
    }
}
