import * as httpRequests from './httpRequests.js';

const host = 'http://localhost:3030';
httpRequests.settings.host = host;

export const login = httpRequests.login;
export const register = httpRequests.register;
export const logout = httpRequests.logout;

export async function getFurniture() {
    return await httpRequests.get(`${host}/data/catalog`);
}

export async function getFurnitureById(id) {
    return await httpRequests.get(`${host}/data/catalog/${id}`)
}

export async function getMyFurniture() {
    const userId = sessionStorage.getItem('userId')
    return await httpRequests.get(`${host}/data/catalog?where=_ownerId%3D%22${userId}%22`)
}

export async function createNewFurniture(data) {
    return await httpRequests.post(`${host}/data/catalog`, data);
}

export async function updateFurniture(id, data) {
    return await httpRequests.put(`${host}/data/catalog/${id}`, data)
}

export async function deleteFurniture(id) {
    return await httpRequests.del(`${host}/data/catalog/${id}`)
}