function solve() {
    const text = document.getElementById('text').value;
    const convention = document.getElementById('naming-convention').value;
    const result = document.getElementById('result');

    if (convention !== 'Pascal Case' && convention !== 'Camel Case') {
        result.textContent = 'ERROR!';
        return;
    }

    const words = text.split(' ');
    let transformedText = '';

    if (convention === 'Pascal Case') {
        transformedText = words.map(word =>
            word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
        ).join('');
    } else {
        transformedText = words.map((word, index) => {
            if (index === 0) {
                return word.toLowerCase();
            }
            return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
        }).join('');
    }

    result.textContent = transformedText;
}
