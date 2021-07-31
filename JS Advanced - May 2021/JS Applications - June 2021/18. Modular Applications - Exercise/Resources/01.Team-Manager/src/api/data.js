import * as api from './httpRequests.js';

let host = 'http://localhost:3030';
api.settings.host = host;

export const login = api.login;
export const register = api.register;
export const logout = api.logout;

export async function getTeams() {
    return await api.get(host + '/data/teams');
}

// export const getAllMembers = () => {
//     return await httpRequests.get(host + '/data/members?where=status%3D%22member%22')
// }

// export const getAllMembersInTeam = (...ids) => {
//     return await httpRequests.get(host + `/data/members?where=teamId IN "${ids}" AND status="member"`)
// } ///??????

export async function createTeam(team) {
    return await api.post(host + '/data/teams', team);
}

export async function editTeam(id, team) {
    return await api.put(host + '/data/teams/' + id, team);
}

export async function deleteTeam(id) {
    return await api.del(host + '/data/teams/' + id);
}