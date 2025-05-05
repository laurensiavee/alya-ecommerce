interface Wishlist{
    category_name: string;
    id: number;
    users_id: number;
    product_id: number;
    created_at: string;
    products: WishlistProduct
}

interface WishlistProduct{
    product_name: string;
    product_price: number;
    product_category_id: number;
}