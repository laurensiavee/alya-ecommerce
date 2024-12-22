import { API_DEV_URI } from "@/const/token";
import { BaseResp } from "@/entities/BaseResp.interface";
import { DeleteEventReqParams } from "@/entities/event/DeleteEvent.interface";
import { PostAddEventReqBody } from "@/entities/event/PostAddEvent.interface";
import axios, { AxiosResponse } from "axios";

const base_url = API_DEV_URI + `event/`;

export class EventService {
    async postAddEvent(body: PostAddEventReqBody, token: any): Promise<BaseResp<string>> {
        const config = {
            headers: {
                Authorization: `Bearer ${token.token}` // Add the authorization token to the headers
            }
        };
        
        try {
            const response: AxiosResponse = await axios.post(base_url, body, config);
            return this.responseMapper<string>(response)
        } catch (error) {
            return this.handleErrorResponse(error);
        }
    }

    async deleteEvent(req: DeleteEventReqParams, token: any): Promise<BaseResp<string>> {
        const config = {
            headers: {
                Authorization: `Bearer ${token.token}` // Add the authorization token to the headers
            }
        };
        
        try {
            const response: AxiosResponse = await axios.delete(base_url, config);
            return this.responseMapper<string>(response)
        } catch (error) {
            return this.handleErrorResponse(error);
        }
    }

    async getEventList(token: any): Promise<BaseResp<any[]>> {
        const config = {
            headers: {
                Authorization: `Bearer ${token.token}` // Add the authorization token to the headers
            }
        };
        
        try {
            const response: AxiosResponse = await axios.get(base_url, config);
            return this.responseMapper<any[]>(response)
        } catch (error) {
            return this.handleErrorResponse<any[]>(error);
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