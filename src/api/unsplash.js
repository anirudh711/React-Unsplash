import axios from 'axios';

export default axios.create({
    baseURL:'https://api.unsplash.com',
    headers:{
        Authorization:
        'Client-ID hcvUoFgN-uojNl3nQZhi37WpUI_qjQxGDGHLlTDYIoI'
    }
})