import axios, { AxiosResponse } from "axios";
import { API_DEV_URI } from "@/const/token";
import { PostRegisterReqBody } from "@/entities/auth/PostRegisterReq.interface";

const base_url = API_DEV_URI + `auth/`;

export class AuthService {

    async postRegister(body: PostRegisterReqBody): Promise<void> {
        const url = base_url + `register/`;

        try {
            const response: AxiosResponse = await axios.post(url, body);
            console.log(response.data);
        } catch (error) {
            if (axios.isAxiosError(error)) {
                console.error("Request failed:", error.response?.data);
            } else {
                console.error("An unexpected error occurred:", error);
            }
        }
    }
}