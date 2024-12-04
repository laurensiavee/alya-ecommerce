import axios, { AxiosResponse } from "axios";
import { API_DEV_URI } from "@/const/token";
import { PostRegisterReqBody } from "@/entities/auth/PostRegisterReq.interface";
import { BaseResp } from "@/entities/BaseResp.interface";
import { PostLoginReqBody } from "@/entities/auth/PostLoginReq.interface";
import { PostForgetPasswordReqBody } from "@/entities/auth/PostForgetPasswordReq.interface";
import { PostResetPasswordReqBody } from "@/entities/auth/PostResetPasswordReqBody.interface";
import { PostCheckPasswordTokenReqBody } from "@/entities/auth/PostCheckPasswordTokenReq.interface";
import { useDispatch } from "react-redux";

const base_url = API_DEV_URI + `auth/`;

export class AuthService {
    async postRegister(body: PostRegisterReqBody): Promise<BaseResp> {
        const url = base_url + `register/`;

        try {
            const response: AxiosResponse = await axios.post(url, body);
            return {
                status: response.status,
                message: response.data.message,
                data: response.data.data
            }
        } catch (error) {
            if (axios.isAxiosError(error)) {
                return {
                    status: error.response?.status? error.response?.status: 0,
                    message: error.response?.data.message,
                    data: error.response?.data.data
                }
            } else {
                return {
                    status: 0,
                    message: "an error occured",
                    data: ""
                }
            }
        }
    }
    
    async postLogin(body: PostLoginReqBody): Promise<BaseResp> {
        const url = base_url + `login/`;

        try {
            const response: AxiosResponse = await axios.post(url, body);
            return {
                status: response.status,
                message: response.data.message,
                data: response.data.data
            }
        } catch (error) {
            if (axios.isAxiosError(error)) {
                return {
                    status: error.response?.status? error.response?.status: 0,
                    message: error.response?.data.message,
                    data: error.response?.data.data
                }
            } else {
                return {
                    status: 0,
                    message: "an error occured",
                    data: ""
                }
            }
        }
    }

    async postForgetPassword(body: PostForgetPasswordReqBody): Promise<BaseResp> {
        const url = base_url + `forgot-password/`;

        try {
            const response: AxiosResponse = await axios.post(url, body);
            return {
                status: response.status,
                message: response.data.message,
                data: response.data.data
            }
        } catch (error) {
            if (axios.isAxiosError(error)) {
                return {
                    status: error.response?.status? error.response?.status: 0,
                    message: error.response?.data.message,
                    data: error.response?.data.data
                }
            } else {
                return {
                    status: 0,
                    message: "an error occured",
                    data: ""
                }
            }
        }
    }

    async postCheckPasswordToken(body: PostCheckPasswordTokenReqBody): Promise<BaseResp> {
        const url = base_url + `check-password-token/`;

        try {
            const response: AxiosResponse = await axios.post(url, body);
            return {
                status: response.status,
                message: response.data.message,
                data: response.data.data
            }
        } catch (error) {
            if (axios.isAxiosError(error)) {
                return {
                    status: error.response?.status? error.response?.status: 0,
                    message: error.response?.data.message,
                    data: error.response?.data.data
                }
            } else {
                return {
                    status: 0,
                    message: "an error occured",
                    data: ""
                }
            }
        }
    }

    async postResetPassword(body: PostResetPasswordReqBody): Promise<BaseResp> {
        const url = base_url + `reset-password/`;

        try {
            const response: AxiosResponse = await axios.post(url, body);
            return {
                status: response.status,
                message: response.data.message,
                data: response.data.data
            }
        } catch (error) {
            if (axios.isAxiosError(error)) {
                return {
                    status: error.response?.status? error.response?.status: 0,
                    message: error.response?.data.message,
                    data: error.response?.data.data
                }
            } else {
                return {
                    status: 0,
                    message: "an error occured",
                    data: ""
                }
            }
        }
    }

    async postLogout(token: string): Promise<BaseResp> {
        const url = base_url + `logout/`;

        const config = {
            headers: {
                Authorization: `Bearer ${token}` // Add the authorization token to the headers
            }
        };

        try {
            const response: AxiosResponse = await axios.post(url, "", config);
            return {
                status: response.status,
                message: response.data.message,
                data: response.data.data
            }
        } catch (error) {
            if (axios.isAxiosError(error)) {
                return {
                    status: error.response?.status? error.response?.status: 0,
                    message: error.response?.data.message,
                    data: error.response?.data.data
                }
            } else {
                return {
                    status: 0,
                    message: "an error occured",
                    data: ""
                }
            }
        }
    }
}