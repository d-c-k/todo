import axios from 'axios';

const url = axios.create({
  baseURL: 'https://git.heroku.com/daniels-todo.git'
});

export const getAllItems = () => url.get('/api/items');

export const createItem = (payload) => url.post('/api/items/', payload);

export const getOneItem = (id) => url.get(`/api/items/${id}`);

export const editItem = (id, payload) => url.post(`/api/items/${id}`, payload);

export const deleteItem = (id) => url.delete(`/api/items/${id}`);
