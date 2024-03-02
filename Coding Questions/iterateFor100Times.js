function iterateFor100Times() {
    for (let i = 0; i <= 100; i++) {
        console.log((i % 3 === 0 && i % 5 === 0) ? 'fuzbuz' : i % 3 === 0 ? 'fuz' : i % 5 === 0 ? 'buz' : i);
    }
}
  

iterateFor100Times();

function iterateFor100TimesUsingIf() {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log('fuzbuz');
    } else if (i % 3 === 0) {
        console.log('fuz');
    } else if (i % 5 === 0) {
        console.log('buz');
    } else {
        console.log(i);
    }
}


iterateFor100TimesUsingIf();