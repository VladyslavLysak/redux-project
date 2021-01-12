import axios from 'axios';

const url = './data.json';

export const fetchProducts = async () => {
    const response = await axios.get(url).then(res => res.data);
    return response.products;
}