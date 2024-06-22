import axios from 'axios'; 

export const testGet = async () => {
    const response = await axios.get("http://localhost:8000/api/dump");
    return response.data
}