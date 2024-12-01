import axios, { AxiosResponse } from "axios";
import { API_DEV_URI } from "@/const/token";
import { PostRegisterReqBody } from "@/entities/auth/PostRegisterReq.interface";
import { BaseResp } from "@/entities/BaseResp.interface";
import { PostLoginReqBody } from "@/entities/auth/PostLoginReq.interface";
import { PostForgetPasswordReqBody } from "@/entities/auth/PostForgetPasswordReq.interface";

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
}