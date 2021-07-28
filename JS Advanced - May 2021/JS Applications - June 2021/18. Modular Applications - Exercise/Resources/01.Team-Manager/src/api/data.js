import * as httpRequests from './httpRequests.js';

const host = 'http://localhost:3030';
httpRequests.settings.host = host;

export const login = httpRequests.login;
export const register = httpRequests.register;
export const logout = httpRequests.logout;

