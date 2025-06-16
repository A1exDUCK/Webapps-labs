const progress = 10;

function showProgress() {
    if (progress === 0) {
        console.log('Start loading...');
    } else if (progress === 100) {
        console.log('Loading complete!');
    } else {
        console.log('Still loading...');
    }

    const totalBlocks = 10;
    const filledBlocks = progress / 10;
    let progressBar = '[';

    for (let i = 0; i < totalBlocks; i++) {
        if (i < filledBlocks) {
            progressBar += '=';
        } else {
            progressBar += ' ';
        }
    }

    progressBar += '] ' + progress + '%';
    console.log(progressBar);
}

showProgress();
