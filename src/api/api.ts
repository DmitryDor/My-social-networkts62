import axios from "axios";

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        'api-key': '85f5b2d8-12c7-48ad-9f88-79f9075e9df3'
    }
})

export const usersAPI = {
    getUsers(currentPage: number, pageSize: number) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`).then(response => response.data)
    },
    followUsers(id: number) {
        return instance.delete(`follow/${id}`)
    },
    unfolloewrUsers(id: number) {
        return instance.post(`follow/${id}`, {})
    }
}
export const authAPI = {
    authMe() {
        return instance.get(`auth/me`)
    }
}
export const profileAPI = {
    getProfiles(userId: string) {
        return instance.get(`profile/${userId}`)
    },
    getStatus(userId: string) {
        return instance.get(`profile/status/${userId}`)
    },
    updateStatus(status: string) {
        return instance.put(`profile/status`, {status})
    }
}


