function lockedProfile() {
    const profiles = document.querySelectorAll('.profile');

    for (let profile of profiles) {
        const lockRadio = profile.querySelector('input[value="lock"]');
        const unlockRadio = profile.querySelector('input[value="unlock"]');
        const hiddenFields = profile.querySelector('div[id^="user"]');
        const button = profile.querySelector('button');

        hiddenFields.style.display = 'none';

        button.addEventListener('click', function() {
            const isLocked = lockRadio.checked;

            if (isLocked) {
                return;
            }

            if (button.textContent === 'Show more') {
                hiddenFields.style.display = 'block';
                button.textContent = 'Hide it';
            } else {
                hiddenFields.style.display = 'none';
                button.textContent = 'Show more';
            }
        });

        lockRadio.addEventListener('change', function() {
            if (this.checked) {
                button.style.display = 'none';
            }
        });

        unlockRadio.addEventListener('change', function() {
            if (this.checked) {
                button.style.display = 'block';
                button.textContent = 'Show more';
            }
        });
    }
}
