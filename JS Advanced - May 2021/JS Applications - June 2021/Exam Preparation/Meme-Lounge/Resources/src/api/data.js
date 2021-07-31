import * as httpRequests from './httpRequests.js';

const host = 'http://localhost:3030';
httpRequests.settings.host = host;

export const login = httpRequests.login;
export const register = httpRequests.register;
export const logout = httpRequests.logout;



export async function getAllMemes() {
    return await httpRequests.get(`${host}/data/memes?sortBy=_createdOn%20desc`);
}

export async function getMemeById(id) {
    return await httpRequests.get(`${host}/data/memes/${id}`)
}

export async function getMyMemes(userId) {
    return await httpRequests.get(`${host}/data/memes?where=_ownerId%3D%22${userId}%22&sortBy=_createdOn%20desc`);
}

export async function createNewMeme(data) {
    return await httpRequests.post(`${host}/data/memes`, data);
}

export async function updateMeme(id, data) {
    return await httpRequests.put(`${host}/data/memes/${id}`, data)
}

export async function deleteMeme(id) {
    return await httpRequests.del(`${host}/data/memes/${id}`)
}