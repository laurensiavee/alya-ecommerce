import axios, { AxiosResponse } from "axios";
import { API_DEV_URI } from "@/const/token";
import { BaseResp } from "@/entities/BaseResp.interface";
import { PostAddProductReqBody } from "@/entities/product/PostAddProduct.interface";

const base_url = API_DEV_URI + `product/`;

export class ProductService {
    async postAddProduct(body: PostAddProductReqBody, token: any): Promise<BaseResp<string>> {
        console.log("token", token.token)
        
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