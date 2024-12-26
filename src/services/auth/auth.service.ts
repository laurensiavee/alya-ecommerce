import axios, { AxiosResponse } from "axios";
import { API_DEV_URI } from "@/const/token";
import { PostRegisterReqBody } from "@/entities/auth/PostRegisterReq.interface";
import { BaseResp } from "@/entities/BaseResp.interface";
import { PostLoginReqBody } from "@/entities/auth/PostLoginReq.interface";
import { PostForgetPasswordReqBody } from "@/entities/auth/PostForgetPasswordReq.interface";
import { PostResetPasswordReqBody } from "@/entities/auth/PostResetPasswordReqBody.interface";
import { PostCheckPasswordTokenReqBody } from "@/entities/auth/PostCheckPasswordTokenReq.interface";

const base_url = API_DEV_URI + `auth/`;

export class AuthService {
    async postRegister(body: PostRegisterReqBody): Promise<BaseResp<string>> {
        try {
            const response: AxiosResponse = await axios.post(base_url + `register/`, body);
            return this.responseMapper<string>(response)
        } catch (error) {
            return this.handleErrorResponse(error);
        }
    }
    
    async postLogin(body: PostLoginReqBody): Promise<BaseResp<string>> {
        try {
            const response: AxiosResponse = await axios.post(base_url + `login/`, body);
            return this.responseMapper<string>(response)
        } catch (error) {
            return this.handleErrorResponse(error);
        }
    }

    async postForgetPassword(body: PostForgetPasswordReqBody): Promise<BaseResp<string>> {
        try {
            const response: AxiosResponse = await axios.post(base_url + `forgot-password/`, body);
            return this.responseMapper<string>(response)
        } catch (error) {
            return this.handleErrorResponse(error);
        }
    }

    async postCheckPasswordToken(body: PostCheckPasswordTokenReqBody): Promise<BaseResp> {
        const url = base_url + `check-password-token/`;

        try {
            const response: AxiosResponse = await axios.post(url, body);
            return this.responseMapper(response)
        } catch (error) {
            return this.handleErrorResponse(error);
        }
    }

    async postResetPassword(body: PostResetPasswordReqBody): Promise<BaseResp<string>> {
        try {
            const response: AxiosResponse = await axios.post(base_url + `reset-password/`, body);
            return this.responseMapper<string>(response)
        } catch (error) {
            return this.handleErrorResponse(error);
        }
    }

    async postLogout(token: any): Promise<BaseResp<string>> {
        const url = base_url + `logout/`;

        console.log("token scc", token)
        const config = {
            headers: {
                Authorization: `Bearer ${token.token}` // Add the authorization token to the headers
            }
        };

        try {
            const response: AxiosResponse = await axios.post(url, "", config);
            return this.responseMapper<string>(response)
        } catch (error) {
            return this.handleErrorResponse(error);
        }
    }

    private handleErrorResponse(error: any): BaseResp<string> {
        if (axios.isAxiosError(error)) {
            return {
                status: error.response?.status || 0,
                message: error.response?.data.message,
                data: error.response?.data.data
            };
        }

        return {
            status: 0,
            message: "an error occurred",
            data: ""
        };
    }

    private responseMapper<T = null>(response: AxiosResponse): BaseResp<T> {
        const baseResp: BaseResp<T> = {
            status: response.status,
            message: response.data.message,
            data: response.data.data
        }
        return baseResp
    }
}