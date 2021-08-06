import * as httpRequests from './httpRequests.js';

const host = 'http://localhost:3030';
httpRequests.settings.host = host;

export const login = httpRequests.login;
export const register = httpRequests.register;
export const logout = httpRequests.logout;

export async function getMovies() {
    return await httpRequests.get(`${host}/data/movies`);
}

export async function getMovieById(id) {
    return await httpRequests.get(`${host}/data/movies/${id}`);
}

// export async function getMyFurniture() {
//     const userId = sessionStorage.getItem('userId')
//     return await httpRequests.get(`${host}/data/catalog?where=_ownerId%3D%22${userId}%22`)
// }

export async function createNewMovie(data) {
    return await httpRequests.post(`${host}/data/movies`, data);
}

// export async function updateFurniture(id, data) {
//     return await httpRequests.put(`${host}/data/catalog/${id}`, data)
// }

// export async function deleteFurniture(id) {
//     return await httpRequests.del(`${host}/data/catalog/${id}`)
// }