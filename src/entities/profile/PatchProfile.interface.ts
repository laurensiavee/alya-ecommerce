export interface PatchProfileReqParam {
    user_id: string;
}

export interface PatchProfileReqBody {
    product_name: string;
    product_price: number;
    product_stock: number;
    product_category_id: number;
    discount: number;
    description: string;
}
