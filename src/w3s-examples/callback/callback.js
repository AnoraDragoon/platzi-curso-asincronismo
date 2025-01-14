function getFile(myCallback) {
  let req = new XMLHttpRequest();
  req.open('GET', "http://localhost:3000/");
  req.onload = function () {
    if (req.status == 200) {
      myCallback(req.responseText);
    } else {
      myCallback("Error: " + req.status);
    }
  }
  req.send();
}

function myDisplayer(text) {
  console.log(text);
}

getFile(myDisplayer);