import axios from 'axios';

const API_URI = 'http://localhost:8000' // backend url

const API_INFO = async (urlObject, payload, type) => {
    // we create a middleware so it can work automatically after every req/route
    return await axios({
        method: urlObject.method,
        url:`${API_URI}/${urlObject.endpoint}/${type}`,
        data: payload, // when its post api payload will give us that data
    });
}

export default API_INFO;

