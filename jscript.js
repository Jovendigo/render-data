
const {ipcRenderer} = require('electron');
let studentId = document.getElementById('studentId');
let dateOccurred = document.getElementById('date');
let csHours = document.getElementById('csHours');
let Submit = document.getElementById('submit');


Submit.addEventListener('click', () => {
    let data = '{' +
        '\\"studentId\\":\\"' + studentId.value + '\\",' +
        '\\"dateOccurred\\":\\"' + dateOccurred.value + '\\"' +
        '\\"csHours\\":\\"' + csHours.value + '\\"'
        '}';
    ipcRenderer.send('item-channel', data);
});