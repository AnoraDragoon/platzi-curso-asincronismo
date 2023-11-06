// const fetch = require("node-fetch"); // type = commonjs
import fetch from "node-fetch"; // type = module

const API = 'https://api.escuelajs.co/api/v1';

function fetchData(urlApi) {
    return fetch(urlApi);
}

// fetchData(`${API}/products`)
//     .then(respose => respose.json())
//     .then(procucts => {
//         console.log(procucts);
//     })
//     .then(() => {
//         console.log('Hola!!')
//     })
//     .catch(error => console.error(error));

fetchData(`${API}/products`)
    .then(response => response.json())
    .then(products => {
        console.log(products[0]);
        return fetchData(`${API}/products/${products[0].id}`);
    })
    .then(response => response.json())
    .then(product => {
        console.log(product.title);
        return fetchData(`${API}/categories/${product.category.id}`);
    })
    .then(response => response.json())
    .then(category => {
        console.log(category);
    })
    .catch(error => console.error(error))
    .finally(() => console.log('Finish!!'));