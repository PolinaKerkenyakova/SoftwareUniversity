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
    return await httpRequests.get(`${host}/data/movies/${id}`)
}

export async function getMovieLikes(id) {
    return await httpRequests.get(`${host}/data/likes?where=movieId%3D%22${id}%22&distinct=_ownerId&count `)
}

export async function createMovie(data) {
    return await httpRequests.post(`${host}/data/movies`, data);
}

export async function addLikeToMovie(data) {
    return await httpRequests.post(`${host}/data/likes`, data);
}

export async function updateMovie(id, data) {
    return await httpRequests.put(`${host}/data/movies/${id}`, data)
}

export async function deleteMovie(id) {
    return await httpRequests.del(`${host}/data/movies/${id}`)
}