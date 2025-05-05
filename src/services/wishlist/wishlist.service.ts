import { API_DEV_URI } from "@/const/token";
import { BaseResp } from "@/entities/BaseResp.interface";
import { DeleteWishlistReqParams } from "@/entities/wishlist/DeleteWishlist.interface";
import { GetWishlistReqBody } from "@/entities/wishlist/GetWishlist.interface";
import { PostAddToWishlistReqBody } from "@/entities/wishlist/PostAddToWishlist.interface";
import axios, { AxiosResponse } from "axios";

const base_url = API_DEV_URI + `wishlist/`;

export class WishlistService {
    async postAddToWishlist(body: PostAddToWishlistReqBody, token: any): Promise<BaseResp<string>> {
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

    async getWishlist(body: GetWishlistReqBody, token: any): Promise<BaseResp<Wishlist[]>> {
        const config = {
            headers: {
                Authorization: `Bearer ${token.token}` // Add the authorization token to the headers
            }
        };
        
        try {
            const response: AxiosResponse = await axios.get(base_url + body.users_id, config);
            return this.responseMapper<Wishlist[]>(response)
        } catch (error) {
            return this.handleErrorResponse<Wishlist[]>(error);
        }
    }

    async deleteFromWishlist(req: DeleteWishlistReqParams, token: any): Promise<BaseResp<string>> {
        const config = {
            headers: {
                Authorization: `Bearer ${token.token}` // Add the authorization token to the headers
            }
        };
        
        try {
            const response: AxiosResponse = await axios.delete(base_url + req.wish_id, config);
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