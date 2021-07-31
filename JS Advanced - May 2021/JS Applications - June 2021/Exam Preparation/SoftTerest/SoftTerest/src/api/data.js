import * as httpRequests from './httpRequests.js';

const host = 'http://localhost:3030';
httpRequests.settings.host = host;

export const login = httpRequests.login;
export const register = httpRequests.register;
export const logout = httpRequests.logout;

export async function getAllCards() {
    return await httpRequests.get(`${host}/data/ideas?select=_id%2Ctitle%2Cimg&sortBy=_createdOn%20desc`);
}

export async function getCardById(id) {
    return await httpRequests.get(`${host}/data/ideas/${id}`)
}

export async function createNewIdea(data) {
    return await httpRequests.post(host + '/data/ideas', data);
}

export async function deleteIdea(id) {
    return await httpRequests.del(`${host}/data/ideas/${id}`)
}