import axios from "axios";
import { toast } from 'vue3-toastify';
import { store } from "@/store";
const headers: any = {
    "Content-Type": "application/json",
};

export const apiClient = axios.create({
    baseURL: 'http://localhost:8000/api',
    headers: { ...headers }
});
export const login = async (email: string, password: string, remember: boolean) => {
    const response = await apiClient.post(`/login`, {
        email,
        password,
        remember
    });
    const token = response.data.access_token;
    if (token && remember) {
        localStorage.setItem("token", token);
    }
    if (token && !remember) {
        sessionStorage.setItem("token", token);
    }
    return response.data;
};
export const getUser = async (access_token: any) => {
    apiClient.defaults.headers.common["Authorization"] = `Bearer ${access_token}`;
    const res = await apiClient.post('/get-user')
    store.commit('userAuthenticated', { ...res.data, access_token })
}
export const logout = async () => {
    const res = await apiClient.post('/logout')
    return res.data
}
apiClient.interceptors.response.use(
    function (response) {
        const { status, data } = response;
        if (status == 201 || status == 200) {
            if (data?.message) {
                toast.success(data?.message, { autoClose: 1500 });
            }
        }
        return response;
    },
    function (error) {
        // const { status, data } = error.response;
        // if (status == 401) {
        //     localStorage.removeItem("token")
        //     sessionStorage.removeItem("token")
        //     location.replace("/app/login")
        //     toast.error('Login Required!', { autoClose: 1500 });
        // }
        // if (status == 400 || status == 403 || status == 409) {
        //     toast.error(data.message, { autoClose: 1500 });
        // }
        // if (status == 500) {
        //     toast.error("Server Error!", { autoClose: 1500 });
        // }
        // if (status == 413) {
        //     toast.error("File size large!", { autoClose: 1500 });
        // }
        // if (status == 422) {
        //     toast.error("Please fill form !", { autoClose: 1500 });
        // }
        return Promise.reject(error);
    }
);