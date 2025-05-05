import { API_DEV_URI } from "@/const/token";
import { BaseResp } from "@/entities/BaseResp.interface";
import { PatchProfileReqBody, PatchProfileReqParam } from "@/entities/profile/PatchProfile.interface";
import axios, { AxiosResponse } from "axios";

const base_url = API_DEV_URI + `users/`;

export class ProfileService {
    async patchProfile(req: PatchProfileReqParam, body: PatchProfileReqBody,  token: any): Promise<BaseResp<string>> {
        const config = {
            headers: {
                Authorization: `Bearer ${token.token}` // Add the authorization token to the headers
            }
        };
        
        try {
            const response: AxiosResponse = await axios.patch(base_url + req.user_id, body, config);
            return this.responseMapper<string>(response)
        } catch (error) {
            return this.handleErrorResponse(error);
        }
    }

    private handleErrorResponse<T = string> (error: any): BaseResp<T> {
        if (axios.isAxiosError(error)) {
            const baseResp: BaseResp<T> = {
                status: error.response?.status || 0,
                message: error.response?.data.message,
                data: error.response?.data.data
            }
            return baseResp
        }

        return {
            status: 0,
            message: "an error occurred",
            data: undefined
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