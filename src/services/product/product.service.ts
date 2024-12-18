import axios, { AxiosResponse } from "axios";
import { API_DEV_URI } from "@/const/token";
import { BaseResp } from "@/entities/BaseResp.interface";
import { PostAddProductReqBody } from "@/entities/product/PostAddProduct.interface";
import { PostAddProductCategoryReqBody } from "@/entities/product/PostAddProductCategory.interface";
import { Category } from "@/entities/product/Category.interface";
import { PatchProductCategoryReqBody, PatchProductCategoryReqParams } from "@/entities/product/PatchProductCategory.interface";
import { DeleteProductCategoryReqParams } from "@/entities/product/DeleteProductCategory.interface";
import { GetProductCategoryReqParams } from "@/entities/product/GetProductCategory.interface";
import { Product } from "@/entities/product/Product.interface";
import { PatchProductReqBody, PatchProductReqParams } from "@/entities/product/PatchProduct.interface";
import { DeleteProductReqParams } from "@/entities/product/DeleteProduct.interface";
import { GetProductReqParams } from "@/entities/product/GetProduct.interface";

const base_url = API_DEV_URI + `product/`;

export class ProductService {
    async postAddProduct(body: PostAddProductReqBody, token: any): Promise<BaseResp<string>> {
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

    async postAddProductCategory(body: PostAddProductCategoryReqBody, token: any): Promise<BaseResp<string>> {
        const config = {
            headers: {
                Authorization: `Bearer ${token.token}` // Add the authorization token to the headers
            }
        };
        
        try {
            const response: AxiosResponse = await axios.post(base_url + "category/", body, config);
            return this.responseMapper<string>(response)
        } catch (error) {
            return this.handleErrorResponse(error);
        }
    }

    async getProductList(token: any): Promise<BaseResp<Product[]>> {
        const config = {
            headers: {
                Authorization: `Bearer ${token.token}` // Add the authorization token to the headers
            }
        };
        
        try {
            const response: AxiosResponse = await axios.get(base_url, config);
            return this.responseMapper<Product[]>(response)
        } catch (error) {
            return this.handleErrorResponse<Product[]>(error);
        }
    }

    async getProductCategoryList(token: any): Promise<BaseResp<Category[]>> {
        const config = {
            headers: {
                Authorization: `Bearer ${token.token}` // Add the authorization token to the headers
            }
        };
        
        try {
            const response: AxiosResponse = await axios.get(base_url + "category", config);
            return this.responseMapper<Category[]>(response)
        } catch (error) {
            return this.handleErrorResponse<Category[]>(error);
        }
    }

    async patchProduct(req: PatchProductReqParams, body: PatchProductReqBody,  token: any): Promise<BaseResp<string>> {
        const config = {
            headers: {
                Authorization: `Bearer ${token.token}` // Add the authorization token to the headers
            }
        };
        
        try {
            const response: AxiosResponse = await axios.patch(base_url + req.product_id, body, config);
            return this.responseMapper<string>(response)
        } catch (error) {
            return this.handleErrorResponse(error);
        }
    }

    async patchProductCategory(req: PatchProductCategoryReqParams, body: PatchProductCategoryReqBody,  token: any): Promise<BaseResp<string>> {
        const config = {
            headers: {
                Authorization: `Bearer ${token.token}` // Add the authorization token to the headers
            }
        };
        
        try {
            const response: AxiosResponse = await axios.patch(base_url + "category/" + req.category_id, body, config);
            return this.responseMapper<string>(response)
        } catch (error) {
            return this.handleErrorResponse(error);
        }
    }
    
    async deleteProduct(req: DeleteProductReqParams, token: any): Promise<BaseResp<string>> {
        const config = {
            headers: {
                Authorization: `Bearer ${token.token}` // Add the authorization token to the headers
            }
        };
        
        try {
            const response: AxiosResponse = await axios.delete(base_url + req.product_id, config);
            return this.responseMapper<string>(response)
        } catch (error) {
            return this.handleErrorResponse(error);
        }
    }

    async deleteProductCategory(req: DeleteProductCategoryReqParams, token: any): Promise<BaseResp<string>> {
        const config = {
            headers: {
                Authorization: `Bearer ${token.token}` // Add the authorization token to the headers
            }
        };
        
        try {
            const response: AxiosResponse = await axios.delete(base_url + "category/" + req.category_id, config);
            return this.responseMapper<string>(response)
        } catch (error) {
            return this.handleErrorResponse(error);
        }
    }

    async getProduct(req: GetProductReqParams, token: any): Promise<BaseResp<Product>> {
        const config = {
            headers: {
                Authorization: `Bearer ${token.token}` // Add the authorization token to the headers
            }
        };
        
        try {
            const response: AxiosResponse = await axios.get(base_url + req.product_id, config);
            return this.responseMapper<Product>(response)
        } catch (error) {
            return this.handleErrorResponse<Product>(error);
        }
    }

    async getProductCategory(req: GetProductCategoryReqParams, token: any): Promise<BaseResp<Category>> {
        const config = {
            headers: {
                Authorization: `Bearer ${token.token}` // Add the authorization token to the headers
            }
        };
        
        try {
            const response: AxiosResponse = await axios.get(base_url + "category/" + req.category_id, config);
            return this.responseMapper<Category>(response)
        } catch (error) {
            return this.handleErrorResponse<Category>(error);
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