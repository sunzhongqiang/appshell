
const remote = require('electron').remote;

function setTop() {
  remote.getCurrentWindow().setAlwaysOnTop(true);
}


function unTop() {
  remote.getCurrentWindow().setAlwaysOnTop(false);
}
