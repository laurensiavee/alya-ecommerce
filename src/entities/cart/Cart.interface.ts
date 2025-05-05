interface CartItem {
    user_id: number;
    qty: number;
    products: CartProduct;
}

interface CartProduct {
    product_name: string;
    product_price: number;
    product_stock: number;
}