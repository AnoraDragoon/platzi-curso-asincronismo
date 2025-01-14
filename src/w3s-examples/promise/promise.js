const name1 = 'dragoon';
const name2 = 'Gustavo';
const name3 = 'Osvaldo';

function fetchData(name) {
    let myPromise = new Promise(function (myResolve, myReject) {
        let req = new XMLHttpRequest();
        req.open('GET', `http://localhost:3000/new-endpoint/${name}`);
        req.onload = function () {
            if (req.status === 200) {
                myResolve(req.response);
            } else {
                myReject(req.response);
            }
        };
        req.send();
    });
    return myPromise;
}

function myDisplayer(text) {
    console.log(text);
}

myPromise1 = fetchData(name1);
myPromise2 = fetchData(name2);
myPromise3 = fetchData(name3);

Promise.all([myPromise1, myPromise3]).then(
    function (value) { myDisplayer(value); },
    function (error) { myDisplayer(error); }
);
// myPromise1.then(
//     function (value) { myDisplayer(value); },
//     function (error) { myDisplayer(error); }
// )
// myPromise2.then(
//     function (value) { myDisplayer(value); },
//     function (error) { myDisplayer(error); }
// )
// myPromise3.then(
//     function (value) { myDisplayer(value); },
//     function (error) { myDisplayer(error); }
// )