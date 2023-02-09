import axios from 'axios';
const urlBase = 'https://mockend.com/juunegreiros/BE-test-api'

export let products:any, users:any;

axios.get(`${urlBase}/products`)
.then((res) => {
    products = res.data;
});

axios.get(`${urlBase}/users`)
.then((res) => {
    users = res.data;
});