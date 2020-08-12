import axios from 'axios'; // axios vai nos permitir conversar com o backend
require('dotenv').config()

/*
    A variável REACT_APP_API_URL será igual a:
    localhost usado pelo backend
    ou
    https://coverme-backend.herokuapp.com/api
*/
const api = axios.create({baseURL: process.env.REACT_APP_API_URL }); // aqui fica a conexão com o backend, e deve ficar o link para ele

export default api; // usarmemos 'api' sempre que formos fazer conexão com a api