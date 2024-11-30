import axios, { AxiosResponse } from "axios";
import { API_DEV_URI } from "@/const/token";
import { PostRegisterReqBody } from "@/entities/auth/PostRegisterReq.interface";
import { BaseResp } from "@/entities/BaseResp.interface";

const base_url = API_DEV_URI + `auth/`;

export class AuthService {

    async postRegister(body: PostRegisterReqBody): Promise<BaseResp> {
        const url = base_url + `register/`;

        try {
            const response: AxiosResponse = await axios.post(url, body);
            console.log("response");
            console.log(response);
            return response.data
        } catch (error) {
            if (axios.isAxiosError(error)) {
                return error.response?.data
            } else {
                return { 
                    data: "", 
                    message: "An unexpected error occurred"
                };
            }
        }
    }
}