import axios  from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '17bd8f6e9c1d4c6f88d10e75230a70f5'
    }
})