import axios from 'axios';

axios.defaults.withCredentials = true;

const url = axios.create({
  baseURL: 'https://daniels-todo.herokuapp.com'
});

export const getAllItems = () => url.get('/api/items');

export const createItem = (payload) => url.post('/api/items/', payload);

export const getOneItem = (id) => url.get(`/api/items/${id}`);

export const editItem = (id, payload) => url.post(`/api/items/${id}`, payload);

export const deleteItem = (id) => url.delete(`/api/items/${id}`);
