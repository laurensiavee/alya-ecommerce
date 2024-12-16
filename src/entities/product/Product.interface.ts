export interface Product {
    id: number;
    product_name: string;
    product_stock: number;
    product_price: number;
    product_category_id: number;
    description: string;
    discount: number;
    category: ProductCategory;
}

interface ProductCategory{
    category_name: string
}